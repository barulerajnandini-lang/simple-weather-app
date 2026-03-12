const apiKey = "781d7b3601614c0ea84161045261401";

function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (location === "") {
        alert("Please enter a location");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherCard").style.display = "block";

            document.getElementById("location").innerText =
                `${data.location.name}, ${data.location.country}`;

            document.getElementById("datetime").innerText =
                data.location.localtime;

            document.getElementById("temperature").innerText =
                `${data.current.temp_c} °C`;

            document.getElementById("condition").innerText =
                data.current.condition.text;

            document.getElementById("weatherIcon").src =
                "https:" + data.current.condition.icon;
        })
        .catch(error => {
            alert("Location not found!");
            console.error(error);
        });
}
