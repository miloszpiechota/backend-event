"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _path = _interopRequireDefault(require("path"));
var _helmet = _interopRequireDefault(require("helmet"));
var _UsersRoutes = _interopRequireDefault(require("./routes/UsersRoutes"));
var _category = _interopRequireDefault(require("./routes/category.js"));
var _events = _interopRequireDefault(require("./routes/events.js"));
var _expressRateLimit = require("express-rate-limit");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
var PORT = process.env.PORT;
// const users_controllers = express.Router()

// RATE LIMIT, THE PROCESS OF LIMITING THE NUMBER OF USER/CLIENT REQUSET ON CERTAIN RESOURCES
var limiter = (0, _expressRateLimit.rateLimit)({
  windowMs: 15 * 60 * 1000,
  //15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too much pressing the screen please wait a while longer !!"
});

//  MIDDLEWARE
app.use(function (req, res, next) {
  // WEBSITE YOU WISH TO ALLOW TO CONNECT
  req.headers["Access-control-allow-origin"] = "*";

  // REQUEST METHOD YOU WISH TO ALLOW
  req.headers["Access-control-allow-methods"] = "GET, POST, PUT, DELETE, OPTIONS, PATCH";

  // REQUEST HEADERS YOU WISH TO ALLOW
  req.headers["Access-control-allow-headers"] = "Content-Type, Authorization";

  // PASS TO NEXT LAYER OF MIDDLEWARE
  next();
});
app.use((0, _cors["default"])({
  origin: "*"
}));
app.use((0, _helmet["default"])({
  crossOriginResourcePolicy: false
}));
app.use(limiter);
app.use(_express["default"].json({
  limit: "100mb"
}));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../static")));

//  ROUTES
app.use("/api", _UsersRoutes["default"]);
app.use((0, _cors["default"])());
app.use("/api/categories", _category["default"]);
app.use("/api/events", _events["default"]);
//  LISTENER
app.listen(PORT, function () {
  console.log("Server is up and running on port ".concat(PORT));
});