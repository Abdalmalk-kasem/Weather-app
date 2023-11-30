const apiKey = "abf053e36fe5abfc30a36fe6db171495";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let selectedCity = document.querySelector(".searchCont input");
let btn = document.querySelector(".searchCont i");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  document.querySelector(".city").innerHTML = data.name
    ? data.name
    : "Please Check The Name";
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".col-two > img").src = "./images/wind.png";
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".humidity + p").innerHTML = "Humidity";
  document.querySelector(".col-one > img").src = "./images/humidity.png";
  document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
  document.querySelector(".wind + p").innerHTML = "Wind speed";
  if (data.weather[0].main === "Clouds") {
    weatherIcon.setAttribute("src", "./images/clouds.png");
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.setAttribute("src", "./images/clear.png");
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.setAttribute("src", "./images/rain.png");
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.setAttribute("src", "./images/drizzle.png");
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.setAttribute("src", "./images/mist.png");
  }

  console.log(data);
}

btn.addEventListener("click", () => {
  checkWeather(selectedCity.value);
});
