module.exports = {
    elements: {
        1: {
            parentId: -1,
            name: "App Root 1",
            components: [
                {
                    type: "Paint/Background",
                    data: {
                        color: {
                            r: 1, g: 1, b: 1, a: 1
                        }
                    }
                }
            ]
        },
        2: {
            parentId: -1,
            name: "App Root 2",
            components: [],
            children: []
        },
        3: {
            parentId: 2,
            name: "Child 1"
        },
        4: {
            parentId: 2,
            name: "Child 2"
        }

    }
};