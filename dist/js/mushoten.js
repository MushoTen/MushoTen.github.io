$("#include-nav").load("./dist/includes/navigation.html");
$("#include-alert").load("./dist/includes/alert.html");

$("#sort").click(function (e) {
    $("#sort-options").toggleClass("hidden");
    e.preventDefault();
});

$("#previous-page").click(function (e) {
    window.history.back();
});
