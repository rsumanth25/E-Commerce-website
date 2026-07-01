const express = require('express');

const router =
  express.Router();

const {
  createOrder,
  getOrders,updateOrderStatus
} = require(
  '../controllers/OrderController'
);

router.post(
  '/',
  createOrder
);

router.get(
  '/',
  getOrders
);
router.put(
  '/:id/status',
  updateOrderStatus
);

module.exports = router;