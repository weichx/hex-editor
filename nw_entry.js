(function () {

    const server = require("./server");
    window.FileSystem = server.FileSystem;
    window.System = server.System;

    var win = nw.Window.get();

    win.showDevTools();

    var menu = new nw.Menu({type: 'menubar'});

    var submenu = new nw.Menu();
    submenu.append(new nw.MenuItem({
        label: 'Save', click: function () {
            EditorRuntime.getScene().save();
        }
    }));
    submenu.append(new nw.MenuItem({label: 'Load'}));

    menu.append(new nw.MenuItem({
        label: 'File',
        submenu: submenu,
        click: function () {

        },
    }));

    win.menu = menu;

    win.maximize();

})();