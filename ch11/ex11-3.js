// Listing 11.3  Validating the data as the user fills the form

$('input, textarea', '#contact-form').blur(function() {
    var $this = $(this);

    $.ajax(
	'contact.php',
	{
	    method: 'POST',
	    dataType: 'json',
	    data: $this.serialize() + '&partial=true',
	    success: function(data) {
		if (data.status === 'error') {
		    $this
			.next('.error')
			.text(data.info[0].message);
		}
	    },
	    error: function(data) {
		console.log(data);
	    }
	}
    );
});
