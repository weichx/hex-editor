module.exports = {
    elements: {
        1: {
            parentId: 0,
            name: "Child 1",
            components: [
                {
                    type: "UI/Panel"
                },
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
            parentId: 0,
            name: "Child 2",
            components: [
                {
                    type: "UI/Panel"
                },
                {
                    type: "Paint/Background",
                    data: {
                        color: {
                            r: 255, g: 0, b: 0, a: 1
                        }
                    }
                }]
        },
        3: {
            parentId: 0,
            name: "Child 3",
            components: [
                {
                    type: "UI/Panel"
                },
                {
                    type: "Paint/Background",
                    data: {
                        color: {
                            r: 0, g: 255, b: 255, a: 1
                        }
                    }
                }]
        },
        // 4: {
        //     parentId: 0,
        //     name: "Child 2",
        //     components: [{
        //         type: "Paint/Background",
        //         data: {
        //             color: {
        //                 r: 0, g: 255, b: 0, a: 1
        //             }
        //         }
        //     }]
        // }

    }
};