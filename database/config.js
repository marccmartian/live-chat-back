const mongoose = require("mongoose");

const dataBaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("Database Online :)");
  } catch (error) {
    console.log(error);
    throw new Error("Error running database!!!");
  }
};

module.exports = {
  dataBaseConnection,
};
