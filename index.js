/**
 * Main program to run a simple server that says Hello World.
 *
 */
import server from "./server.js";

const path = require('path');
const fs = require("fs");

var port;

if ('LINUX_PORT' in process.env) {
    console.log(`LINUX_PORT is set to '${process.env.LINUX_PORT}'`);
    server.listen(process.env.LINUX_PORT);
    port = process.env.LINUX_PORT;
}
else {
    console.log("LINUX_PORT is not set.");
    server.listen(1337);
    port = 1337;
}

// Start the server to listen on a port

// Write pid to file
var pidFile = path.join(__dirname, "pid");
fs.writeFile(pidFile, process.pid, function(err) {
    "use strict";
    if (err) {
        return console.log(err);
    }

    console.log("Wrote process id to file 'pid'");
});

console.log("Simple server listen on port " + port + " with process id " + process.pid);
