// Listing 12.2  Revisited version of jqia Context Menu plugin

(function($) {
    var defaults = {
	idMenu: null,
	bindLeftClick: false
    };

    var methods = {
	init: function() {
	    // Code here...
	},
	destroy: function() {
	    // Code here...
	}
    };

    $.fn.qjiaContextMenu = function(method) {
	if (methods[method]) {
	    return methods[method].apply(
		this,
		Array.prototype.slice.call(arguments, 1)
	    );
	} else if ($.type(method) === 'object') {
	    return methods.init.apply(this, arguments);
	} else {
	    $.errors('Method ' + method +
		     ' does not exist on jQuery.jqiaContextMenu');
	}
    };
}) (jQuery);
