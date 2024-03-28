import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

const latitude = 33.4484;
const longitude = -112.074036;
const APIkey = "8c165130be21cc7ed5c265c80e9180d0";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((data) => {
      return parseWeatherData(data);
    });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const location = data.name;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  return weather;
};
