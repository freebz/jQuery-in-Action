// Listing 8.4  A custom scale animation

$('.animated-elements').each(function() {
    var $this = $(this);
    $this.animate({
	    width: $this.width() * 2,
	    height: $this.height() * 2
        },
        2000
    );
});
