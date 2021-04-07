let now = new Date();
      let dateElement = document.querySelector("#date");

      let date = now.getDate();
      let hours = now.getHours();
      if (hours<10) {
        hours =`0${hours}`;
      }
      let minutes = now.getMinutes();
      if (minutes<10) {
        minutes=`0${minutes}`;
      }
      let year = now.getFullYear();
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[now.getDay()];
      let months = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      let month = months[now.getMonth()];

      dateElement.innerHTML = `${day} ${month} ${date} ${year}, ${hours}:${minutes}`;

function showWeatherCondition (response) {
     document.querySelector("#city-element").innerHTML = response.data.name;
     document.querySelector("#temperature").innerHTML =Math.round(response.data.main.temp);
     document.querySelector ("#description").innerHTML = response.data.weather[0].main;
     document.querySelector ("#humidity").innerHTML =response.data.main.humidity;
     document.querySelector("#wind-speed").innerHTML = response.data.wind.speed;
      }

function searchCity (city) {
  let apiKey = "2aab278b1613f8cd861593e4ae3bb315";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeatherCondition);
}
      function handleSubmit (event) {
        event.preventDefault();
        let cityInput = document.querySelector("#city-input");
        let city = cityInput.value;
        searchCity(city);
      }
     
      let form = document.querySelector("#city-form");
      form.addEventListener("submit", handleSubmit);

searchCity ("London");

function searchLocation (position) {
  let apiKey = "2aab278b1613f8cd861593e4ae3bb315";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeatherCondition);
}

function currentLocation (event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", currentLocation);

function showCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature =temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature -32) *5/9);
}
let tempCelcius=document.querySelector("#celcius");
tempCelcius.addEventListener("click", showCelcius);

function showFahrenheit(event) {
  event.preventDefault();
let temperatureElement = document.querySelector("#temperature");
let temperature =temperatureElement.innerHTML;
temperatureElement.innerHTML = Math.round((temperature * 9)/5 +32);
}
let temperatureElement = document.querySelector("#temperature");
      let temperature =temperatureElement.innerHTML;
      
      let tempFahrenheit = document.querySelector("#fahrenheit");
      tempFahrenheit.addEventListener("click", showFahrenheit);

