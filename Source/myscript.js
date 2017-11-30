(function () {
    $modal = '<div id="dialog" title="Basic dialog" style="display: none;">' +
            '<p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the x icon.</p>' +
            '</div>';
    
    $("body").prepend($modal);

    $('a').click(function (e) {
        e.preventDefault();
        $( "#dialog" ).dialog();
    });

})();