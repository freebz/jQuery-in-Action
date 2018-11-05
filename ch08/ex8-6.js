// Listing 8.5  A custom puff animation

$('.animated-elements').each(function() {
    var $this = $(this);
    var position = $this.position();
    $this
	.css({
	    position: 'absolute',
	    top: position.top,
	    left: position.left
	})
	.animate({
	    opacity: 'hide',
	    width: $this.width() * 5,
	    height: $this.height() * 5,
	    top: position.top - ($this.height() * 5 / 2),
	    left: position.left - ($this.width() * 5 / 2)
        },
	'fast'
    );
});
