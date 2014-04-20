test("Initial lists overview page state", function() {
    var overviewPage = $("#sl-lists-overview")[0];
    console.log("overviewPage: " + overviewPage);
    ok(overviewPage === undefined, "overviewPage existiert initial nicht");
});

asyncTest("load lists overview page", function() {
    $(document).on("pagecreate", "#sl-lists-overview", function() {
        var overviewPage = $("#sl-lists-overview")[0];
        var overviewListItems = $("#sl-lists-overview-list li");
        var insideAnchor = $("#sl-lists-overview-list li a.ui-btn");

        var expectedNumberOfEntries = 4;
        
        notEqual(overviewPage, undefined, "overviewPage existiert nach initialisierung");
        notEqual(overviewListItems, undefined, "Es existiert die sl-lists-overview-list");
        equal(overviewListItems.length,expectedNumberOfEntries, "Die Liste der Einkaufslisten hat genau 4 Einträge");
        equal(insideAnchor.length,expectedNumberOfEntries, "Die Liste der Einkaufslisten hat genau 4 Einträge");
        start();
    });
    $(":mobile-pagecontainer").pagecontainer("load", "shoppingListOverview.html");
});