$(document).ready(function () {
    $("#include-nav").load("./dist/includes/navigation.html");
    $("#include-footer").load("./dist/includes/footer.html");

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
        $("#filter-element-links").append(searchFilterLink("e", "Any"));
        $.each(data, function (_, value) {
            $("#filter-element-links").append(searchFilterLink("e", value));
        });
    });

    $.getJSON("./dist/data/units-info.json", function (data) {
        $("#filter-unit-links").append(searchFilterLink("u", "Any"));
        $.each(data, function (_, value) {
            $("#filter-unit-links").append(searchFilterLink("u", value.name));
        });
    });

    $.getJSON("./dist/data/tiers.json", function (data) {
        $("#filter-tier-links").append(searchFilterLink("t", "Any"));
        $.each(data, function (_, value) {
            $("#filter-tier-links").append(searchFilterLink("t", value));
        });
    });

    $.getJSON("./dist/data/units-rarity.json", function (data) {
        $("#filter-rarity-links").append(searchFilterLink("r", "Any"));
        $.each(data, function (_, value) {
            $("#filter-rarity-links").append(searchFilterLink("r", value));
        });
    });

    $("#filter-gender-links").append(searchFilterLink("g", "Any"));
    $.each(["Male", "Female"], function (_, value) {
        $("#filter-gender-links").append(searchFilterLink("g", value));
    });

    function searchFilterLink(type, value) {
        const urlParams = new URLSearchParams(queryString);
        const search = {
            r: urlParams.get("r"),
            t: urlParams.get("t"),
            e: urlParams.get("e"),
            u: urlParams.get("u"),
            g: urlParams.get("g"),
        };

        let searchString = value;
        if (value > 0) value += `-star`;
        if (value === `AA`) value = `A+`;

        let href = ``;
        let count = 0;

        $.each(search, function (key, item) {
            if (count === 0) {
                href += `?`;
                count++;
            }

            if (type === key) {
                href += `${key}=${searchString}`;
                count++;
                if (count !== 0) href += `&`;
            } else {
                if (typeof item === `string`) {
                    href += `${key}=${item}`;
                    count++;
                    if (count !== 0) href += `&`;
                }
            }
        });

        href = href.substring(0, href.length - 1);
        return `<a href="${href}" class="inline-block pr-2 text-amber-900 hover:underline hover:text-amber-700">${value}</a>`;
    }
});
