exports.definition = {
	
	config: {
		"columns": {
			"todo_text":"text"
			, "create_date":"text"
			, "complete":"integer"
		}
		, "defaults": {
			"todo_text": "--"
			, "create_date": new Date().toGMTString()
			, "complete": 0
		}
		, "adapter": {
			"type": "sql"
			, "collection_name": "todos"
		}
	}
	
	, extendModel: function(Model) {		
		_.extend(Model.prototype, {
			validate: function(attrs) {
				for(var key in attrs) {
					if(key === "todo_text") {
						if(attrs[key].length <= 0) {
							return "Error: No value for " + key;
						}
					}
				}
			}
			, customProperty: 'todo'

		}); // end extend
		
		return Model;
	}
	
	, extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			
			// For example, a sorting function:
			comparator: function(todo) {
				return todo.get("create_date");
			}
		}); // end extend
		
		return Collection;
	}
		
}

