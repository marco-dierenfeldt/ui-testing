
$(document).on("pagebeforecreate", "#sl-lists-overview", function() {
    slUiGenerator.generateListElementGroup("#sl-lists-overview-list", slPersistance.getShoppingLists());
    $('#sl-lists-overview-list li a').on("click", function(event) {
        event.preventDefault();
        var content = this.text;
        console.log(content+" klicked");
        slBusiness.showDetailPage(content);
    });
});

$(document).on("pagebeforecreate", "#sl-view", function() {
    var choice = slPersistance.getLastChoice().trim();
    var list = slPersistance.getShoppingList(choice);

    $("#sl-view-header h3").html(choice);
    slUiGenerator.generateListElementGroup("#sl-view-list", list);
    slBusiness.initListItems();

    slBusiness.initEditToolbar("#append-element-button", "#save-current-button", "#new-list-element", "#sl-view-header h3", "#sl-view-list");
});

$(document).on("pagebeforecreate", "#sl-new", function() {
    slBusiness.initEditToolbar("#add-element-button", "#save-list-button", "#new-element", "#list-title", "#sl-new-list");

});
