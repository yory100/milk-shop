const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const connect = require("./db");

const app = express();

app.disable("x-powered-by");

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connect();

// app.post('/signup', signup);
// app.post('/signin', signin);

// app.use('/api', protect);
app.use("/", (req, res) => {
  res.send("hello12");
});
// app.use("/api/product", productRouter);
// app.use("/api/user", userRouter);

module.exports = app;
