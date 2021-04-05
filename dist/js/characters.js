const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const raritySearch = urlParams.get("rarity");
const elementSearch = urlParams.get("element");

if (typeof raritySearch === `string`) {
    console.log(`Search rarity: ${raritySearch}`);
    $("#searchResult").text(`Showing all ${raritySearch}-star characters`);
} else if (typeof elementSearch === `string`) {
    console.log(`Search element: ${elementSearch}`);
    $("#searchResult").text(`Showing all ${elementSearch} type characters`);
} else {
    $("#searchResult").text("Showing all 3-star characters");
}

jQuery.each(characters, function () {
    if (typeof raritySearch === `string`) {
        if (raritySearch === this.rarity) {
            charactersAppend(this);
        }
    } else if (typeof elementSearch === `string`) {
        if (elementSearch === this.element) {
            charactersAppend(this);
        }
    } else {
        if (this.rarity === `3`) {
            charactersAppend(this);
        }
    }
});

function charactersAppend(character) {
    let rarity = ``;
    for (var i = 1; i <= character.rarity; i++) {
        rarity += `<img class="inline-block w-4" src="./dist/img/stars/1.png" alt="Star">`;
    }

    $("#characters").append(`
        <div class="bg-white shadow-sm rounded-xl">
            <div class="pt-2 px-2 flex items-center">
                <div class="flex-shrink-0">
                    <img class="mx-auto h-36 rounded-2xl md:mx-0 sm:flex-shrink-0"
                        src="./dist/img/characters/${character.thumb}" alt="${character.name}">
                </div>
                <div class="pl-2">
                    <div class="uppercase tracking-wide text-sm text-amber-500 font-semibold">${character.title}</div>
                    <a class="text-2xl text-amber-900">${character.name}</a>
                    <p class="relative mt-1 text-sm text-gray-500">
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${character.tier.rank}</div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">
                            <img class="inline-block w-4" src="./dist/img/elements/${character.element}.png" alt="${character.element}">
                            ${character.element}
                        </div>
                        <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${rarity}</div>
                    </p>
                </div>
            </div>

            <div class="px-2 py-2">
                <p class="text-sm text-gray-500">
                    Base Stats
                    <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${character.base.hp} HP</div>
                    <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${character.base.atk} ATK</div>
                    <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${character.base.def} DEF</div>
                    <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${character.base.spd} SPD</div>
                </p>
                <p class="mt-2 text-sm text-gray-500">
                    Max Limit Break Stats
                    <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${character.mlb.hp} HP</div>
                    <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${character.mlb.atk} ATK</div>
                    <div class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-lg">${character.mlb.def} DEF</div>
                </p>
            </div>
        </div>
    `);
}
