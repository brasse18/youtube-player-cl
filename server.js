"use strict";

// Require the module
var http = require("http");
var url  = require("url");
var qs = require("querystring");

// My handlers for each route is now within this module
import player from "./player.js";

// Use the createServer function to create the simple server
var server = http.createServer((req, res) => {

    var ipAddress;
    var route;
    var urlParts;
    var query;
    var queryString;

    urlParts = url.parse(req.url, true);
    route = urlParts.pathname;
    query = urlParts.query;
    queryString = qs.stringify(query);
    route = url.parse(req.url).pathname;
    ipAddress = req.connection.remoteAddress;

    console.log("Incoming route " + route + " from ip " + ipAddress + " with querystring " + queryString);

     //Switch (route) on the path.
     switch (route) {
         case "/play":
             player.play(res, query);
         break;
         default:
             player.err(res, query);
         break;
     }
});

// Export the server as a module.
export default server;
