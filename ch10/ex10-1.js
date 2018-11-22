// Listing 10.1  Capability detection resulting in code that can use Ajax in many browsers

var xhr;
if (window.ActiveXObject) {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
    
} else if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();

} else {
    throw new Error('Ajax is not supported by this browser');
}
