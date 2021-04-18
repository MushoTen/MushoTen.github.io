$(document).ready(function () {
    moment.tz.add("Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rc0 1lc0 14o0 1zc0 Oo0 1zc0 Oo0|38e6");
    moment.relativeTimeThreshold("m", 60);
    moment.relativeTimeThreshold("h", 24 * 2);
    refreshDate();
});

function refreshDate() {
    let currentDateTime = moment().tz("Asia/Tokyo");
    let currentDate = currentDateTime.format("dddd, MMMM Do YYYY");
    let currentTime = currentDateTime.format("hh:mm:ss A");

    let labyrinth = moment().tz("Asia/Tokyo").startOf("days").add(12, "hours");
    let daily = moment().tz("Asia/Tokyo").startOf("days").add(1, "days");

    $("#current-date").text(currentDate);
    $("#current-time").text(currentTime);

    $("#reset-reminder-labyrinth").text(getReset(labyrinth, currentDateTime, "Labyrinth opens", true));
    $("#reset-reminder-daily").text(getReset(daily, currentDateTime, "Daily reset"));

    setTimeout(() => refreshDate(), 1000);
}

function getReset(timer, currentDateTime, text = "", isLabyrinth = false) {
    let reset = ``;

    let hrsDiffDuration = moment.duration(timer.diff(currentDateTime));
    let hrsDiff = parseInt("" + hrsDiffDuration.asHours() * 1) / 1;
    let minsDiffDuration = moment.duration(timer.subtract(hrsDiff, "hours").diff(currentDateTime));
    let minsDiff = parseInt("" + minsDiffDuration.asMinutes() * 1) / 1;

    if (hrsDiff > 0 || minsDiff > 0) {
        minsDiff = Math.round(minsDiffDuration.asMinutes() * 1) / 1;
        reset = `${text} in ${hrsDiff} hours and ${minsDiff} minutes`;
    } else {
        let secsDiffDuration = moment.duration(
            timer.subtract(hrsDiff, "hours").subtract(minsDiff, "minutes").diff(currentDateTime)
        );

        secsDiff = Math.round(secsDiffDuration.asSeconds() * 1) / 1;

        if (isLabyrinth && secsDiff >= 0) {
            reset = "The Labyrinth is currently open!";
        } else {
            reset = `${text} in a few seconds`;
        }
    }

    return reset;
}
