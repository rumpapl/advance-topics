const fs = require("fs");
const { mkdir } = require("fs/promises");

const path = require("path");
const csvWriter = require("csv-writer");
const { format } = require("date-fns");
const { TZDate } = require("@date-fns/tz");

const getFileName = (currentDateTime) => {
  // Format it according to Dhaka's timezone
  const tzDate = new TZDate(currentDateTime, "Asia/Dhaka");
  return format(tzDate, "yyyy_dd_MM_HH_mm");
};

const ensureFolderAndCreateFile = async (fileName) => {
  const __dirname = path.resolve();
  const folderName = "csv-files";
  const folderPath = `${__dirname}/${folderName}`;

  // Check if the folder exists, if not, create it
  const isFolderExists = fs.existsSync(folderPath);
  if (!isFolderExists) {
    try {
      await mkdir(path.resolve(folderPath), {
        recursive: true,
      });
    } catch (error) {
      console.error("Error creating directory:", error);
    }
  }

  const filePath = path.resolve(folderPath, `${fileName}.csv`);
  return filePath.toString();
};

const saveUserLog = async (data, filePath) => {
  const writer = csvWriter.createObjectCsvWriter({
    path: filePath,
    header: [
      { id: "userId", title: "User Id" },
      { id: "userName", title: "User Name" },
      { id: "emailType", title: "Email Type" },
      { id: "message", title: "Message" },
      { id: "createdAt", title: "Created At" },
    ],
  });

  await writer.writeRecords(data);
};

module.exports = { getFileName, ensureFolderAndCreateFile, saveUserLog };
