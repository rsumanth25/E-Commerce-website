import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  LocationOnOutlined,
  CreditCardOutlined,
  ShoppingBagOutlined,
  LockOutlined,
  LocalShippingOutlined,
  HeadsetMicOutlined,
  WalletOutlined,
  VerifiedUserOutlined
} from '@mui/icons-material';
import { clearCart } from '../store/cartSlice';
import './Checkout.css';

const Checkout = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    navigate('/login');
  }
}, [navigate]);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const shipping = items.length ? 0 : 0;
  const total = totalAmount + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    const requiredFields = ['fullName', 'phone', 'address', 'city', 'state', 'pincode'];
    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

    if (!isFormValid) {
      alert('Please fill in all mandatory fields to place your order.');
      return;
    }

    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

  try {

  const orderId = `ORD-${Date.now()}`;

    const date = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).toUpperCase();



   const orderDetails = {
  items,
  totalAmount,
  shipping,
  orderId,
  date
};
await axios.post(
  'https://e-commerce-website-s5nt.onrender.com/api/orders',
  {
    customerName: formData.fullName,
    phone: formData.phone,
    address: formData.address,
    city: formData.city,
    state: formData.state,
    pincode: formData.pincode,

    items: items.map((item) => ({
  productId:
    item._id || item.id,

  title: item.title,

  price: item.price,

  quantity: item.quantity,

  image: item.image
})),

    totalAmount,
    orderId
  }
);
const paymentResponse =
console.log(
  "ORDER DATA",
  orderData
);
  await axios.post(
    'https://e-commerce-website-s5nt.onrender.com/api/payment/create-order',
    {
      amount: total
    }
  );

const order =
  paymentResponse.data;

const options = {
  key:
    'rzp_test_T4wC8DzGGoIEQ8',

  amount:
    order.amount,

  currency:
    order.currency,

  name:
    'Urban Store',

  description:
    'Order Payment',

  order_id:
    order.id,

  handler:
    async function (
      response
    ) {

      alert(
        'Payment Successful'
      );

      await handlePlaceOrder();

    }
};

const razorpay =
  new window.Razorpay(
    options
  );

razorpay.open();

    dispatch(clearCart());

    navigate('/order-success', {
      state: { orderDetails }
    });

  } catch (error) {
  console.error("ORDER ERROR:", error);
  alert("Failed to place order");
}

};
  if (items.length === 0) {
    return (
      <div className="page checkout-page">
        <div className="glass-card" style={{ textAlign: 'center', padding: '40px' }}>
          <h2>Your cart is empty</h2>
          <button className="primary-button" onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page checkout-page">
      <header className="checkout-header">
        <h1>Checkout</h1>
      </header>

    
      <div className="checkout-layout">
        <div className="checkout-left">
          {/*  Address */}
          <section className="glass-card checkout-section">
            <h2 className="section-title">
              <LocationOnOutlined className="section-icon" /> Your Address
            </h2>
            <div className="form-grid">
              <div className="form-group">
                <legend>Full Name</legend>
                <div className="input-with-icon">
                  <span className="input-icon user-icon"></span>
                    <input type="text" name="fullName" placeholder="Enter your name" value={formData.fullName} onChange={handleInputChange} />
                </div></div>
              <div className="form-group">
                <legend>Phone Number</legend>
                <div className="input-with-icon">
                  <span className="input-icon phone-icon"></span>
                  <input type="text" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-group full-width">
                <legend>Address</legend>
                <div className="input-with-icon">
                  <span className="input-icon home-icon"></span>
                  <input type="text" name="address" placeholder="Enter your address" value={formData.address} onChange={handleInputChange} />
                </div>
              </div>
              
              <div className="form-group">
                <legend>City</legend>
                <div className="input-with-icon">
                  <span className="input-icon city-icon"></span>
                  <input type="text" name="city" placeholder="Enter your city" value={formData.city} onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-group">
                <legend>State</legend>
                <div className="input-with-icon">
                  <span className="input-icon map-icon"></span>
                  <input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleInputChange} /> 
                </div>
              </div>
              <div className="form-group">
                <legend>Pincode</legend>
                <div className="input-with-icon">
                  <span className="input-icon pin-icon"></span>
                  <input type="text" name="pincode" placeholder="Enter pincode" value={formData.pincode} onChange={handleInputChange} />
                </div>
              </div>
            
            </div>
          </section>

          {/* Payment Method */}
          <section className="glass-card checkout-section">
            <h2 className="section-title">
              <span className="section-icon" /> Payment Method
            </h2>
            <div className="payment-methods">

  <div
    className={`payment-card ${
      paymentMethod === 'cod'
        ? 'active-payment'
        : ''
    }`}
    onClick={() => setPaymentMethod('cod')}
  >
    <div className="payment-left">
      <h4>💵 Cash On Delivery</h4>
      <p>Pay when your order arrives</p>
    </div>

    <input
      type="radio"
      checked={paymentMethod === 'cod'}
      readOnly
    />
  </div>

  <div
    className={`payment-card ${
      paymentMethod === 'online'
        ? 'active-payment'
        : ''
    }`}
    onClick={() => setPaymentMethod('online')}
  >
    <div className="payment-left">
      <h4>💳 Online Payment</h4>
      <p>UPI, Credit Card, Debit Card</p>
    </div>

    <input
      type="radio"
      checked={paymentMethod === 'online'}
      readOnly
    />
  </div>

</div>
          </section>
        </div>

        <div className="checkout-right">
          <section className="glass-card order-summary-card">
            <h2 className="section-title">
              <ShoppingBagOutlined className="section-icon" /> Order Summary
            </h2>
            <p className="items-count">{items.length} {items.length === 1 ? 'Item' : 'Items'} in Cart</p>
            
            <div className="summary-items">
              {items.map(item => (
                <div key={item.id  || item._id} className="summary-item">
                  <img
  src={
    item.image?.startsWith('/uploads')
      ? `https://e-commerce-website-s5nt.onrender.com${item.image}`
      : item.image
  }
  alt={item.title}
/>
                  <div className="summary-item-info">
                    <h3>{item.title || item.name}</h3>
                    <span className="item-price">₹{item.price.toLocaleString('en-IN')}</span>
                    <span className="item-qty">Qty: {item.quantity}</span>
                  </div>
                  <div className="summary-item-total">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-calculations">
              <div className="calc-row">
                <span>Subtotal</span>
                <span>₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="calc-row">
                <span>Shipping</span>
                <span className="free-text">{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString('en-IN')}`}</span>
              </div>
              <div className="calc-row">
                <span>Discount</span>
                <span>- ₹0</span>
              </div>
            </div>

            <div className="summary-total-row">
              <span>Total</span>
              <span className="total-amount">₹{total.toLocaleString('en-IN')}</span>
            </div>
                   <button className="primary-button place-order-btn" onClick={handlePlaceOrder}>
              <LockOutlined fontSize="small" /> Place Order
            </button>
            <div className="trust-badges">
  <span>🔒 Secure Checkout</span>
  <span>🚚 Free Delivery</span>
  <span>↩️ Easy Returns</span>
</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
