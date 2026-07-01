const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
      required: true
    },

    pincode: {
      type: String,
      required: true
    },

    items: [
      {
        title: String,
        price: Number,
        quantity: Number,
        image: String
      }
    ],

    totalAmount: {
      type: Number,
      required: true
    },

    status: {
  type: String,
  enum: [
    'Pending',
    'Processing',
    'Shipped',
    'Delivered',
    'Cancelled'
  ],
  default: 'Pending'
},

    orderId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.model(
    'Order',
    orderSchema
  );