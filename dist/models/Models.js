"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersModels = exports.BiodataModels = exports.AvatarModels = void 0;
var _client = require("@prisma/client");
var UsersModels = exports.UsersModels = new _client.PrismaClient().users;
var BiodataModels = exports.BiodataModels = new _client.PrismaClient().biodata;
var AvatarModels = exports.AvatarModels = new _client.PrismaClient().avatar;