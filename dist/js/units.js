const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const search = [urlParams.get("r"), urlParams.get("t"), urlParams.get("e"), urlParams.get("u"), urlParams.get("g")];

$(document).ready(function () {
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

    let infos = [];
    $.getJSON("./dist/data/units-info.json", function (data) {
        $.each(data, function (key, value) {
            infos.push(value);
        });
    });

    $.getJSON("./dist/data/units.json", function (data) {
        let units = [];
        if (search[1] === `AA`) search[1] = `A+`;

        $.each(data, function (_, value) {
            $.each(infos, function (_, info) {
                if (info.name === value.name) {
                    value["gender"] = info.gender;
                }
            });

            units.push(value);
        });

        $.each(search, function (key, value) {
            if (typeof search[key] === `string`) {
                if (search[key].toLowerCase() === `any`) {
                    search[key] = null;
                }
            }
        });

        if (typeof search[0] === `string`) {
            units = units.filter(function (item) {
                return item.rarity === search[0];
            });
        }

        if (typeof search[1] === `string`) {
            units = units.filter(function (item) {
                return item.tier.rank.toLowerCase() === search[1].toLowerCase();
            });
        }

        if (typeof search[2] === `string`) {
            units = units.filter(function (item) {
                return item.element.toLowerCase() === search[2].toLowerCase();
            });
        }

        if (typeof search[3] === `string`) {
            units = units.filter(function (item) {
                return item.name.toLowerCase() === search[3].toLowerCase();
            });
        }

        if (typeof search[4] === `string`) {
            units = units.filter(function (item) {
                return item.gender.toLowerCase() === search[4].toLowerCase();
            });
        }

        $.each(units, function (_, unit) {
            let id = unit.thumb.split("_")[1];
            unitsTemplateList(id, unit);
        });
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

    function unitsTemplateList(id, units) {
        let rarity = ``;
        for (var i = 1; i <= units.rarity; i++) rarity += `⭐`;

        $("#units").append(`
            <div class="bg-white shadow-sm rounded-xl">
                <div class="p-2 md:p-4 flex items-center">
                    <div class="flex-shrink-0">
                        <img class="mx-auto h-24 rounded-2xl md:mx-0 sm:flex-shrink-0"
                            src="./dist/img/units/${units.thumb}" alt="${units.name}">
                    </div>

                    <div class="pl-2">
                        <div class="uppercase tracking-wider text-xs text-amber-500 font-semibold">${units.title}</div>
                        <a href="./unit.html?id=${id}" class="text-xl text-amber-900 hover:underline">${units.name}</a>
                        <p class="relative mt-1 text-sm text-gray-500">
                            <div class="inline-block items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-700 rounded">
                                ${rarity}
                            </div>

                            <div class="inline-block items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-700 rounded">
                                <!-- <img class="inline-block w-4" src="./dist/img/elements/${units.element}.png" alt="${units.element}"> -->
                                ${units.element}
                            </div>
                            
                            <div class="inline-block items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-700 rounded">
                                ${units.tier.rank} Tier
                            </div>
                        </p>
                    </div>
                </div>
    
                <!-- <div class="px-2 py-2">
                    <p class="text-sm text-gray-500">
                        Base Stats
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${units.base.hp} HP</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${units.base.atk} ATK</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${units.base.def} DEF</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${units.base.spd} SPD</div>
                    </p>
                    <p class="mt-2 text-sm text-gray-500">
                        Max Limit Break Stats
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${units.mlb.hp} HP</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${units.mlb.atk} ATK</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${units.mlb.def} DEF</div>
                    </p>
                </div> -->
            </div>
        `);
    }
});
