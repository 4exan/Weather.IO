'use strict';

//Define button and inputfield
const searchBtn = document.querySelector('.btn');
const inputField = document.querySelector('.input');
const cityName = document.querySelector('.city--name');
const img = document.getElementById('img');

//Define text variables
const condition = document.querySelector('.weather--condition');
const temperature = document.querySelector('.weather--temperature');
const feelsLike = document.querySelector('.weather--feels');
const pressure = document.querySelector('.weather--pressure');
const humidity = document.querySelector('.weather--humidity');

//Define API key
const apiKey = '***';

//define btn click
searchBtn.addEventListener('click', function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&units=metric&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      switch (data.weather[0].main) {
        case 'Clouds':
          img.src = 'img/cloudy.png';
          break;
        case 'Clear':
          img.src = 'img/sunny.png';
          break;
        case 'Rain':
          img.src = 'img/rainy_day.png';
          break;
      }
      cityName.textContent = inputField.value;
      condition.textContent = `Condition: ${data.weather[0].main}.`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      feelsLike.textContent = `Feels like: ${data.main.feels_like}°C`;
      pressure.textContent = `Pressure: ${data.main.pressure} p`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
    })
    .catch((error) => {
      cityName.textContent = 'Wrong city name!';
      console.error(error);
    });
});
