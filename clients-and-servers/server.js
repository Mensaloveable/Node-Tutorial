const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>Hello there</h1>");
  //   res.end("Hello, world!");
  console.log("Thank you for banking with us");

  let path = "./views/";

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path += "index.html";
      break;
    case "/about":
      res.statusCode = 200;
      path += "about.html";
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
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
