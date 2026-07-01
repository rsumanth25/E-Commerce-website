import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
    const revenue = orders.reduce(
  (sum, order) => sum + order.totalAmount,
  0
);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
const [stock, setStock] = useState('');


const fetchProducts = async () => {
  try {
    const response = await fetch(
      'https://e-commerce-website-s5nt.onrender.com/api/products'
    );

    const data = await response.json();

    setProducts(data);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
  const isAdmin = localStorage.getItem('isAdmin');

  if (!isAdmin) {
    navigate('/admin/login');
    return;
  }

  const fetchOrders = async () => {
  try {

    const response =
      await axios.get(
        'https://e-commerce-website-s5nt.onrender.com/api/orders'
      );

    setOrders(response.data);

  } catch (error) {

    console.log(error);

  }
};

fetchOrders();

fetchProducts();
}, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

 const handleAddProduct = async () => {
  if (
    !productName ||
    !price ||
    !category ||
    !stock ||
    !image
  ) {
    alert('Please fill all fields');
    return;
  }

  try {

    const formData = new FormData();

    formData.append(
      'title',
      productName
    );

    formData.append(
      'price',
      price
    );

    formData.append(
      'category',
      category
    );

    formData.append(
      'stock',
      stock
    );

    formData.append(
      'image',
      image
    );

    await axios.post(
      'https://e-commerce-website-s5nt.onrender.com/api/products',
      formData
    );

    alert('Product Added');

    setProductName('');
    setPrice('');
    setCategory('');
    setStock('');
    setImage(null);

    fetchProducts();

  } catch (error) {

    console.log(error);

    alert('Failed to add product');

  }
};
const updateStatus = async (
  orderId,
  status
) => {
  try {

    await axios.put(
      `https://e-commerce-website-s5nt.onrender.com/api/orders/${orderId}/status`,
      { status }
    );

    fetchOrders();

  } catch (error) {

    console.log(error);

  }
};

  const deleteProduct = async (id) => {
  try {

    await axios.delete(
      `https://e-commerce-website-s5nt.onrender.com/api/products/${id}`
    );

    fetchProducts();

  } catch (error) {

    console.log(error);

    alert('Failed to delete product');

  }
};

const updateStock = async (
  id,
  stock
) => {

  try {

    await axios.put(
      `https://e-commerce-website-s5nt.onrender.com/api/products/${id}/stock`,
      { stock }
    );

    fetchProducts();

  } catch (error) {

    console.log(error);

  }

};
  return (
      <div className="admin-dashboard">
<div className="admin-header">

  <div className="admin-logo">
    URBAN STORE
  </div>

  <h1>Admin Dashboard</h1>

  <div className="admin-actions">

    <span className="admin-user">
      👤 Admin
    </span>

    <button
      className="logout-btn"
      onClick={handleLogout}
    >
      Logout
    </button>

  </div>

</div>
      

      <div className="stats-container">

        <div className="stat-card revenue">
  <h4>Total Revenue</h4>
  <h2>₹{revenue.toLocaleString()}</h2>
</div>

<div className="stat-card orders">
  <h4>Total Orders</h4>
  <h2>{orders.length}</h2>
</div>

<div className="stat-card products">
  <h4>Total Products</h4>
  <h2>{products.length}</h2>
</div>

</div>
<div className="dashboard-content">
<div
  id="orders"
  className="orders-section"
>
  <h2>Orders</h2>

  {orders.length === 0 ? (
    <p>No Orders Found</p>
  ) : (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Phone</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td>{order.orderId}</td>

<td>{order.customerName}</td>

<td>{order.phone}</td>

<td>₹{order.totalAmount}</td>

<td>
  <select
    value={order.status}
    onChange={(e) =>
      updateStatus(
        order._id,
        e.target.value
      )
    }
  >
    <option>Pending</option>
    <option>Processing</option>
    <option>Shipped</option>
    <option>Delivered</option>
    <option>Cancelled</option>
  </select>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

      <div className="add-product-card">
        <h2>Add Product</h2>

        <input
          placeholder="Product Name"
          value={productName}
          onChange={(e) =>
            setProductName(e.target.value)
          }
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setImage(e.target.files[0])
  }
/>
<input
  placeholder="Stock Quantity"
  value={stock}
  onChange={(e) =>
    setStock(e.target.value)
  }
/>

        <button onClick={handleAddProduct}>
          Publish Product
        </button>
      </div>

      <table className="products-grid-table">
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Manage Stock</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {products.map((product) => (
      <tr key={product._id}>
        <td>
          <img
  src={`https://e-commerce-website-s5nt.onrender.com${product.image}`}
  alt={product.title}
  width="50"
/>
        </td>

        <td>{product.title}</td>

<td>₹{product.price}</td>

<td>
  {product.stock}
</td>

<td>
  <div className="stock-controls">

    <button
      className="stock-btn"
      onClick={() =>
        updateStock(
          product._id,
          product.stock - 1
        )
      }
      disabled={product.stock <= 0}
    >
      -
    </button>

    <span>
      {product.stock}
    </span>

    <button
      className="stock-btn"
      onClick={() =>
        updateStock(
          product._id,
          product.stock + 1
        )
      }
    >
      +
    </button>

  </div>
</td>

<td>
  <button
    onClick={() =>
      deleteProduct(product._id)
    }
  >
    Delete
  </button>
</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
</div>
  );
};

export default AdminDashboard;