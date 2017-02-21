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
                            r: 255, g: 255, b: 255, a: 1
                        }
                    }
                }
            ]
        },
        2: {
            parentId: -1,
            name: "App Root 2",
            components: [{
                type: "Paint/Background",
                data: {
                    color: {
                        r: 255, g: 0, b: 0, a: 1
                    }
                }
            }]
        },
        3: {
            parentId: 2,
            name: "Child 1",
            components: [{
                type: "Paint/Background",
                data: {
                    color: {
                        r: 0, g: 255, b: 255, a: 1
                    }
                }
            }]
        },
        4: {
            parentId: 2,
            name: "Child 2",
            components: [{
                type: "Paint/Background",
                data: {
                    color: {
                        r: 0, g: 255, b: 0, a: 1
                    }
                }
            }]
        }

    }
};