// Listing 10.5  Chaning The Boot Closet to use a GET when fetching style details

$('#boot-chooser-control')
    .change(function(event) {
	$.get(
	    'actions/fetch-product-details.php',
	    {
		model: $(event.target).val()
	    },
	    functi(response) {
		$('#product-detail-pane').html(response);
		$('[value=""]', event.target).remove();
	    }
	);
    });
