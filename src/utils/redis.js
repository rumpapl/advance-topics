const Redis = require("ioredis");

let CONNECTION = null;

const getRedis = () => {
  if (CONNECTION) return CONNECTION;

  try {
    CONNECTION = new Redis(process.env.REDIS_DSN, {
      // Additional options can be passed here
      maxRetriesPerRequest: null, // Important for BullMQ
    });
  } catch (error) {
    console.error("Error establishing Redis connection:", error);
    throw error;
  }

  return CONNECTION;
};

module.exports = getRedis;
