const colors = require("tailwindcss/colors");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            white: colors.white,
            gray: colors.blueGray,
            amber: colors.amber,
        },
        fontFamily: {
            sans: ['"Exo 2"', "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
