const redis = require("redis");

const client = redis.createClient({
  url: process.env.REDIS_DNS,
});

client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

client.subscribe("mychannel", (message) => {
  console.log(`Received message: ${message}`);
});
