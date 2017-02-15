module.exports = {
    elements: [
        {
            name: "App Root 1",
            transform: {
                x: 0, y: 0, w: 1.0, h: 1.0
            },
            components: [
                {
                    type: "UI/Layout/Horizontal"
                }
            ],
            children: [
                {
                    name: "Child1",
                    components: [],
                    children: []
                },
                {
                    name: "Child2",
                    components: [],
                    children: []
                },
                {
                    name: "Child3",
                    components: [],
                    children: []
                }
            ]
        },
        {
            name: "App Root 2",
            components: [],
            children: []
        }
    ]
};