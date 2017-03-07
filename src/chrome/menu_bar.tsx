
import {EditorHTMLElement} from "../editor_element/editor_html_element";
interface IMenuBarAttributes {}

interface IMenuItem {
    path : string;
    icon? : string;
    action? : () => void;
}

export class MenuItem extends EditorHTMLElement<IMenuItem> {

    private noOp() : void { }

    public createInitialStructure(children : JSXElement) : JSXElement {
        if (!this.attrs.action) {
            this.attrs.action = this.noOp;
        }
        const pathSegments = this.attrs.path.split("/");
        const menuText = pathSegments[pathSegments.length - 1];
        const depth = pathSegments.length;
        const menuClasses = (depth > 1) ? "sub-menu expand-left" : "sub-menu";
        return <li class="menu-item" onClick={this.attrs.action}>
            <a x-id="menu-text">{menuText}</a>
            <ul x-child-root class={menuClasses}>
                {children}
            </ul>
        </li>
    }

}

export class MenuBar extends EditorHTMLElement<IMenuBarAttributes> {

    private menus : Indexable<MenuItem> = {};

    private getMenuParent(tokenizedPath : string[]) : any {
        if (tokenizedPath.length === 0) return null;
        const path = tokenizedPath.join('/');
        if (this.menus[path]) {
            return this.menus[path];
        }
        else {
            return this.createMenuItem({ path: path, icon: "" });
        }
    }

    public createMenuItem(option : IMenuItem) : MenuItem {
        const tokenizedPath = option.path.split("/").map((s) => s.trim());
        tokenizedPath.pop();
        const parent = this.getMenuParent(tokenizedPath);
        const item = <MenuItem
            path={option.path}
            action={option.action}
            icon={option.icon}/> as MenuItem;
        this.menus[option.path] = item;
        if (parent) {
            parent.getChildRoot().addChild(item);
        }
        else {
            this.getChildRoot().addChild(item);
        }
        return item as MenuItem;
    }

    public onRendered() {
        this.createMenuItem({
            path: "File/Save As", action: () => {
                EditorRuntime.getScene().save();
            }
        });
        // this.createMenuItem({ path: "View/Save As/JPG" });
        // this.createMenuItem({ path: "View/Save As/PNG" });
        // this.createMenuItem({ path: "View/Save As/PDF" });
        // this.createMenuItem({ path: "View/Save As/Something Else/Other" });
    }

    public createInitialStructure(children : any) : JSXElement {
        return <ul x-child-root class="menu-bar-root"/>
    }

}

const bgColor = '#6b6b6b';

createStyleSheet(`<style>
.menu-bar {
    width: 100%;
    height: 1.5em;
    background-color: ${bgColor};
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;
}

.menu-bar ul {
    margin: 0 0 1em 0;
    padding: 0;
    z-index:10;
}

.menu-bar-root {
    margin-left: 1em;
}

.menu-bar-root > .menu-item {
    display: inline-block;
    color: whitesmoke;
    padding-right: 1em;
    text-align: start;
}

.sub-menu {
    position: absolute;
    display:none;
    background: ${bgColor};
    padding-left: 1em;
    width: 200px;
    list-style: none;
}

.menu-item:hover > .sub-menu {
    display: block;
    background-color: whitesmoke;
}

.expand-left {
    left: 100%;
    margin-top: -20px; /* todo -- wrong value here */
}

</style>`);