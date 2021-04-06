const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nameSearch = urlParams.get("name");
const raritySearch = urlParams.get("rarity");
const elementSearch = urlParams.get("element");
const titleSearch = urlParams.get("title");

$(document).ready(function () {
    $.getJSON("./dist/data/units.json", function (data) {
        $.each(data, function (_, value) {
            if (validateSearch(value)) {
                $.getJSON("./dist/data/settings.json", function (data) {
                    $.each(data, function (_, title) {
                        $(document).prop("title", `${value.name} | ${title}`);
                    });
                });

                unitsTemplateSingle(value);
                return false;
            }
        });
    });

    function validateSearch(value) {
        if (
            raritySearch === value.rarity &&
            nameSearch.toLowerCase() === value.name.toLowerCase() &&
            elementSearch.toLowerCase() === value.element.toLowerCase() &&
            titleSearch.toLowerCase() === value.title.toLowerCase()
        ) {
            return true;
        }

        return false;
    }

    function unitsTemplateSingle(units) {
        let rarity = ``;
        let unitsCover = typeof units.altArt === `string` ? units.altArt : units.thumb;
        for (var i = 1; i <= units.rarity; i++) rarity += `⭐`;

        $("#units-info").append(`
            <div class="md:col-start-2 md:col-span-3 bg-white shadow-sm rounded-xl">
                <img class="shadow-sm rounded-tl-xl rounded-tr-xl" src="./dist/img/units-cover/${unitsCover}" alt="${units.name}">
    
                <div class="p-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-24 rounded-2xl md:mx-0 sm:flex-shrink-0" src="./dist/img/units/${units.thumb}" alt="${units.name}">
                        </div>
    
                        <div class="pl-2">
                            <div class="uppercase tracking-wider text-xs text-amber-500 font-semibold">${units.title}</div>
                            <a class="text-xl text-amber-900">${units.name}</a>
                            <p class="relative text-sm text-gray-500">
                                <div class="inline-block items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-700 rounded">
                                    ${rarity}
                                </div>
                                <div class="inline-block items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-700 rounded">
                                    ${units.element}
                                </div>
                                <div class="inline-block items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-700 rounded">
                                    ${units.tier.rank} Tier
                                </div>
                            </p>
                        </div>
                    </div>
    
                    <div>
                        <div class="mt-4">
                            <p class="text-xs text-gray-500 font-semibold">
                                Why ${units.tier.rank} Tier?
                                <p class="text-base">
                                    ${units.tier.desc}
                                </p>
                            </p>
                        </div>  
    
                        <div class="mt-4">
                            <p class="text-xs text-gray-500 font-semibold">
                                Base Stats
                                <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                    ${units.base.hp} HP
                                </div>
                                <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                    ${units.base.atk} ATK
                                </div>
                                <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                    ${units.base.def} DEF
                                </div>
                                <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                    ${units.base.spd} SPD
                                </div>
                            </p>
                        </div>
    
                        <div class="mt-4">
                            <p class="text-xs text-gray-500 font-semibold">
                                Max Limit Break Stats
                                <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                    ${units.mlb.hp} HP
                                </div>
                                <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                    ${units.mlb.atk} ATK
                                </div>
                                <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                    ${units.mlb.def} DEF
                                </div>
                            </p>
                        </div>
    
                        <div class="mt-4">
                            <p class="text-xs text-gray-500 font-semibold">
                                Leader Skill - ${units.leaderSkill.title}
                                <p class="text-base">
                                    <div class="inline-block w-12 text-center text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                        Lv.1
                                    </div>
                                    ${units.leaderSkill.lv1}
                                </p>
                                <p class="mt-1 text-base">
                                    <div class="inline-block w-12 text-center text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                        Lv.6
                                    </div>
                                    ${units.leaderSkill.lv6}
                                </p>
                            </p>
                        </div>
    
                        <div class="mt-4">
                            <p class="mt-2 text-xs text-gray-500 font-semibold">
                                Passive Ability - ${units.passiveSkill.title}
                                <p class="text-md">
                                    <div class="inline-block w-12 text-center text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                        Lv.1
                                    </div>
                                    ${units.passiveSkill.lv1}
                                </p>
                                <p class="mt-1 text-md">
                                    <div class="inline-block w-12 text-center text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                        Lv.5
                                    </div>
                                    ${units.passiveSkill.lv5}
                                </p>
                            </p>
                        </div>
    
                        <div class="mt-4">
                            <p class="text-xs text-gray-500 font-semibold">
                                Active Skill
                                <p class="text-md">
                                    <div class="inline-block text-center text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                        ${units.activeSkill.one.title}
                                    </div> 
                                    ${units.activeSkill.one.desc}
                                </p>
                                <p class="mt-1 text-md">
                                    <div class="inline-block text-center text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                        ${units.activeSkill.two.title}
                                    </div> 
                                    ${units.activeSkill.two.desc}
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }
});
