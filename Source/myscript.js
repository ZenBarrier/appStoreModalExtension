(function () {
    $modal = '<div id="dialog" title="Basic dialog">' +
            '<p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the x icon.</p>' +
            '</div>"';
    
    $("body").prepend($modal);

    $('a').mousedown(function () {
        $( "#dialog" ).dialog();
    });

})();