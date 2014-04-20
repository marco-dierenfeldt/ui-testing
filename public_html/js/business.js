var slBusiness = {};

slBusiness.showDetailPage = function(listname) {
    slPersistance.setLastChoice(listname);
    $.mobile.changePage("viewShoppinglist.html", {transition: "slideup"});
};

slBusiness.initListItems = function(){
    $("#sl-view-list li").attr("data-icon", "check");
    $("#sl-view-list li a").on("click", function(event) {
        event.preventDefault();
        var itemName = this.text.trim();
        var listName = slPersistance.getLastChoice();
        var newList = slPersistance.removeItem(listName, itemName);
        $("#sl-view-list").html("");
        slUiGenerator.generateListElementGroup("#sl-view-list", newList);
        slBusiness.initListItems();
        $("#sl-view-list").listview('refresh');
    });
};

slBusiness.initEditToolbar = function(
        addBtnSelector,
        saveBtnSelector,
        inputSelector,
        listnameSelector,
        listSelector){

    $(addBtnSelector).on("click", function() {
        var new_element = $(inputSelector).val();
        slUiGenerator.generateListElement(listSelector, new_element);
        slBusiness.initListItems();
        $(listSelector).listview('refresh');
    });

    $(saveBtnSelector).on("click", function() {
        var listitems = $(listSelector+" li a");
        var listname = $(listnameSelector).val().trim();
        if(listname === ""){
            listname = $(listnameSelector).html().trim();
        }
        var list = [];

        for (var idx = 0; idx < listitems.length; idx++) {
            list[idx] = listitems[idx].text;
        }
        slPersistance.addList(listname, list);
        $.mobile.changePage("index.html");
    });
};