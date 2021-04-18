$(document).ready(function () {
    $("#include-nav").load("./dist/includes/navigation.html");
    $("#include-footer").load("./dist/includes/footer.html");

    $.getJSON("./dist/data/settings.json", function (data) {
        let title = $(document).prop("title");

        $.each(data, function (_, value) {
            if (title === `Home` || title === `Units` || title === `Equipments`) {
                $(document).prop("title", `${title} | ${value}`);
            }
        });
    });

    $.getJSON("./dist/data/alerts.json", function (data) {
        const converter = new showdown.Converter();
        $.each(data, function (_, value) {
            if (value.listed === true) {
                const message = converter.makeHtml(value.message);
                $("#alerts").append(`<li>${message}</li>`);
            }
        });
    });
});
