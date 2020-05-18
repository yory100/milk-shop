const mongoose = require("mongoose");

const dbUrl = process.env.DBURL || "mongodb://localhost/milk-shop";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: process.env.POOLSIZE || 4,
};

const connect = async () => {
  try {
    return await mongoose.connect(dbUrl, options);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connect;
