// Replace with your free WeatherAPI.com key
const apiKey = "c69295045cce456f8ec93516251511";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultBox = document.getElementById("weatherResult");

  if (!city) {
    resultBox.innerHTML = "<p>Please enter a city name!</p>";
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      resultBox.innerHTML = "<p>City not found. Try again!</p>";
      return;
    }

    resultBox.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
      <p><strong>Weather:</strong> ${data.current.condition.text}</p>
      <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.current.wind_kph} km/h</p>
    `;

  } catch (error) {
    resultBox.innerHTML = "<p>Error fetching weather data.</p>";
    console.error(error);
  }
}
