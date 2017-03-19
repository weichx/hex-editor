import {AppElement} from "./runtime/app_element";
import {TextComponent} from "./runtime/components/ui/text_component";
import {PanelComponent} from "./runtime/components/ui/panel_component";
import {ImageComponent} from "./runtime/components/ui/image_component";
import {ButtonComponent} from "./runtime/components/ui/button_component";
import {CheckboxComponent} from "./runtime/components/ui/checkbox_component";
import {SliderComponent} from "./runtime/components/ui/slider_component";
import {DropdownComponent} from "./runtime/components/ui/dropdown_component";
import {TextInputComponent} from "./runtime/components/ui/text_input_component";
import {NumberInputComponent} from "./runtime/components/ui/number_input_component";
import {TextAreaComponent} from "./runtime/components/ui/text_area_component";

function createTextElement() : AppElement {
    const element = new AppElement("Text");
    element.addComponent(TextComponent);
    return element;
}

function createPanelElement() : AppElement {
    const element = new AppElement("Panel");
    element.addComponent(PanelComponent);
    return element;
}

function createImageElement() : AppElement {
    const element = new AppElement("Image");
    element.addComponent(ImageComponent);
    return element;
}

function createButtonElement() : AppElement {
    const element = new AppElement("Button");
    element.addComponent(ButtonComponent);
    return element;
}

function createCheckboxElement() : AppElement {
    const element = new AppElement("Toggle");
    element.addComponent(CheckboxComponent);
    return element;
}

function createSliderElement() : AppElement {
    const element = new AppElement("Slider");
    element.addComponent(SliderComponent);
    return element;
}

function createDropdownElement() : AppElement {
    const element = new AppElement("Dropdown");
    element.addComponent(DropdownComponent);
    return element;
}

function createTextInputElement() : AppElement {
    const element = new AppElement("Text Input");
    element.addComponent(TextInputComponent);
    return element;
}

function createNumberInputElement() : AppElement {
    const element = new AppElement("Number Input");
    element.addComponent(NumberInputComponent);
    return element;
}

function createTextAreaElement() : AppElement {
    const element = new AppElement("Text Area Input");
    element.addComponent(TextAreaComponent);
    return element;
}

export function getCreationMenu() : nw.Menu {
    const creationMenu = new nw.Menu();

    creationMenu.append(new nw.MenuItem({label: "Text", click: createTextElement }));
    creationMenu.append(new nw.MenuItem({label: "Panel", click: createPanelElement }));
    creationMenu.append(new nw.MenuItem({label: "Image", click: createImageElement }));
    creationMenu.append(new nw.MenuItem({label: "Button", click:  createButtonElement }));
    creationMenu.append(new nw.MenuItem({label: "Toggle", click:  createCheckboxElement }));
    creationMenu.append(new nw.MenuItem({label: "Slider", click:  createSliderElement }));
    creationMenu.append(new nw.MenuItem({label: "Dropdown", click:  createDropdownElement }));
    creationMenu.append(new nw.MenuItem({label: "Text Input", click:  createTextInputElement }));
    creationMenu.append(new nw.MenuItem({label: "Number Input", click:  createNumberInputElement }));
    creationMenu.append(new nw.MenuItem({label: "Text Area", click:  createTextAreaElement }));

    return creationMenu;
}