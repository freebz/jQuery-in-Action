// Listing 9.3  Testing utility functions

function multipier(collection, factor, customFunction) {
    function calc(value) {
	return $.isFunction(factor) ?
	    factor(value) :
	    $.isFunction(customFunction) ?
	    customFunction(value * factor) :
	    value * factor;
    }

    var result = null;

    if (factor === undefined && customFunction === undefined) {
	factor = 1;
    }

    if ($.isArray(collection)) {
	result = $.map(collection, function(value) {
	    if ($.isNumeric(value)) {
		return calc(value);
	    }
	});

    } else if ($.isPlainObject(collection)) {
	result = {};
	for(var prop in collection) {
	    if ($.isNumeric(collection[prop])) {
		result[prop] = calc(collection[prop]);
	    }
	}
    }

    return result;
}
