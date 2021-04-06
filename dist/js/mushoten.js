$(document).ready(function () {
    $("#include-nav").load("./dist/includes/navigation.html");
    $("#include-footer").load("./dist/includes/footer.html");

    $("#sort").click(function (e) {
        $("#sort-options").toggleClass("hidden");
        e.preventDefault();
    });

    $("#previous-page").click(function (e) {
        window.history.back();
    });

    $.getJSON("./dist/data/alerts.json", function (data) {
        const converter = new showdown.Converter();
        let alerts = ``;

        $.each(data, function (_, value) {
            if (value.listed === true) {
                const message = converter.makeHtml(value.message);
                $("#alerts").append(`<li>${message}</li>`);
            }
        });
    });
});
