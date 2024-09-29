const { getDatabase } = require("../utils/database");

const USER_LOG_COLLECTION_NAME = "user_email_logs";

const addInfo = async (data) => {
  const db = await getDatabase();

  return await db
    .collection(USER_LOG_COLLECTION_NAME)
    .insertOne({ ...data, createdAt: new Date() });
};

const fetchUserlog = async (userId) => {
  const db = await getDatabase();

  return await db
    .collection(USER_LOG_COLLECTION_NAME)
    .find({ userId })
    .toArray();
};

const fetchUserslog = async () => {
  const db = await getDatabase();

  return await db.collection(USER_LOG_COLLECTION_NAME).find().toArray();
};

const fetchUserlogBasedOnTimeDuration = async (durationInMilliSecond = 0) => {
  const db = await getDatabase();

  return await db
    .collection(USER_LOG_COLLECTION_NAME)
    .find({
      createdAt: {
        $gte: new Date(Date.now() - durationInMilliSecond),
      },
    })
    .toArray();
};

module.exports = {
  addInfo,
  fetchUserlog,
  fetchUserslog,
  fetchUserlogBasedOnTimeDuration,
};
