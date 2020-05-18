const mongoose = require("mongoose");

const dbUrl = process.env.DBURL || "mongodb://localhost/milk-shop";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: process.env.POOLSIZE || 4,
};

const connect = () => {
  console.log("connection ->", dbUrl);
  return mongoose
    .connect(dbUrl, options)
    .then(() => console.log("Database connection successful"))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connect;
