const http = require("http");

console.log("Staring server on port 8000 ...")
http.createServer((req, res) =>
{
  console.log("Incoming Request")
  res.write("Hello, World!");
  res.end();
}).listen(8000);