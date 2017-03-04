import {UIComponent} from "../ui_component";
import {inspector} from "../../../renderers/component/expose_as";
import {component} from "../../component";
import {CommandType} from "../../enums/e_command_type";

export interface IImage {

}

@component("UI/Image")
export class ImageComponent extends UIComponent {

    @inspector(String) public image : string; //todo make this not a string

    public async setImageAsync(image : IImage) : Promise<IImage> {
        return null;
    }

    public serialize() : any {
        return {
            elementType: "Image",
            commands: [
                {
                    type: CommandType.SetImage,
                    data: {
                        id: this.appElement.id,
                        image: "img/placeholder.svg"
                    }
                }
            ]
        }
    }

}