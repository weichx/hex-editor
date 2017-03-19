"use strict";
exports.__esModule = true;
var LifeCycleFlag;
(function (LifeCycleFlag) {
    LifeCycleFlag[LifeCycleFlag["Invalid"] = 1] = "Invalid";
    LifeCycleFlag[LifeCycleFlag["Created"] = 2] = "Created";
    LifeCycleFlag[LifeCycleFlag["Enabled"] = 4] = "Enabled";
    LifeCycleFlag[LifeCycleFlag["Disabled"] = 8] = "Disabled";
    LifeCycleFlag[LifeCycleFlag["Rendered"] = 16] = "Rendered";
    LifeCycleFlag[LifeCycleFlag["Mounted"] = 32] = "Mounted";
    LifeCycleFlag[LifeCycleFlag["Destroyed"] = 64] = "Destroyed";
    LifeCycleFlag[LifeCycleFlag["Structured"] = 128] = "Structured";
})(LifeCycleFlag = exports.LifeCycleFlag || (exports.LifeCycleFlag = {}));
