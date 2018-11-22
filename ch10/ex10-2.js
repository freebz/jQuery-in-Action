// Listing 10.2  Ready state handlers written to ignore all but the DONE state

xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
	if (this.status >= 200 && this.status < 300) {
	    // Success
	} else {
	    // Problem
	}
    }
}
