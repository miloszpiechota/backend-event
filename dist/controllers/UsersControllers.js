"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersUpdate = exports.UsersRead = exports.UsersLogin = exports.UsersDelete = exports.UsersCreate = exports.UserAuth = void 0;
var _express = require("express");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
var _Models = require("../models/Models");
var _http = require("http2");
var _excluded = ["password"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
_dotenv["default"].config();
var salt = _bcryptjs["default"].genSaltSync(10);

//      CREATE USERS
var UsersCreate = exports.UsersCreate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var req,
      res,
      _yield$req$body,
      name,
      second_name,
      surname,
      iduser_type,
      email,
      phonenumber,
      zipcode,
      street,
      idcity,
      password,
      checkUniqueEmail,
      createUsers,
      token,
      hashToken,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          req = _args.length > 0 && _args[0] !== undefined ? _args[0] : _express.request;
          res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
          _context.prev = 2;
          _context.next = 5;
          return req.body;
        case 5:
          _yield$req$body = _context.sent;
          name = _yield$req$body.name;
          second_name = _yield$req$body.second_name;
          surname = _yield$req$body.surname;
          iduser_type = _yield$req$body.iduser_type;
          email = _yield$req$body.email;
          phonenumber = _yield$req$body.phonenumber;
          zipcode = _yield$req$body.zipcode;
          street = _yield$req$body.street;
          idcity = _yield$req$body.idcity;
          password = _yield$req$body.password;
          _context.next = 18;
          return _Models.UsersModels.findFirst({
            where: {
              email: email // Finds the first user with this email
            }
          });
        case 18:
          checkUniqueEmail = _context.sent;
          if (!checkUniqueEmail) {
            _context.next = 21;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            success: false,
            msg: "email already exist"
          }));
        case 21:
          _context.next = 23;
          return _Models.UsersModels.create({
            data: {
              name: name,
              second_name: second_name,
              surname: surname,
              iduser_type: iduser_type,
              email: email,
              phonenumber: phonenumber,
              zipcode: zipcode,
              street: street,
              idcity: idcity,
              password: _bcryptjs["default"].hashSync(password, salt)
            }
          });
        case 23:
          createUsers = _context.sent;
          _context.next = 26;
          return _jsonwebtoken["default"].sign({
            app_name: "inzynierka",
            id: createUsers.iduser,
            email: createUsers.email,
            username: createUsers.username
          }, process.env.API_SECRET, {
            expiresIn: "1d"
          });
        case 26:
          token = _context.sent;
          _context.next = 29;
          return _cryptoJs["default"].AES.encrypt(token, process.env.API_SECRET).toString();
        case 29:
          hashToken = _context.sent;
          res.status(201).json({
            success: true,
            msg: "Successfully created users!",
            token: hashToken
          });
          _context.next = 36;
          break;
        case 33:
          _context.prev = 33;
          _context.t0 = _context["catch"](2);
          res.status(500).json({
            success: false,
            error: _context.t0.message
          });
        case 36:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 33]]);
  }));
  return function UsersCreate() {
    return _ref.apply(this, arguments);
  };
}();

//      USERS LOGIN
var UsersLogin = exports.UsersLogin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var req,
      res,
      _yield$req$body2,
      email,
      password,
      Usercheck,
      comparePassword,
      token,
      hashToken,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          req = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _express.request;
          res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
          _context2.prev = 2;
          _context2.next = 5;
          return req.body;
        case 5:
          _yield$req$body2 = _context2.sent;
          email = _yield$req$body2.email;
          password = _yield$req$body2.password;
          _context2.next = 10;
          return _Models.UsersModels.findFirst({
            where: {
              email: email
            }
          });
        case 10:
          Usercheck = _context2.sent;
          if (Usercheck) {
            _context2.next = 14;
            break;
          }
          res.status(401).json({
            success: false,
            msg: "Email Not Found!"
          });
          return _context2.abrupt("return");
        case 14:
          _context2.next = 16;
          return _bcryptjs["default"].compareSync(password, Usercheck.password);
        case 16:
          comparePassword = _context2.sent;
          _context2.next = 19;
          return _jsonwebtoken["default"].sign({
            app_name: "inzynierka",
            id: Usercheck.iduser,
            email: Usercheck.email
          }, process.env.API_SECRET, {
            expiresIn: "10d"
          });
        case 19:
          token = _context2.sent;
          _context2.next = 22;
          return _cryptoJs["default"].AES.encrypt(token, process.env.API_SECRET).toString();
        case 22:
          hashToken = _context2.sent;
          res.setHeader("Access-Controll-Allow-Origin", "*");
          res.status(200).json({
            success: true,
            token: hashToken
          });
          _context2.next = 30;
          break;
        case 27:
          _context2.prev = 27;
          _context2.t0 = _context2["catch"](2);
          res.status(500).json({
            success: false,
            error: _context2.t0.message
          });
        case 30:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 27]]);
  }));
  return function UsersLogin() {
    return _ref2.apply(this, arguments);
  };
}();

