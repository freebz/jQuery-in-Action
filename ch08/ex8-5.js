// Listing 8.5  A custom drop animation

$('.animated-elements').each(function() {
    var $this = $(this);
    $this
	.css('position', 'relative')
	.animate({
	    opacity: 0,
	    top: $(window).height() - $this.height() -
		$this.position().top
        },
	'normal',
	function() {
	    $this.hide();
	}
    );
});
