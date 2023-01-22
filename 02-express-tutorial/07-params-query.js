const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

//show products without description
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

//show one product with description

// app.get("/api/products/1", (req, res) => {
//   const newProducts = products.find((product) => product.id === 1);

//   res.json(newProducts);
// });

//use params to show one product
app.get("/api/products/:productID", (req, res) => {
  //console.log(req)
  //console.log(req.params)

  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    res.status(404).send("Product does not exist");
  }

  return res.json(singleProduct);
});

//adding a layer of path
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

//adding query string
app.get("/api/v1/query", (req, res) => {
  //   console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("no products matched your search");

    //or we can return the following
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server is listening on 5000....");
});
