const submitButton = document.getElementById('submit');
const cityvalue = document.getElementById('cityname');
const cityName = document.getElementById('city');
const card = document.querySelector('.result');
let SKY = document.getElementById('sky');
let TEMP = document.getElementById('temp');
let WIND = document.getElementById('wind');
let HUMIDITY = document.getElementById('humidity');
let background = document.querySelector("#background");
var gif = document.getElementById("gif");
let date = document.querySelector("#date");

function getWeatherByLocation() {
    API = 'edb9d09bc911e77d9b0916f3ae422c2a';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue.value}&appid=${API}`)

        .then(
            res => res.json()
        )
        .then(data => {
            console.log(data);
            if (cityvalue.value === "") {
                alert("Please enter a city name");
                return
            }
            else {
                city.innerHTML = data.name;
                HUMIDITY.innerHTML =`Humidity: ${data.main.humidity}%`;
                TEMP.innerHTML = `Temperature: ${ Math.round(data.main.temp - 273.15  )}°C`;
                WIND.innerHTML = data.wind.deg;
                WIND.innerHTML =`Wind Speed: ${data.wind.speed}km/hr`;
                SKY.innerHTML = data.weather[0].main;
                card.classList.remove("res1")
                date.innerHTML = getDate();;

                setBackground(data.weather[0].main)
                setGif(data.weather[0].main)
            }
        })
}

submitButton.addEventListener('click', getWeatherByLocation);
cityvalue.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeatherByLocation();
    }
    });


function setBackground(weather) {
    if (weather == "Rain") {
        background.src = "./resources/rainy-weather.jpg";
    } else if (weather == "Snow") {
        background.src = "./resources/snowy-weather.jpg";
    } else if (weather == "Clear") {
        background.src = "./resources/sunny-weather.jpg";
    } else if (weather == "Clouds") {
        background.src = "./resources/cloudy-weather.jpg";
    } else if (weather == "Haze") {
        background.src = "./resources/pexels-lukas-rychvalsky-1597347.jpg";
    } else if (weather == "Smoke") {
        background.src = "./resources/WallpaperDog-10994118.jpg";
    } else if (weather == "Drizzle") {
        background.src = "./resources/wp7318183-drizzle-wallpapers.jpg";
    } else if (weather == "Mist") {
        background.src = "./resources/misty.jpg";
    }
}

function setGif(weather) {
    if (weather == "Rain") {
        gif.src = "resources/icons/rain.gif";
    } else if (weather == "Snow") {
        gif.src = "resources/icons/snowflake.gif";
    } else if (weather == "Clear") {
        gif.src = "resources/icons/sun.gif";
    } else if (weather == "Clouds") {
        gif.src = "resources/icons/cloudy.gif";
    } else if (weather == "Haze") {
        gif.src = "resources/icons/icons8-haze.gif";
    } else if (weather == "Smoke") {
        gif.src = "resources/icons/whirlwind.gif";
    } else if (weather == "Mist") {
        gif.src = "resources/icons/foggy.gif";
    }
}


function getDate() {
    let d = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tueday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  