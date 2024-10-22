import {
  button,
  city,
  cloud,
  cloudDetail,
  date,
  feel,
  feelDetail,
  humidity,
  humidityDetail,
  mainSection,
  secondarySection,
  temp,
  weatherDescription,
  weatherIcon,
  wind,
  windDetail,
} from "./call.js";

const getWeather = async () => {
  const input = document.getElementById("input").value.trim();
  const iconUrl = `https://openweathermap.org/img/wn`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=f95d9ba240c597333909070d5b3407fd`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`City not found`);
    }

    const data = await response.json();
    const icon = data.weather[0].icon;
    console.log(data);

    //details
    weatherIcon.src = `${iconUrl}/${icon}@2x.png`;
    weatherDescription.textContent = data.weather[0].description;
    temp.innerHTML = `${(data.main.temp - 273.15).toFixed(0)}&deg;c `;
    city.textContent = data.name;
    const formattedDate = new Date(data.dt * 1000).toLocaleString();
    date.textContent = formattedDate;
    feel.textContent = "Feels Like";
    feelDetail.innerHTML = `${(data.main.feels_like - 273.15).toFixed(
      0
    )}&deg;c`;
    cloud.textContent = "Clouds";
    cloudDetail.textContent = `${data.clouds.all}%`;
    humidity.textContent = "Humidity";
    humidityDetail.textContent = `${data.main.humidity}%`;
    wind.textContent = "Wind";
    windDetail.textContent = `${data.wind.speed} M/S`;

    mainSection.classList.remove("hidden");
    secondarySection.classList.remove("hidden");
  } catch (error) {
    console.error(`failed to get data`);
  }
};

button.addEventListener("click", getWeather);
