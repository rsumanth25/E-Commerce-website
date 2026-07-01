const express = require('express');

const {
  getProducts,
  addProduct,
  deleteProduct,
  updateStock
} = require('../controllers/productController');

const router = express.Router();
const upload =
require('../middleware/upload');
router.get('/', getProducts);
router.delete('/:id', deleteProduct);
router.post(
  '/',
  upload.single('image'),
  addProduct
);
router.put(
  '/:id/stock',
  updateStock
);

module.exports = router;