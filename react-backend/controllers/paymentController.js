const razorpay =
  require('../config/razorpay');

const createOrder = async (
  req,
  res
) => {

  try {

    const options = {
      amount:
        req.body.amount * 100,
      currency: 'INR',
      receipt:
        'receipt_' +
        Date.now()
    };

    const order =
      await razorpay.orders.create(
        options
      );

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  createOrder
};