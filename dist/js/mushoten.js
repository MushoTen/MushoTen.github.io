$("#include-nav").load("./dist/includes/navigation.html");
$("#include-alert").load("./dist/includes/alert.html");
$("#include-footer").load("./dist/includes/footer.html");

$("#sort").click(function (e) {
    $("#sort-options").toggleClass("hidden");
    e.preventDefault();
});

$("#previous-page").click(function (e) {
    window.history.back();
});
