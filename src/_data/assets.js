function Folder(name, contents, isOpen = true) {
    return {
        name: name,
        type: 'folder',
        data: {
            isOpen: isOpen,
            contents: contents
        }
    }
}

function Prefab(name, data, components) {
    return {
        type: 'prefab',
        name: name,
        data: data,
        components: components
    }
}

function Component(type, data) {
    return {
        type: type,
        data: data
    }
}

module.exports = [

    Prefab("Panel", {}, [
        Component("UI/Panel"),
        Component("Paint/Background", {
            color: {r: 255, g: 0, b: 0, a: 1}
        })
    ]),
    Prefab("Text", {}, [
        Component("UI/Text")
    ]),
    Prefab("Image", []),
    Prefab("Button", []),
    Prefab("Slider", []),
    Prefab("Toggle", []),
    Prefab("Input", []),
    Prefab("Dropdown", []),
    Prefab("Radio Button")
];


// module.exports = [
//     {
//         id: 0x0,
//         name: "thing",
//         type: "folder",
//         data: {
//             contents: [
//                 {
//                     id: 0x1,
//                     name: "Folder",
//                     type: "folder",
//                     data: {
//                         contents: [
//                             {
//                                 idx: 0x4,
//                                 name: "Some Item",
//                                 type: "image",
//                                 data: {
//                                     format: "png",
//                                     width: 300,
//                                     height: 300
//                                 }
//                             }
//                         ]
//                     }
//                 },
//                 {
//                     id: 0x2,
//                     name: "image",
//                     type: "image",
//                     data: {
//                         format: "png",
//                         width: 300,
//                         height: 300
//                     }
//                 },
//                 {
//
//                     id: 0x3,
//                     name: "image",
//                     type: "image",
//                     data: {
//                         format: "png",
//                         width: 300,
//                         height: 300
//                     }
//                 },
//                 {
//                     id: 0x5,
//                     name: 'prefab',
//                     type: "prefab",
//                     data: {
//                         transform: {
//                             position: "",
//                             rotation: "",
//                             width: "",
//                             height: "",
//                             scale: ""
//                         },
//                         components: [
//                             {
//                                 type: "UI/HorizontalLayout",
//                                 data: {
//                                     wrapMode: 1,
//                                     fillFrom: 'left',
//                                     overflow: 'hidden'
//                                 }
//                             },
//                             {
//                                 type: "UI/Anchor",
//                                 data: {
//                                     target: 0x1141,
//                                     topLeft: '',
//                                     topRight: '',
//                                     bottomLeft: "",
//                                     bottomRight: ""
//                                 }
//                             }
//                         ],
//                         children: [
//                             0x1, 0x2, 0x3
//                         ]
//                     }
//                 }
//             ]
//         }
//     }
// ];
