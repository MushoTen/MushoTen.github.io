const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const search = [urlParams.get("r"), urlParams.get("t"), urlParams.get("e"), urlParams.get("u")];

$(document).ready(function () {
    $.getJSON("./dist/data/units.json", function (data) {
        let units = [];
        if (search[1] === `AA`) search[1] = `A+`;

        $(data).filter(function (_, items) {
            $.each(items, function (_, value) {
                units.push(value);
            });
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
                return item.tier.rank === search[1];
            });
        }

        if (typeof search[2] === `string`) {
            units = units.filter(function (item) {
                return item.element === search[2];
            });
        }

        if (typeof search[3] === `string`) {
            units = units.filter(function (item) {
                return item.name === search[3];
            });
        }

        if (
            typeof search[0] !== `string` &&
            typeof search[1] !== `string` &&
            typeof search[2] !== `string` &&
            typeof search[3] !== `string`
        ) {
            units = units.filter(function (item) {
                return item.rarity === `5`;
            });
        }

        $.each(units, function (_, unit) {
            let id = ``;
            $.each(data, function (key, item) {
                if (item.thumb === unit.thumb) id = key;
            });

            unitsTemplateList(id, unit);
        });
    });

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
                        <a href="./character.html?id=${id}" class="text-xl text-amber-900 hover:underline">${units.name}</a>
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
