module.exports = [
    {
        id: 0x0,
        name: "thing",
        type: "folder",
        data: {
            contents: [
                {
                    id: 0x1,
                    name: "Folder",
                    type: "folder",
                    data: {
                       contents: [
                           {
                               idx: 0x4,
                               name: "Some Item",
                               type: "image",
                               data: {
                                   format: "png",
                                   width: 300,
                                   height: 300
                               }
                           }
                       ]
                    }
                },
                {

                    id: 0x2,
                    name: "image",
                    type: "image",
                    data: {
                        format: "png",
                        width: 300,
                        height: 300
                    }
                },
                {

                    id: 0x3,
                    name: "image",
                    type: "image",
                    data: {
                        format: "png",
                        width: 300,
                        height: 300
                    }
                }
            ]
        }
    }
];
