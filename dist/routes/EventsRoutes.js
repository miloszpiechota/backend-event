"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _EventsControllers = require("../controllers/EventsControllers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var event_controllers = _express["default"].Router();

//      CREATE EVENT ROUTES
event_controllers.post("/create", _EventsControllers.EventCreate);
event_controllers.get("/read", _EventsControllers.EventRead);
event_controllers.put("/update/:id", _EventsControllers.EventUpdate);
event_controllers["delete"]("/delete/:id", _EventsControllers.EventDelete);
var _default = exports["default"] = event_controllers;