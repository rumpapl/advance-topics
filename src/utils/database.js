const { MongoClient } = require("mongodb");

const mongoConnectionOptions = {
  appName: "email_service_app",
};

let connection = null;

module.exports.getDatabase = async () => {
  if (!connection) {
    const client = new MongoClient(
      process.env.MONGO_DSN,
      mongoConnectionOptions
    );

    connection = await client.connect();
  }

  return connection.db();
};
