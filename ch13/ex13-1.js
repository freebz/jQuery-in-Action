// Listing 13.1  Implementing multiple asynchronous operations with callbacks

var number1, number2;

function handler() {
    var $content = $('#content');

    if (number1 === null || number2 === null) {
	$content.text('An error has occurred, try again later.');
    } else if (number1 !== undefined && number2 !== undefined) {
	$content.text(number1 + number2);
    }
}

$.ajax('http://www.randomizer.com/number', {
    success: function(data, status) {
	number1 = (status === 'success') ? parseInt(data, 10) : null;
	handler();
    },
    error: function() {
	number1 = null;
	handler();
    }
});

$.ajax('http://www.randomizer.com/number', {
    success: function(data, status) {
	number2 = (status === 'success') ? parseInt(data, 10) : null;
	handler();
    },
    error: function() {
	number2 = null;
	handler();
    }
});
