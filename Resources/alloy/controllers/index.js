function Controller() {
    function handleShowAll(e) {
        $.index.add($.list.getView());
        $.list.init();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "#fefefe",
        exitOnClose: !0,
        navBarHidden: !0,
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.index.activity.onCreateOptionsMenu = function(e) {
        var __alloyId4 = {
            id: "showAll",
            title: "Show All"
        };
        $.__views.showAll = A$(e.menu.add(_.pick(__alloyId4, Alloy.Android.menuItemCreateArgs)), "MenuItem", e.menu);
        _.each(_.omit(__alloyId4, Alloy.Android.menuItemCreateArgs), function(v, k) {
            $.__views.showAll[k] = v;
        });
        handleShowAll() ? $.__views.showAll.on("click", handleShowAll()) : __defers["$.__views.showAll!click!handleShowAll()"] = !0;
        var __alloyId5 = {
            id: "showCompleted",
            title: "Show Completed"
        };
        $.__views.showCompleted = A$(e.menu.add(_.pick(__alloyId5, Alloy.Android.menuItemCreateArgs)), "MenuItem", e.menu);
        _.each(_.omit(__alloyId5, Alloy.Android.menuItemCreateArgs), function(v, k) {
            $.__views.showCompleted[k] = v;
        });
        var __alloyId6 = {
            id: "clearCompleted",
            title: "Clear Completed"
        };
        $.__views.clearCompleted = A$(e.menu.add(_.pick(__alloyId6, Alloy.Android.menuItemCreateArgs)), "MenuItem", e.menu);
        _.each(_.omit(__alloyId6, Alloy.Android.menuItemCreateArgs), function(v, k) {
            $.__views.clearCompleted[k] = v;
        });
    };
    $.__views.formContainer = A$(Ti.UI.createView({
        height: "55dp",
        top: "16dp",
        id: "formContainer"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.formContainer);
    $.__views.__alloyId7 = Alloy.createController("form", {
        id: "__alloyId7"
    });
    $.__views.__alloyId7.setParent($.__views.formContainer);
    $.__views.listContainer = A$(Ti.UI.createView({
        top: "71dp",
        bottom: 0,
        id: "listContainer"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.listContainer);
    $.__views.__alloyId8 = Alloy.createController("list", {
        id: "__alloyId8"
    });
    $.__views.__alloyId8.setParent($.__views.listContainer);
    $.__views.rule1 = A$(Ti.UI.createView({
        width: "1dp",
        backgroundColor: "#f5d6d6",
        opacity: 0.7,
        left: "45dp",
        id: "rule1"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.rule1);
    $.__views.rule2 = A$(Ti.UI.createView({
        width: "1dp",
        backgroundColor: "#f5d6d6",
        opacity: 0.7,
        left: "50dp",
        id: "rule2"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.rule2);
    $.__views.bar = A$(Ti.UI.createView({
        top: 0,
        height: "16dp",
        backgroundImage: "/bar.png",
        id: "bar"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.bar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.list = Alloy.createController("list");
    $.index.open();
    __defers["$.__views.showAll!click!handleShowAll()"] && $.__views.showAll.on("click", handleShowAll());
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;