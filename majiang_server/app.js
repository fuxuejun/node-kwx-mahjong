
var http_service = require("./http_service");
var socket_service = require("./socket_service");

var configs = require(process.argv[2]);
var config = configs.game_server();

var db = require('../utils/db');
db.init(configs.mysql());

http_service.start(config);
socket_service.start(config);

