const { getDatabase } = require("../utils/database");

const USER_LOG_COLLECTION_NAME = "user_email_logs";

const addInfo = async (data) => {
  const db = await getDatabase();

  return await db
    .collection(USER_LOG_COLLECTION_NAME)
    .insertOne({ ...data, created_at: new Date() });
};

const fetchUserlog = async (user_id) => {
  const db = await getDatabase();

  return await db
    .collection(USER_LOG_COLLECTION_NAME)
    .find({ user_id })
    .toArray();
};

const fetchUserslog = async () => {
  const db = await getDatabase();

  return await db.collection(USER_LOG_COLLECTION_NAME).find().toArray();
};

const fetchUserlogBasedOnTime = async (durationInMilliSecond = 0) => {
  const db = await getDatabase();

  return await db
    .collection(USER_LOG_COLLECTION_NAME)
    .find({
      created_at: {
        $gte: new Date(Date.now() - durationInMilliSecond),
      },
    })
    .toArray();
};

module.exports = {
  addInfo,
  fetchUserlog,
  fetchUserslog,
  fetchUserlogBasedOnTime,
};
