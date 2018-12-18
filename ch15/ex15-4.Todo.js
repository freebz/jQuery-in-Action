// Listing 15.4  The Todo model

app.Todo = Backbone.Model.extend({
    defaults: {
	position: 1,
	title: '',
	done: false
    },

    initialize: function() {
	this
	    .on('invalid', function(model, error) {
		console.log(error);
	    })
	    .on('add', function(model, error) {
		console.log(
		    'Todo with title "' + model.get('title') + '" added.'
		);
	    })
	    .on('remove', function(model, error) {
		console.log(
		    'Todo with title "' + model.get('title') + '" deleted.'
		);
	    })
	    .on('change', function(model, error) {
		console.log(
		    'Todo with title "' + model.get('title') + '" updated.'
		);
	    });
    },

    validate: function(attributes) {
	if(!attributes.title) {
	    return 'Title is required and cannot be empty';
	}

	if(
	    attributes.position === undefined ||
	    parseInt(attributes.position, 10) < 1
	) {
	    return 'Position must be positive';
	}
    }
});
