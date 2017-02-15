
namespace HexEditor {

    export class InlineField extends HorizontalBase<{ label : string }> {

        public createInitialStructure(children : any) : JSXElement {
            return [
                <span class="inline-label">{this.attrs.label}</span>,
                children
            ];
        }

    }
}

createStyleSheet(`<style>

    .inline-label {
        padding-left: 1em;
        width: 125px;
    }
    
`);