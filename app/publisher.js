const redis = require("redis");

const client = redis.createClient({
  url: process.env.REDIS_DNS,
});

client.on("error", (err) => console.log("Redis Client Error", err));
client.on("connect", () =>
  console.log("Redis Client is connected successfully.")
);
client.on("ready", () => console.log("Redis Client is ready to use."));
client.on("reconnecting", () => console.log("Redis Client is reconnecting."));
client.on("end", () => console.log("Redis Client is ended."));

client.connect();

const publishMessage = () => {
  let count = 0;
  setInterval(() => {
    const message = `Message No. ${count++}`;
    client
      .publish("mychannel", message)
      .then(() => console.log(`Published: ${message}`))
      .catch((err) => console.error("Publish Error:", err));
  }, 2000); // Publish every 5 seconds
};

publishMessage();
