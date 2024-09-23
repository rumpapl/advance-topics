const fs = require("fs");
const path = require("path");

const getFileName = () => {
  const currentDateTime = new Date();
  // Format it according to Dhaka's timezone
  const options = {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const formattedDateTime = currentDateTime.toLocaleString("en-BD", options);
  const datetime = formattedDateTime.split(",");
  const [month, day, year] = datetime[0].split("/");
  const [hour, minute] = datetime[1].split(":");

  return `${year}_${day}_${month}_${hour}_${minute}`;
};

const ensureFolderAndCreateFile = (fileName) => {
  const __dirname = path.resolve();
  const filePath = path.resolve(
    __dirname,
    // "src",
    "csv-files",
    `${fileName}.csv`
  );

  // Check if the folder exists, if not, create it
  try {
    fs.mkdirSync(
      // path.resolve(__dirname + "/src", "csv-files"),
      path.resolve(__dirname, "csv-files"),
      { recursive: true },
      (error) => {
        if (error) {
          console.error(error);
        }
      }
    );
  } catch (error) {
    console.error("Error creating directory:", error);
  }

  return filePath.toString();
};

module.exports = { getFileName, ensureFolderAndCreateFile };
