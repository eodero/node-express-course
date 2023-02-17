//to automatically populate the database with data
//-1 import the dotenv config file
require("dotenv").config();

//-2 connect to the database
const connectDB = require("./db/connect");

//-3 import the model
const Product = require("./models/Product");

//-4 import the json products from the database
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany(); //optional step. Removes previous data and starts new ones
    await Product.create(jsonProducts);
    console.log("Success!!! ");
    process.exit(0); //terminate the process
  } catch (error) {
    console.log(error);
    process.exit(1); //terminate the process
  }
};

start();
