jQuery.each(characters, function () {
    let rarity = ``;
    for (var i = 1; i <= this.rarity; i++) {
        rarity += `<img class="inline-block w-4" src="./dist/img/stars/1.png" alt="Star">`;
    }

    $("#characters").append(`
        <div class="mb-2 lg:mb-4 bg-white shadow-md rounded-xl">
            <div class="pt-2 pl-4 flex items-center">
                <div class="flex-shrink-0">
                    <img class="mx-auto h-36 rounded-2xl md:mx-0 sm:flex-shrink-0"
                        src="./dist/img/characters/${this.thumb}" alt="${this.name}">
                </div>
                <div class="pl-2">
                    <div class="uppercase tracking-wide text-sm text-amber-500 font-semibold">${this.title}</div>
                    <a href="./characters/${this.title}-${this.name}.html" class="text-2xl text-amber-900 hover:underline">${this.name}</a>
                    <p class="relative mt-1 text-sm text-gray-500">
                        <span class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-md">${this.tier.rank}</span>
                        <span class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-md">
                            <img class="inline-block w-4" src="./dist/img/elements/${this.element}.png" alt="${this.element}">
                            ${this.element}
                        </span>
                        <span class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-md">${rarity}</span>
                    </p>
                </div>
            </div>

            <div class="py-2 pl-4">
                <p class="text-sm text-gray-500">
                    Base
                    <span class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-md">${this.base.hp} HP</span>
                    <span class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-md">${this.base.atk} ATK</span>
                    <span class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-md">${this.base.def} DEF</span>
                    <span class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-md">${this.base.spd} SPD</span>
                </p>
                <p class="mt-1 text-sm text-gray-500">
                    Max Limit Break
                    <span class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-md">${this.mlb.hp} HP</span>
                    <span class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-md">${this.mlb.atk} ATK</span>
                    <span class="inline-block text-sm bg-gray-700 text-white py-0.5 px-2.5 rounded-md">${this.mlb.def} DEF</span>
                </p>
            </div>
        </div>
    `);
});
