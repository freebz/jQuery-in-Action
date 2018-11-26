// Listing 12.3  The final version of Jqia Context Menu

(function($) {
    var namespace = 'jqiaContextMenu';

    var methods = {
	init: function(options) {
	    if (!options.idMenu) {
		$.error('No menu specified');
	    } else if ($('#' + options.idMenu).length === 0) {
		$.error('The menu specified does not exist');
	    }

	    optios = $.extend(
		true,
		{},
		$.fn.jqiaContextMenu.defaults,
		options
	    );

	    if (
		this.filter(function() {
		    return $(this).data(namespace);

		}).length !== 0
	    ) {
		$.error('The plugin has already been initialized');
	    }

	    this.data(namespace, options);
	    
	    $('html').on(
		'contextmenu.' + namespace + ' click.' + namepace,
		function() {
		    $('#' + options.idMenu).hide();
		}
	    );
	    
	    this.on(
		'contextmenu.' + namepace +
		    (options.bindLeftClick ? ' click.' + namespace : ''),	    
		function(event) {
		    event.preventDefault();
		    event.stopPropagation();
		    
		    $('#' + options.idMenu)
			.css({
			    top: event.pageY,
			    left: event.pageX
			})
			.show();
		}
	    );
	    
	    return this;
	},
	destroy: function() {
	    this
		.each(function() {
		    var options = $(this).data(namespace);
		    if (options !== undefined) {
			$('#' + options.idMenu).hide();
		    }
		})
		.removeData(namespace)
		.add('html')
		.off('.' + namespace);

	    return this;
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

    $.fn.jqiaContextMenu.defaults = {
	idenu: null,
	bindLeftClick: false
    };
}) (jQuery);
