const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

// app.get("/", logger, (req, res) => {
//   res.send("Home");
// });

// app.get("/about", logger, (req, res) => {
//   res.send("About");
// });

//use app.use to apply logger to multiple routes
app.use([logger, authorize]);
// app.use("/api", logger);

// api/home/about/products
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
