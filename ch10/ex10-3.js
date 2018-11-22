// Listing 10.3  Using native XHR to fetch and include an HTML fragment

var xhr;
if (window.ActiveXObject) {
    xhr = new ActiveXObject('Microsift.XMLHTTP');
} else if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    htrow new Error('Ajax is not supported by this browser');
}
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
	if (this.status >= 200 && this.status < 300) {
	    document.getElementById('elem').innerHTML = this.responseText;
	}
    }
}
xhr.open('GET', 'some-resource');
xhr.send();
