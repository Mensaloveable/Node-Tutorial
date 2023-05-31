
// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === "/" || req.url === "/about") {
//         res.end("You're welcome");
//     } else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.end(`
//           <h1>Oops</h1>
//           <p>We can't find the page you're looking for</p>
//           <a href="/"> home </a>
//         `);
//     }
// });

// server.listen(3000);


// const prices = arr.map((item) => item.price);
// const names = arr.map((item) => item.name);

// console.log(prices);
// console.log(names);

var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(3000);