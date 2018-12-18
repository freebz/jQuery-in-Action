// Listing 15.6  The Todo view

app.TodoView = Backbone.View.extend({
    tagName: 'li',
    className: 'todo',

    template: _.template($('#todo-template').html()),

    events: {
	'blur .todo-position': 'updateTodo',
	'change .todo-done': 'updateTodo',
	'keypress .todo-title': 'updateOnEnter',
	'click .todo-delete': 'deleteTodo'
    },

    initialize: function() {
	this.listenTo(this.model, 'change', this.render);
	this.listenTo(this.model, 'destroy', this.remove);
    },

    deleteTodo: function() {
	this.model.destroy();
    },

    updateTodo: function() {
	this.model.save({
	    title: $.trim(this.$title.text()),
	    position: parseInt(this.$position.text(), 10),
	    done: this.$done.is(':checked')
	});
    },

    updateOnEnter: function(event) {
	if (event.which === 13) {
	    this.updateTodo();
	}
    },

    render: function() {
	this.$el.html(this.template(this.model.toJSON()));
	this.$title = this.$('.todo-title');
	this.$position = this.$('.todo-position');
	this.$done = this.$('.todo-done');

	return this;
    }
});
