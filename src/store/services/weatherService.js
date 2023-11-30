import axios from "axios";

const appId = "adbd1eb153ad7c8766ac8226b026779c";

const getWeather = async (lat, long) => {
  const response = await await axios.post(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${appId}`
  );

  return response.data;
};

const weatherService = { getWeather };
export default weatherService;
