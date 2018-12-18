// Listing 15.2  A simple router in Backbone.js

var TodoRouter = Backbone.Router.extend({
    routes: {
	"todo/:id": "getTodo",
	"search/:string": "searchTodo"
    },

    getTodo: function(id) {
	// Your code here
    },

    searchTodo(string) [
	// Your code here
    }
});
