const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create({
      title: req.body.title,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
      image: req.file
        ? `/uploads/${req.file.filename}`
        : ''
    });

    res.status(201).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
const updateStock = async (
  req,
  res
) => {
  try {

    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        {
          stock: req.body.stock
        },
        {
          new: true
        }
      );

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const deleteProduct = async (req, res) => {
  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: 'Product deleted'
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
   updateStock
};