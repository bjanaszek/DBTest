exports.definition = {
    config: {
        columns: {
            todo_text: "text",
            create_date: "text",
            complete: "integer"
        },
        defaults: {
            todo_text: "--",
            create_date: (new Date).toGMTString(),
            complete: 0
        },
        adapter: {
            type: "sql",
            collection_name: "todos"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) if (key === "todo_text" && attrs[key].length <= 0) return "Error: No value for " + key;
            },
            customProperty: "todo"
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(todo) {
                return todo.get("create_date");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("todo", exports.definition, []);

collection = Alloy.C("todo", exports.definition, model);

exports.Model = model;

exports.Collection = collection;