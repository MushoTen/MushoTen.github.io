const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nameSearch = urlParams.get("name");
const raritySearch = urlParams.get("rarity");
const elementSearch = urlParams.get("element");

// const sortSearch = urlParams.get("sort");
// console.log(sortSearch.split("rarity:")[1]);

let units = [];
units.push(...threeStarUnits);

jQuery.each(units, function () {
    if (typeof nameSearch === `string`) {
        if (nameSearch.toLowerCase() === this.name.toLowerCase()) {
            $("#searchResult").text(`Showing all ${this.name} units`);
            unitsAppend(this);
        }
    } else if (typeof raritySearch === `string`) {
        if (raritySearch === this.rarity) {
            $("#searchResult").text(`Showing all ${raritySearch}-star units`);
            unitsAppend(this);
        }
    } else if (typeof elementSearch === `string`) {
        if (elementSearch.toLowerCase() === this.element.toLowerCase()) {
            $("#searchResult").text(`Showing all ${elementSearch} type units`);
            unitsAppend(this);
        }
    } else {
        if (this.rarity === `3`) {
            $("#searchResult").text("Showing all 3-star units");
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
            <div class="px-4 py-2 flex items-center">
                <div class="flex-shrink-0">
                    <img class="mx-auto h-36 rounded-2xl md:mx-0 sm:flex-shrink-0"
                        src="./dist/img/units/${units.thumb}" alt="${units.name}">
                </div>
                <div class="pl-2">
                    <div class="uppercase tracking-widest text-xs text-amber-500 font-semibold">${units.title}</div>
                    <a href="./character.html?name=${units.name}&rarity=${units.rarity}&element=${units.element}&title=${units.title}" class="text-xl text-amber-900 hover:underline">${units.name}</a>
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
