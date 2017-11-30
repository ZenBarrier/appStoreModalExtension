(function () {
    $modal = '<div id="dialog" title="Basic dialog" style="display: none;">' +
            '<p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the x icon.</p>' +
            '</div>';
    
    $("body").prepend($modal);

    $(document).on("click", "a", function (e) {
        var googleReg = /\S*play(?:.|%2E)google(?:.|%2E)com\S*id(?:=|%3D)([\w.]*)\S*/i;
        var appleReg = /\S*itunes(?:\.|%2E)apple(?:\.|%2E)com\S*id(\w+)\S*/i;
        var href = $(this).attr('href');
        if (googleReg.test(href) || appleReg.test(href)) {
            e.preventDefault();
            $("#dialog").dialog({
                resizable: false,
                modal: true
            });
        }
    });

})();