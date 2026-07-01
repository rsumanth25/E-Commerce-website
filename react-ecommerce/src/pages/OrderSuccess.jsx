import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const orderDetails = location.state?.orderDetails;

  return (
    <div className="order-success-container">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h1>Order Placed Successfully!</h1>

        <p className="success-message">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        {orderDetails && (
          <div className="order-details">
            <h3>Order Summary</h3>

            <div className="detail-row">
              <span>Total Amount</span>
              <span>₹{orderDetails.totalAmount}</span>
            </div>

            <div className="detail-row">
              <span>Payment Method</span>
              <span>{orderDetails.paymentMethod}</span>
            </div>

            <div className="detail-row">
              <span>Items</span>
              <span>{orderDetails.products?.length || 0}</span>
            </div>
          </div>
        )}

        <div className="button-group">
          <button
            className="home-btn"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>

          <button
            className="cart-btn"
            onClick={() => navigate('/cart')}
          >
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;