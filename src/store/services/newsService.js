import axios from "axios";

const getNews = async () => {
  const response = await axios.get(
    "https://arabic-news-api.p.rapidapi.com/cnnarabic",
    {
      headers: {
        "X-RapidAPI-Key": "c7395e9816mshad765b9ec232f73p1d0c3cjsn5248bf8283ba",
        "X-RapidAPI-Host": "arabic-news-api.p.rapidapi.com",
      },
    }
  );
  return response.data;
};

const newsService = { getNews };

export default newsService;
