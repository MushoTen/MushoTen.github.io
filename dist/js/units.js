const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const raritySearch = urlParams.get("rarity");
const elementSearch = urlParams.get("element");

let units = [];
units.push(...threeStarUnits);
console.log(units);

if (typeof raritySearch === `string`) {
    console.log(`Search rarity: ${raritySearch}`);
    $("#searchResult").text(`Showing all ${raritySearch}-star units`);
} else if (typeof elementSearch === `string`) {
    console.log(`Search element: ${elementSearch}`);
    $("#searchResult").text(`Showing all ${elementSearch} type units`);
} else {
    $("#searchResult").text("Showing all 3-star units");
}

jQuery.each(units, function () {
    if (typeof raritySearch === `string`) {
        if (raritySearch === this.rarity) {
            unitsAppend(this);
        }
    } else if (typeof elementSearch === `string`) {
        if (elementSearch === this.element) {
            unitsAppend(this);
        }
    } else {
        if (this.rarity === `3`) {
            unitsAppend(this);
        }
    }
});

function unitsAppend(units) {
    let rarity = ``;
    for (var i = 1; i <= units.rarity; i++) {
        rarity += `<img class="inline-block w-4" src="./dist/img/stars/1.png" alt="Star">`;
    }

    $("#units").append(`
        <div class="bg-white shadow-sm rounded-xl">
            <div class="pt-2 px-2 flex items-center">
                <div class="flex-shrink-0">
                    <img class="mx-auto h-36 rounded-2xl md:mx-0 sm:flex-shrink-0"
                        src="./dist/img/units/${units.thumb}" alt="${units.name}">
                </div>
                <div class="pl-2">
                    <div class="uppercase tracking-wide text-sm text-amber-500 font-semibold">${units.title}</div>
                    <a class="text-2xl text-amber-900">${units.name}</a>
                    <p class="relative mt-1 text-sm text-gray-500">
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${units.tier.rank}</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            <img class="inline-block w-4" src="./dist/img/elements/${units.element}.png" alt="${units.element}">
                            ${units.element}
                        </div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${rarity}</div>
                    </p>
                </div>
            </div>

            <div class="px-2 py-2">
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
            </div>
        </div>
    `);
}
