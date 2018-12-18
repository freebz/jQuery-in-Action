// Listing 15.5  The collection of Todos

app.todoList = new (Backbone.Collection.extend({
    model: app.Todo,

    localStorage: new Backbone.LocalStorage('todo-list'),

    comparator: 'position',

    initialize: function() {
	this.on('add remove', this.collectionChanged);
    },

    collectionChanged: function(todo) {
	if (todo.isValid()) {
	    this.each(function(element, index) {
		element.save({
		    position: index + 1
		});
	    });
	    this.sort();
	}
    }
}));
