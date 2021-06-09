let weatherBase = [
    { date: "2021-06-01", temperature: 15, weather: "rain" },
    { date: "2021-06-02", temperature: 16, weather: "normal" },
    { date: "2021-06-03", temperature: 15, weather: "normal" },
    { date: "2021-06-04", temperature: 16, weather: "normal" },
    { date: "2021-06-05", temperature: 20, weather: "normal" },
    { date: "2021-06-06", temperature: 24, weather: "normal" },
    { date: "2021-06-07", temperature: 26, weather: "normal" },
    { date: "2021-06-08", temperature: 15, weather: "rain" },
    { date: "2021-06-09", temperature: 14, weather: "normal" }
]

function filterDate() {

    let date = [];

    for (let i = 1; i < objects.length; ++i) {
        if (objects[i].temperature > objects[i-1].temperature && objects[i-1].weather == "rain" && objects[i].weather == "normal") {
            date.push(objects[i].date)
        } else {
            continue;
        }
    }

    return date;

}

filterDate();