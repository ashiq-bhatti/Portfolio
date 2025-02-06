const mongoose = require("mongoose");

const DbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOOSE_URL}/${process.env.DBNAME}`, );
    console.log("✅ DB connection established");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
  }
};

module.exports = DbConnection;
