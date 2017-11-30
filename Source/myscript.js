(function () {
    $modal = '<div id="appModal" style="display: none;">' +
            '</div>';
    
    $("body").prepend($modal);

    $(document).on("click", "a", function (e) {
        var googleReg = /\S*play(?:.|%2E)google(?:.|%2E)com\S*id(?:=|%3D)([\w.]*)\S*/i;
        var appleReg = /\S*itunes(?:\.|%2E)apple(?:\.|%2E)com\S*id(\w+)\S*/i;
        var href = $(this).attr('href');
        if (googleReg.test(href) || appleReg.test(href)) {
            e.preventDefault();
            $("#appModal").dialog({
                title: "App ID:"+href,
                resizable: false,
                modal: true,
                open: function(){$("body").css("overflow", "hidden");},
                close: function(){$("body").css("overflow", "auto");}
            });
            $("#appModal").text(href);
        }
    });

})();