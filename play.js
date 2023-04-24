const connect = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function() {
    
    stdin.on("data", (data) => {
      // console.log("data clicked: ", data);
      if (data === "\u0003") {
        process.exit();
      }
      if (data === 'w') {
        stdin.write("Move: up\n");
      }
      if (data === 'a') {
        stdin.write("Move: left\n");
      }
      if (data === 's') {
        stdin.write("Move: down\n");
      }
      if (data === 'd') {
        stdin.write("Move: right\n");
      }
    });
  };
  return stdin.on("data", handleUserInput);
};
