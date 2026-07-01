const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config();

connectDB();
const productRoutes =
require('./routes/productRoutes');
const app = express();
const orderRoutes =
  require('./routes/orderRoutes');
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(
  '/api/products',
  productRoutes
);
app.use(
  '/uploads',
  express.static(
    path.join(__dirname, 'uploads')
  )
);
app.get('/', (req, res) => {
  res.send('Urban Store API Running');
});
app.use(
  '/api/orders',
  orderRoutes
);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const paymentRoutes =
  require(
    './routes/paymentRoutes'
  );

app.use(
  '/api/payment',
  paymentRoutes
);

const Product = require('./models/Product');
app.get('/test-product', async (req, res) => {
  const product = await Product.create({
    title: 'Smart Watch',
    price: 999,
    category: 'Accessories',
    stock: 20,
    image: 'watch.jpg'
  });

  res.json(product);
});