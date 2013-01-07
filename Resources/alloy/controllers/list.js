function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.list = A$(Ti.UI.createView({
        id: "list"
    }), "View", null);
    $.addTopLevelView($.__views.list);
    $.__views.scroller = A$(Ti.UI.createScrollView({
        id: "scroller"
    }), "ScrollView", $.__views.list);
    $.__views.list.add($.__views.scroller);
    $.__views.todos = A$(Ti.UI.createView({
        layout: "vertical",
        id: "todos"
    }), "View", $.__views.scroller);
    $.__views.scroller.add($.__views.todos);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.load = function() {
        for (var i = 0, l = 50; i < l; i++) {
            var listItem = Alloy.createController("listItem", {
                done: !1
            }).getView();
            $.todos.add(listItem);
        }
    };
    $.init = function() {
        $.load();
        var m = Ti.UI.create2DMatrix({
            rotate: 90
        }), a = Ti.UI.createAnimation();
        a.transform = m;
        a.duration = 1;
        $.scroller.animate(a);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;