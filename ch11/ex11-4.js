// Listing 11.4  The handler to manage the submit request via an Ajax request

$('#contact-form').submit(function(event) {
    event.preventDefault();

    $.post(
	'contact.php',
	$(this).serialize(),
	function (data) {
	    if (data.status === 'error') {
		$.each(data.info, function(index, elem) {
		    $('#' + elem.field)
			.next('.error')
			.text(elem.message);
		});
	    }

	    var $dialogBox = $('.dialog-box');
	    
	    $dialogBox
		.children('.title')
		.text(data.status);
	    
	    $dialogBox
		.children('.message')
		.text(data.message);
	    
	    $dialogBox
		.finish()
		.show();
	},
	'json'
    );
});
