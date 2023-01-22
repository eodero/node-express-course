const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    // res.setHeader()
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>Home Page</h1>");
    res.write(homePage);
    res.end();

    //about
  } else if (url === "/about") {
    // send About
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About</h1>");
    res.end();

    //styles
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();

    // homeImage
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();

    // logic
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();

    //styles
  } else {
    // send 404
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
