/*
 * Hier wird eine Generator-Klasse erzeugt, die für die Erzeugung der
 * UI-Elemente zuständig ist.
 */

var slUiGenerator = {};

slUiGenerator.generateListElement = function(destinationSelector, itemContent, doRefresh) {
    var item = '<li><a>' + itemContent + '</a></li>';
    $(destinationSelector).append(item);
    if (doRefresh) {
        $(destinationSelector).listview('refresh');
    };
};

slUiGenerator.generateListElementGroup = function(destinationSelector, elementArray){
  for( var index in elementArray){
      this.generateListElement(destinationSelector, elementArray[index]);
  };
};