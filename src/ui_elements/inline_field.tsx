import {HorizontalBase} from "./horizontal";

export class InlineField extends HorizontalBase<{ label : string }> {

    public createInitialStructure(children : JSXElement) : JSXElement {
        return [
            <span class="inline-label">{this.attrs.label}</span>,
            children
        ];
    }

}

createStyleSheet(`<style>

    .inline-label {
        /*padding-left: 1.8em;*/
        width: 125px;
    }
    
`);