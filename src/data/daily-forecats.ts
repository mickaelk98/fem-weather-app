import drizzleIcon from "../assets/images/icon-drizzle.webp";
import fogIcon from "../assets/images/icon-fog.webp";
import overcastIcon from "../assets/images/icon-overcast.webp";
import snowIcon from "../assets/images/icon-snow.webp";
import rainIcon from "../assets/images/icon-rain.webp";
import stormIcon from "../assets/images/icon-storm.webp";
import sunnyIcon from "../assets/images/icon-sunny.webp";
import partlyCloudyIcon from "../assets/images/icon-partly-cloudy.webp";

const data = [
  {
    day: "Mon",
    icon: sunnyIcon,
    min: 18,
    max: 28,
  },
  {
    day: "Tue",
    icon: drizzleIcon,
    min: 17,
    max: 25,
  },
  {
    day: "Wed",
    icon: rainIcon,
    min: 16,
    max: 23,
  },
  {
    day: "Thu",
    icon: stormIcon,
    min: 19,
    max: 27,
  },
  {
    day: "Fri",
    icon: partlyCloudyIcon,
    min: 20,
    max: 29,
  },
  {
    day: "Sat",
    icon: fogIcon,
    min: 15,
    max: 22,
  },
  {
    day: "Sun",
    icon: snowIcon,
    min: -2,
    max: 4,
  },
];

export default data;
