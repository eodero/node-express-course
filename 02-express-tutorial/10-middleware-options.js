const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

// req => middleware => res

// -Middleware options

//1. use vs route
//2. options - our own /express/ third party
// app.use([logger, authorize]);
// app.use(express.static('./public'))
// app.use("/api", logger);

// api/home/about/products

app.use(morgan("tiny")); //tiny provides most essentail data
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("About");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("About");
});

app.listen(5000, () => {
  console.log("server is listening on 5000....");
});
