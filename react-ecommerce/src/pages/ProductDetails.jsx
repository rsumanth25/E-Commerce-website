import React from 'react';
import {updateQuantity,  removeFromCart} from '../store/cartSlice';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import './ProductDetails.css';

const ProductDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const product = location.state?.product;
  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const cartItems = useSelector(
  (state) => state.cart.items
);

const cartItem = cartItems.find(
  (item) =>
    (item._id || item.id) ===
    (product._id || product.id)
);
const quantity = cartItem?.quantity || 0;

  const imageUrl =
    product.image?.startsWith('/uploads')
      ? `http://localhost:5000${product.image}`
      : product.image;

  return (
    <div className="product-details-container">

      <div className="product-details-image">
        <img
          src={imageUrl}
          alt={product.title}
        />
      </div>

      <div className="product-details-info">

        <h1>{product.title}</h1>

        <h2>₹{product.price}</h2>

        <p>
          Category:
          <strong> {product.category}</strong>
        </p>

        <p>
          Stock:
          <strong> {product.stock}</strong>
        </p>

  {quantity === 0 ? (
  <button
    className="primary-button"
    onClick={() => dispatch(addToCart(product))}
  >
    Add To Cart
  </button>
) : (
  <div className="quantity-control">

    <button
      onClick={() => {
        if (quantity === 1) {
          dispatch(
            removeFromCart(
              product._id || product.id
            )
          );
        } else {
          dispatch(
            updateQuantity({
              id: product._id || product.id,
              quantity: quantity - 1
            })
          );
        }
      }}
    >
      -
    </button>

    <span>{quantity}</span>

    <button
      onClick={() => dispatch(addToCart(product))}
    >
      +
    </button>

  </div>
)}

      </div>

    </div>
  );
};
export default ProductDetails;