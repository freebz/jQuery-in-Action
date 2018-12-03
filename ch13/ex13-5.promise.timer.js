// Listing 13.5 A promise-based timer

function timeout(milliseconds) {
    var deferred = $.Deferred();
    setTimeout(deferred.resolve, milliseconds);

    return deferred.promise();
}

timeout(1000).done(function() {
    alert('I waited for 1 second!');
});
