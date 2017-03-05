function Folder(name, isOpen = true, children = []) {
    return {
        name: name,
        type: 'folder',
        data: {
            isOpen: isOpen,
        },
        children: children
    }
}

function Prefab(name, data, children = []) {
    return {
        type: 'prefab',
        name: name,
        data: data,
        children: children
    }
}

function Component(type, data) {
    return {
        type: type,
        data: data
    }
}

module.exports = [
    Folder("Root Folder", true, [
        Prefab("Panel", {
            components: [
                Component("UI/Panel"),
                Component("Paint/Background", {
                    color: {r: 255, g: 0, b: 0, a: 1}
                })
            ]
        }),
        Prefab("Text", {
            position: {x: 1, y: 1},
            components: [
                Component("UI/Text", {
                    textContent: "Hex Yeah!"
                })
            ]
        }),
        Prefab("Image", {
            components: [
                Component("UI/Image", {
                    assetId: "img/placeholder.svg" //todo formalize asset ids and resource management
                })
            ]
        }),
        Prefab("Button", {
            components: [
                Component("UI/Button", {
                    text: "Click Me!"
                })
            ]
        }),
        // Prefab("Slider", {}, []),
        // Prefab("Toggle", {}, []),
        // Prefab("Input", {}, []),
        // Prefab("Dropdown", {}, []),
        // Prefab("Radio Button", {}, [])
    ], true)
];

