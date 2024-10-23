"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _expressRateLimit = require("express-rate-limit");
var _UsersControllers = require("../controllers/UsersControllers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var users_controllers = _express["default"].Router();
var LimitLogin = (0, _expressRateLimit.rateLimit)({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Pressing the screen too much, please wait a little longer up to 15 minutes !!"
});

//      CREATE USER ROUTES
users_controllers.post("/users/create", _UsersControllers.UsersCreate);
users_controllers.post("/users/login", _UsersControllers.UsersLogin, LimitLogin);
users_controllers.post("/users/read", _UsersControllers.UsersRead);
users_controllers.put("/users/update/:id", _UsersControllers.UsersUpdate);
users_controllers["delete"]("/users/delete/:id", _UsersControllers.UsersDelete);
users_controllers.get("/users/auth", _UsersControllers.UserAuth);

//te fukcje są aby sobie były, jak ci przeszkadzają to je usuń
users_controllers.get("/hello", function (req, res) {
  res.send("Hello World");
});
users_controllers.get("/lorem", function (req, res) {
  res.send("Lorem ipsum dolor sit amet...");
});
var _default = exports["default"] = users_controllers;