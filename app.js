var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

var indexRouter = require("./routes/index");

var app = express();
const db = require("./models/index");
db.sequelize.sync({ force: false });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.static(path.resolve(__dirname, "./node_modules/bootstrap/dist/")),
);
app.use(
  express.static(
    path.resolve(__dirname, "./node_modules/bootstrap-icons/font/"),
  ),
);

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  const status = err.status || 500;
  res.status(status).render("error", { title: "Oops!", status: status });
});

module.exports = app;
