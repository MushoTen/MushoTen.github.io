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

    $.getJSON("./dist/data/settings.json", function (data) {
        let title = $(document).prop("title");

        $.each(data, function (_, value) {
            if (title === `Units` || title === `Equipments`) {
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

    $.getJSON("./dist/data/elements.json", function (data) {
        $.each(data, function (_, value) {
            $("#sort-elements").append(
                `<a href="?element=${value}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="sortitem">${value}</a>`
            );
        });
    });
});
