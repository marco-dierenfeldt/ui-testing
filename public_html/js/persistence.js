var slPersistance = {};

slPersistance.list_keys = ['Wocheneinkauf', 'Filme', 'Grillen', 'Kindergeburtstag'];
slPersistance.lists = [];
slPersistance.lists['Wocheneinkauf'] = ['Brot', 'Käse', 'Butter', 'Basilikum', 'Tomaten'];
slPersistance.lists['Filme'] = ['Thor', 'Transformers', 'Sherlock Holmes', 'Pulp Fiction', 'Matrix'];
slPersistance.lists['Grillen'] = ['Kohlebriketts', 'Kohleanzünder', 'Steaks', 'Hähnchen', 'Zucchini'];
slPersistance.lists['Kindergeburtstag'] = ['Geschenk', 'Luftballons', 'Muffinformen', 'Goodybags', 'Wasserbomben'];
slPersistance.lastChoice = undefined;


slPersistance.getShoppingLists = function() {
    return this.list_keys;
};

slPersistance.getShoppingList = function(key) {
    return this.lists[key];
};

slPersistance.setLastChoice = function(value) {
    this.lastChoice = value;
};

slPersistance.getLastChoice = function() {
    return this.lastChoice;
};

slPersistance.removeItem = function(list, item) {
    var oldList = this.lists[list];
    var newList = [];

    for(var idx in oldList){
        if(oldList[idx] !== item){
            newList[newList.length] = oldList[idx];
        }
    }
    this.lists[list] = newList;
    return newList;
};

slPersistance.addList = function(listname, newlist) {
    this.lists[listname] = newlist;
    var list_exists = $.inArray(listname, this.list_keys) > -1;
    if (!list_exists) {
        this.list_keys[this.list_keys.length] = listname;
    }
};