require("dotenv").config();

const productData = require("./data/product");
const connectDB = require("./config/db");
const Product = require("./models/Porduct");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit(1);
  } catch (error) {
    console.error("Error with data import!");
    process.exit(1);
  }
};

importData();
