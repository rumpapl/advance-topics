const redis = require("redis");

const client = redis.createClient({
  url: process.env.REDIS_DSN,
});

client.on("error", (err) => console.error("Redis Client Error", err));

client.connect();

module.exports = client;
