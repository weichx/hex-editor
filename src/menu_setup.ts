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
import {BackgroundComponent} from "./runtime/components/background_component";
import {Color} from "./runtime/color";
import {LengthUnit} from "./runtime/components/layout/layout";

function createTextElement(parent : AppElement = null) : AppElement {
    const element = new AppElement("Text", parent);
    const text = element.addComponent(TextComponent);
    text.setTextAsync("Enter Text Here");
    return element;
}

function createPanelElement(parent : AppElement = null) : AppElement {
    const element = new AppElement("Panel", parent);
    element.addComponent(PanelComponent);
    const bg = element.addComponent(BackgroundComponent);
    bg.color = Color.random();
    element.setDimensions(100, 40, LengthUnit.Pixel);
    return element;
}

function createImageElement(parent : AppElement = null) : AppElement {
    const element = new AppElement("Image", parent);
    element.addComponent(ImageComponent);
    return element;
}

function createButtonElement(parent : AppElement = null) : AppElement {
    const element = new AppElement("Button", parent);
    element.addComponent(ButtonComponent);
    // const size = element.addComponent(SizingComponent);
    // size.width = 100;
    // size.height = 20;
    return element;
}

function createCheckboxElement(parent : AppElement = null) : AppElement {
    const element = new AppElement("Toggle", parent);
    element.addComponent(CheckboxComponent);
    return element;
}

function createSliderElement(parent : AppElement = null) : AppElement {
    const element = new AppElement("Slider", parent);
    element.addComponent(SliderComponent);
    return element;
}

function createDropdownElement(parent : AppElement = null) : AppElement {
    const element = new AppElement("Dropdown", parent);
    element.addComponent(DropdownComponent);
    return element;
}

function createTextInputElement(parent : AppElement = null) : AppElement {
    const element = new AppElement("Text Input", parent);
    element.addComponent(TextInputComponent);
    return element;
}

function createNumberInputElement(parent : AppElement = null) : AppElement {
    const element = new AppElement("Number Input", parent);
    element.addComponent(NumberInputComponent);
    return element;
}

function createTextAreaElement(parent : AppElement = null) : AppElement {
    const element = new AppElement("Text Area Input", parent);
    element.addComponent(TextAreaComponent);
    return element;
}

export function getCreationMenu(selection : AppElement = null) : nw.Menu {
    const creationMenu = new nw.Menu();

    creationMenu.append(new nw.MenuItem({label: "Text", click: function() {  createTextElement(selection) }} ));
    creationMenu.append(new nw.MenuItem({label: "Panel", click: function() {  createPanelElement(selection) }} ));
    creationMenu.append(new nw.MenuItem({label: "Image", click: function() {  createImageElement(selection) }} ));
    creationMenu.append(new nw.MenuItem({label: "Button", click: function() {   createButtonElement(selection) }} ));
    creationMenu.append(new nw.MenuItem({label: "Toggle", click: function() {   createCheckboxElement(selection) }} ));
    creationMenu.append(new nw.MenuItem({label: "Slider", click: function() {   createSliderElement(selection) }} ));
    creationMenu.append(new nw.MenuItem({label: "Dropdown", click: function() {   createDropdownElement(selection) }} ));
    creationMenu.append(new nw.MenuItem({label: "Text Input", click: function() {   createTextInputElement(selection) }} ));
    creationMenu.append(new nw.MenuItem({label: "Number Input", click: function() {   createNumberInputElement(selection) }} ));
    creationMenu.append(new nw.MenuItem({label: "Text Area", click: function() {   createTextAreaElement(selection) }} ));

    return creationMenu;
}