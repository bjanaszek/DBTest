function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createView({
        height: "55dp",
        id: "container"
    }), "View", null);
    $.addTopLevelView($.__views.container);
    $.__views.check = A$(Ti.UI.createLabel({
        color: "#a9a9a9",
        left: 0,
        opacity: 0.3,
        width: "45dp",
        textAlign: "center",
        font: {
            fontSize: "28dp"
        },
        id: "check",
        text: "✓"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.check);
    $.__views.del = A$(Ti.UI.createLabel({
        color: "#a9a9a9",
        right: "-45dp",
        width: "45dp",
        textAlign: "center",
        font: {
            fontSize: "28dp"
        },
        id: "del",
        plaform: "ios",
        text: "X"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.del);
    $.__views.__alloyId9 = A$(Ti.UI.createView({
        backgroundImage: "/dots.png",
        backgroundRepeat: !0,
        height: "1dp",
        bottom: 0,
        opacity: 0.3,
        id: "__alloyId9"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.__alloyId9);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;