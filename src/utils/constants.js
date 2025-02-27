import sunny from "../images/day/sunny.svg";
import cloudy from "../images/day/cloudy.svg";
import rain from "../images/day/rain.svg";
import storm from "../images/day/storm.svg";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.silksky.com"
    : "http://localhost:3001";

export const weatherOptions = [
  {
    url: sunny,
    day: true,
    type: "sunny",
  },
  {
    url: cloudy,
    day: true,
    type: "cloudy",
  },
  {
    url: rain,
    day: false,
    type: "rain",
  },
  {
    url: storm,
    day: false,
    type: "storm",
  },
];

export { baseUrl };
