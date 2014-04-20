/*
 * Beispiel Javascript zur demonstration von asynchronen Unit Tests mit QUnit.
 */
var persistence = new Persistence();

//stoppt den Testrunner von QUnit
asyncTest("Laden von JSON Objekten", 2, function() {

    //starte die asynchrone Funktion und und gibt die Tests in einer
    //Callback-Funktion mit.
    persistence.load("objects.json", function() {
        var expectedListNames = ["Humbug", "Einkaufsliste", "Test", "Cool"];
        var listNames = persistence.getTodoListNames();

        equal(listNames.length, expectedListNames.length,
                "Es müssen genau so viele Listen sein, wie erwartet");

        deepEqual(listNames, expectedListNames,
                "Die ListNames müssen denen der Datei entsprechen.");

        // Startet den QUnit-internen Testrunner
        start();
    });
});
