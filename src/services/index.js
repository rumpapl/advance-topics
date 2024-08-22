const axios = require("axios");
const redisClient = require("../config/redisConfig");

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = process.env.NEWS_API_KEY; // Store your API key in .env

async function fetchNews(country = "us", category = "technology") {
  const cacheKey = `news:${country}:${category}`;

  // Check if data is in Redis cache
  const cachedNews = await redisClient.get(cacheKey);
  if (cachedNews) {
    console.log("Cache hit");
    return JSON.parse(cachedNews);
  }

  // If not cached, fetch from API
  const response = await axios.get(NEWS_API_URL, {
    params: {
      country,
      category,
      apiKey: API_KEY,
    },
  });

  const newsData = response.data;

  // Cache the API response in Redis with an expiration time
  // The setEx method -- sets the key with the given value and automatically sets it to expire after the specified number of seconds.
  await redisClient.setEx(cacheKey, 600, JSON.stringify(newsData)); // Cache for 10 minutes

  console.log("Cache miss - Fetching from API");
  return newsData;
}

module.exports = fetchNews;
