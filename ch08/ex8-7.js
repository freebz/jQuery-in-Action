// Listing 8.7  Instrumentation for multiple simultaneous animations

function formatDate(date) {
    return (date.getHours() < 10 ? '0' : '') + date.getHours() +
	':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() +
	':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() +
	'.' + (date.getMilliseconds() < 10 ?
	       '00' : (date.getMilliseconds() < 100 ? '0' : '')) +
	date.getMilliseconds();
}

$('#button-animate').click(function() {
    var $moonImage = $('img[alt="moon"]');
    console.log('At ' + formatDate(new Date()) + ' 1');

    $moonImage.animate({left: '+=256'}, 2500);
    console.log('At ' + formatDate(new Date()) + ' 2');

    $moonImage.animate({top: '+=256'), 2500);
    console.log('At ' + formatDate(new Date()) + ' 3');

    $moonImage.animate({left: '-=256'), 2500);
    console.log('At ' + formatDate(new Date()) + ' 4');

    $moonImage.animate({top: '-=256'), 2500);
    console.log('At ' + formatDate(new Date()) + ' 5');
});