//      USERS READ ALL (for admin)
var UsersRead = exports.UsersRead = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var req,
      res,
      _yield$req$query,
      _yield$req$query$page,
      page,
      _yield$req$query$limi,
      limit,
      skip,
      _yield$req$body3,
      filter,
      result,
      conn,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          req = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : _express.request;
          res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
          _context3.prev = 2;
          _context3.next = 5;
          return req.query;
        case 5:
          _yield$req$query = _context3.sent;
          _yield$req$query$page = _yield$req$query.page;
          page = _yield$req$query$page === void 0 ? 1 : _yield$req$query$page;
          _yield$req$query$limi = _yield$req$query.limit;
          limit = _yield$req$query$limi === void 0 ? 10 : _yield$req$query$limi;
          skip = (page - 1) * limit;
          _context3.next = 13;
          return req.body;
        case 13:
          _yield$req$body3 = _context3.sent;
          filter = _yield$req$body3.filter;
          _context3.next = 17;
          return _Models.UsersModels.findMany({
            skip: parseInt(skip),
            take: parseInt(limit),
            orderBy: {
              iduser: "desc"
            },
            where: filter
          });
        case 17:
          result = _context3.sent;
          _context3.next = 20;
          return _Models.UsersModels.count();
        case 20:
          conn = _context3.sent;
          res.status(200).json({
            success: true,
            current_page: parseInt(page),
            total_page: Math.ceil(conn / limit),
            total_data: conn,
            query: result
          });
          _context3.next = 27;
          break;
        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](2);
          res.status(500).json({
            success: false,
            error: _context3.t0.message
          });
        case 27:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 24]]);
  }));
  return function UsersRead() {
    return _ref3.apply(this, arguments);
  };
}();

//      USERS UPDATE

var UsersUpdate = exports.UsersUpdate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var req,
      res,
      _req$body,
      name,
      second_name,
      surname,
      email,
      phonenumber,
      zipcode,
      street,
      idcity,
      id,
      checkUniqueId,
      checkUniqueEmail,
      existingUser,
      result,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          req = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : _express.request;
          res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _express.response;
          _context4.prev = 2;
          _req$body = req.body, name = _req$body.name, second_name = _req$body.second_name, surname = _req$body.surname, email = _req$body.email, phonenumber = _req$body.phonenumber, zipcode = _req$body.zipcode, street = _req$body.street, idcity = _req$body.idcity;
          id = req.params.id; // Zakładam, że te parametry są przekazywane w URL
          // Sprawdzenie, czy użytkownik istnieje
          _context4.next = 7;
          return _Models.UsersModels.findUnique({
            where: {
              iduser: parseInt(id)
            }
          });
        case 7:
          checkUniqueId = _context4.sent;
          if (checkUniqueId) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            success: false,
            message: 'User ID not found!'
          }));
        case 10:
          _context4.next = 12;
          return _Models.UsersModels.findFirst({
            where: {
              email: email
            }
          });
        case 12:
          checkUniqueEmail = _context4.sent;
          _context4.next = 15;
          return _Models.UsersModels.findUnique({
            where: {
              iduser: parseInt(id)
            }
          });
        case 15:
          existingUser = _context4.sent;
          if (!(checkUniqueEmail && checkUniqueEmail.iduser !== parseInt(id))) {
            _context4.next = 18;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            success: false,
            message: 'Email already exists!'
          }));
        case 18:
          _context4.next = 20;
          return _Models.UsersModels.update({
            where: {
              iduser: parseInt(id)
            },
            data: {
              name: name || existingUser.name,
              second_name: second_name || existingUser.second_name,
              surname: surname || existingUser.surname,
              email: email || existingUser.email,
              phonenumber: phonenumber || existingUser.phonenumber,
              zipcode: zipcode || existingUser.zipcode,
              street: street || existingUser.street,
              idcity: idcity || existingUser.idcity
              // password: bcryptjs.hashSync(password, salt) || existingUser.password, // Hashowanie hasła 
            }
          });
        case 20:
          result = _context4.sent;
          res.status(200).json({
            success: true,
            message: "Successfully updated user!",
            user: result
          });
          _context4.next = 27;
          break;
        case 24:
          _context4.prev = 24;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            success: false,
            error: _context4.t0.message
          });
        case 27:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 24]]);
  }));
  return function UsersUpdate() {
    return _ref4.apply(this, arguments);
  };
}();
var UsersDelete = exports.UsersDelete = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var req,
      res,
      id,
      checkId,
      result,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          req = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : _express.request;
          res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _express.response;
          _context5.prev = 2;
          id = req.params.id;
          _context5.next = 6;
          return _Models.UsersModels.findUnique({
            where: {
              iduser: parseInt(id)
            }
          });
        case 6:
          checkId = _context5.sent;
          if (checkId) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: 'Id not found!'
          }));
        case 9:
          _context5.next = 11;
          return _Models.UsersModels["delete"]({
            where: {
              iduser: parseInt(id)
            }
          });
        case 11:
          result = _context5.sent;
          res.status(201).json({
            success: true,
            msg: "Successfully delete users!",
            user: result
          });
          _context5.next = 18;
          break;
        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](2);
          res.status(500).json({
            success: false,
            error: _context5.t0.message
          });
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 15]]);
  }));
  return function UsersDelete() {
    return _ref5.apply(this, arguments);
  };
}();

