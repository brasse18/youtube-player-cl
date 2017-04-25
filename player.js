var player = {};

var fs = require('fs');
var child = require("child_process");
var qs = require("querystring");


player.play = (res, query) => {
    "use strict";

    console.log();
    if (Object.keys(query).length)
    {
      var exe = 'cvlc --no-video "https://www.youtube.com/watch?' + qs.stringify(query) + '"';
      child.exec(exe, (error, stdout, stderr) => {
      if (error || stderr) {
          console.log("Something went wrong...", error, stderr);
      }

      res.writeHead(200, { "text": "text/plain" });
      res.end("Playing: " + qs.stringify(query));
    });
    }
    //https://www.youtube.com/watch?v=Czodr6-qxco

};

player.playlist = (res, query) => {
    "use strict";
    res.writeHead(200, { "text": "text/plain" });
    res.end("Playing playlist: ");
};

player.err = (res) => {
    "use strict";

    res.writeHead(200, { "text": "text/plain" });
    res.end("error ");
};


// Export as a module
export default player;
