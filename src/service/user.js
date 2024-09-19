const { getDatabase } = require("../utils/database");

const USER_LOG_COLLECTION_NAME = "user_email_logs";

const addInfo = async (data) => {
  const db = await getDatabase();

  return await db.collection(USER_LOG_COLLECTION_NAME).insertOne(data);
};

const fetchUserlog = async (user_id) => {
  const db = await getDatabase();

  return await db
    .collection(USER_LOG_COLLECTION_NAME)
    .find({ user_id: +user_id }) // need to work
    .toArray();
};

const fetchUserslog = async () => {
  const db = await getDatabase();

  return await db.collection(USER_LOG_COLLECTION_NAME).find().toArray();
};

module.exports = { addInfo, fetchUserlog, fetchUserslog };