//  USER AUTH
var UserAuth = exports.UserAuth = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var req,
      res,
      token,
      bearer,
      decToken,
      verify,
      getUserData,
      password,
      userWithoutPassword,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          req = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : _express.request;
          res = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : _express.response;
          _context6.prev = 2;
          _context6.next = 5;
          return req.headers.authorization;
        case 5:
          token = _context6.sent;
          if (token) {
            _context6.next = 9;
            break;
          }
          res.status(401).json({
            success: false,
            msg: "Login first to get tokens ?"
          });
          return _context6.abrupt("return", res.status(401).json({
            success: false,
            error: "Token tidak ditemukan"
          }));
        case 9:
          _context6.next = 11;
          return token.split(" ")[1];
        case 11:
          bearer = _context6.sent;
          _context6.next = 14;
          return _cryptoJs["default"].AES.decrypt(bearer, process.env.API_SECRET).toString(_cryptoJs["default"].enc.Utf8);
        case 14:
          decToken = _context6.sent;
          _context6.next = 17;
          return _jsonwebtoken["default"].verify(decToken, process.env.API_SECRET);
        case 17:
          verify = _context6.sent;
          if (verify) {
            _context6.next = 21;
            break;
          }
          res.status(401).json({
            success: false,
            msg: "Login first to get tokens ?"
          });
          return _context6.abrupt("return", res.status(401).json({
            success: false,
            error: "Error"
          }));
        case 21:
          if (!(verify.exp < Date.now() / 1000)) {
            _context6.next = 24;
            break;
          }
          res.status(401).json({
            success: false,
            msg: "Token Expirited"
          });
          return _context6.abrupt("return", res.status(401).json({
            success: false,
            error: "Token Expirited"
          }));
        case 24:
          _context6.next = 26;
          return _Models.UsersModels.findUnique({
            where: {
              iduser: parseInt(verify.id)
            }
          });
        case 26:
          getUserData = _context6.sent;
          if (getUserData) {
            _context6.next = 29;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            success: false,
            msg: "User not found!"
          }));
        case 29:
          password = getUserData.password, userWithoutPassword = _objectWithoutProperties(getUserData, _excluded); // Usunięcie hasła z odpowiedzi
          return _context6.abrupt("return", res.status(200).json({
            success: true,
            query: userWithoutPassword
          }));
        case 33:
          _context6.prev = 33;
          _context6.t0 = _context6["catch"](2);
          res.status(500).json({
            success: false,
            error: _context6.t0.message
          });
        case 36:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 33]]);
  }));
  return function UserAuth() {
    return _ref6.apply(this, arguments);
  };
}();