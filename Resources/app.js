var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone, db = Ti.Database.open("_alloy_");

db.execute("CREATE TABLE IF NOT EXISTS todos (id INT AUTO_INCREMENT PRIMARY KEY, todo_text TEXT, complete INT, create_date TEXT)");

db.close();

Alloy.createController("index");