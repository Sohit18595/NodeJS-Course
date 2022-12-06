const http = require("http");
const PORT = 3000 || process.env.PORT;
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("views/landing.html", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("views/home.html", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("views/about.html", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("views/404.html", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, function () {
  console.log("I'm listening on port", PORT);
});
