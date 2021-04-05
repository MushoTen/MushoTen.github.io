const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nameSearch = urlParams.get("name");
const raritySearch = urlParams.get("rarity");
const elementSearch = urlParams.get("element");
const titleSearch = urlParams.get("title");

let units = [];
units.push(...threeStarUnits);

jQuery.each(units, function () {
    if (
        typeof nameSearch === `string` &&
        typeof raritySearch === `string` &&
        typeof elementSearch === `string` &&
        typeof titleSearch === `string`
    ) {
        if (
            raritySearch === this.rarity &&
            nameSearch.toLowerCase() === this.name.toLowerCase() &&
            elementSearch.toLowerCase() === this.element.toLowerCase() &&
            titleSearch.toLowerCase() === this.title.toLowerCase()
        ) {
            unitsAppend(this);
        }
    } else {
        console.log("not found");
    }
});

function unitsAppend(units) {
    let rarity = ``;
    for (var i = 1; i <= units.rarity; i++) {
        rarity += `<img class="inline-block w-4" src="./dist/img/stars/1.png" alt="Star">`;
    }

    $("#units-info").append(`
        <img class="mb-2 md:col-start-2 md:col-span-3 bg-white shadow-sm rounded-xl" src="./dist/img/units-cover/${units.thumb}" alt="${units.name}">
        <div class="p-2 md:col-start-2 md:col-span-3 bg-white shadow-sm rounded-xl">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <img class="mx-auto h-36 rounded-2xl md:mx-0 sm:flex-shrink-0" src="./dist/img/units/${units.thumb}" alt="${units.name}">
                </div>
                <div class="pl-2">
                    <div class="uppercase tracking-wide text-sm text-amber-500 font-semibold">${units.title}</div>
                    <a class="text-2xl text-amber-900">${units.name}</a>
                    <p class="relative mt-1 text-sm text-gray-500">
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            ${units.tier.rank}</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            <img class="inline-block w-4" src="./dist/img/elements/${units.element}.png"
                                alt="${units.element}">
                            ${units.element}
                        </div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${rarity}
                        </div>
                    </p>
                </div>
            </div>

            <div>
                <div class="mt-4">
                    <p class="text-sm text-gray-500">
                        Base Stats
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            ${units.base.hp} HP</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            ${units.base.atk} ATK</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            ${units.base.def} DEF</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            ${units.base.spd} SPD</div>
                    </p>
                </div>
                <div class="mt-4">
                    <p class="text-sm text-gray-500">
                        Max Limit Break Stats
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            ${units.mlb.hp} HP</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            ${units.mlb.atk} ATK</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            ${units.mlb.def} DEF</div>
                    </p>
                </div>
                <div class="mt-4">
                    <p class="text-sm text-gray-500">
                        Leader Skill - ${units.leaderSkill.title}
                        <p class="text-md">
                            <div
                                class="inline-block w-12 text-center text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                Lv.1</div> ${units.leaderSkill.lv1}
                        </p>
                        <p class="mt-1 text-md">
                            <div
                                class="inline-block w-12 text-center text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                Lv.6</div> ${units.leaderSkill.lv6}
                        </p>
                    </p>
                </div>
                <div class="mt-4">
                    <p class="mt-2 text-sm text-gray-500">
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
                    <p class="text-sm text-gray-500">
                        Active Skill
                        <p class="text-md">
                            <div class="inline-block text-center text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                ${units.activeSkill.one.title}
                            </div> 
                            ${units.activeSkill.one.description}
                        </p>
                        <p class="mt-1 text-md">
                            <div class="inline-block text-center text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                                ${units.activeSkill.one.title}
                            </div> 
                            ${units.activeSkill.one.description}
                        </p>
                    </p>
                </div>
            </div>
        </div>
    `);
}
