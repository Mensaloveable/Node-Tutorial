const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>Hello there</h1>");
  //   res.end("Hello, world!");
  console.log("Thank you for banking with us");

  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listenong on http://localhost:3000");
});
