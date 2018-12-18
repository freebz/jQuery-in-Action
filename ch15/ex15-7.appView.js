// Listing 15.7  The application view

app.appView = Backbone.View.extend({
    el: '#todo-sheet',

    events: {
	'click #new-todo-save': 'createTodo'
    },

    initialize: function() {
	this.$input = this.$('#new-todo');
	this.$list = this.$('ul.todos');

	this.listenTo(app.todoList, 'reset sort destroy', this.showTodos);
	this.listenTo(app.todoList, 'invalid', this.showError);

	app.todoList.fetch();
    },

    createTodo: function() {
	app.todoList.create(
	    {
		title: this.$input.val().trim()
	    },
	    {
		at: 0,
		validate: true
	    }
	);

	this.$input.val('');
    },

    showError: function(collection, error, model) {
	this
	    .$('.error-message')
	    .finish()
	    .html(error)
	    .fadeIn('slow')
	    .delay(2000)
	    .fadeOut('slow');
    },

    showTodo: function(todo) {
	if (todo.isValid()) {
	    var view = new app.TodoView({ model: todo });
	    this.$list.prepend(view.render().el);
	}
    },

    showTodos: function() {
	this.$list.empty();
	var todos = app.todoList.sortBy(function(element) {
	    return -1 * parseInt(element.get('position'), 10);
	});
	for(var i = 0; i < todos.length; i++) {
	    this.showTodo(todos[i]);
	}
    }
});
