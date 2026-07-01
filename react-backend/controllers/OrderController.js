const Order = require('../models/Order');
const Product =
  require('../models/Product');
const createOrder = async (
  req,
  res
) => {
  try {

    const order =
      await Order.create(req.body);

    for (const item of req.body.items) {

      await Product.findByIdAndUpdate(
        item.productId,
        {
          $inc: {
            stock: -item.quantity
          }
        }
      );

    }

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
const updateOrderStatus =
  async (req, res) => {

    const order =
      await Order.findByIdAndUpdate(
        req.params.id,
        {
          status:
            req.body.status
        },
        {
          new: true
        }
      );

    res.json(order);
};


const getOrders = async (
  req,
  res
) => {
  try {

    const orders =
      await Order.find().sort({
        createdAt: -1
      });

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus
};