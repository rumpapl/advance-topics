const Redis = require("ioredis");

let CONNECTION = null;

module.exports.getRedis = () => {
  if (CONNECTION) {
    return CONNECTION;
  } else {
    CONNECTION = new Redis(process.env.REDIS_DSN, {
      maxRetriesPerRequest: null,
    });

    return CONNECTION;
  }
};
