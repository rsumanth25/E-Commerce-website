# 🛍️ Urban Store - Full Stack E-Commerce Website

A production-ready **Full Stack E-Commerce Web Application** built using the **MERN Stack**. The application provides a seamless online shopping experience with secure authentication, product management, shopping cart, order processing, inventory management, and Razorpay payment integration. It is fully deployed with the frontend on **Vercel**, backend on **Render**, and **MongoDB Atlas** as the cloud database.

---

## 🚀 Live Demo

🌐 **Frontend:** https://e-commerce-website-one-phi-30.vercel.app/

⚙️ **Backend API:** https://e-commerce-website-s5nt.onrender.com/

---

## 📌 Features

### 👤 User Features

- User Registration & Login
- Browse Products
- Search & Filter Products
- Product Details Page
- Shopping Cart
- Secure Checkout
- Razorpay Payment Integration
- Order Placement
- Responsive User Interface

### 🔐 Admin Features

- Secure Admin Login
- Add New Products
- Upload Product Images
- Update Product Stock
- Delete Products
- View Customer Orders
- Update Order Status
- Inventory Management Dashboard

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer
- JWT Authentication
- Razorpay
- dotenv

### Deployment
- Vercel
- Render
- MongoDB Atlas

---

## 📂 Project Structure

```text
E-Commerce-website
│
├── react-ecommerce/          # React Frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vercel.json
│
├── react-backend/            # Node.js Backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/rsumanth25/E-Commerce-website.git

cd E-Commerce-website
```

### Frontend Setup

```bash
cd react-ecommerce

npm install

npm run dev
```

Runs at:

```
http://localhost:5173
```

### Backend Setup

```bash
cd react-backend

npm install

npm run dev
```

Runs at:

```
http://localhost:5000
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **react-backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key

RAZORPAY_KEY_ID=your_razorpay_key

RAZORPAY_KEY_SECRET=your_razorpay_secret
```

---

## 📡 API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Fetch all products |
| POST | `/api/products` | Add a new product |
| PUT | `/api/products/:id/stock` | Update product stock |
| DELETE | `/api/products/:id` | Delete product |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Fetch all orders |
| POST | `/api/orders` | Create new order |
| PUT | `/api/orders/:id/status` | Update order status |

### Payments

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payment/create-order` | Create Razorpay order |
| POST | `/api/payment/verify` | Verify payment |

---

## 📸 Screenshots

> Add screenshots of the following pages:

- 🏠 Home Page
- 🛒 Product Listing
- 📄 Product Details
- 🛍️ Shopping Cart
- 💳 Checkout Page
- 📦 Order Success
- 🔐 Admin Login
- 📊 Admin Dashboard

---

## ✨ Key Features

- Full Stack MERN Architecture
- Cloud Database using MongoDB Atlas
- RESTful API Development
- Secure Authentication
- Razorpay Payment Gateway
- Product Image Upload
- Inventory Management
- Order Management
- Responsive UI
- Production Deployment
- Admin Dashboard

---

## 🔮 Future Enhancements

- Product Reviews & Ratings
- Wishlist
- User Profile Management
- Order Tracking
- Email Notifications
- Coupon & Discount System
- Sales Analytics Dashboard
- Cloudinary Image Storage

---

## 👨‍💻 Author

**Rayeni Sumanth Reddy**

- GitHub: https://github.com/rsumanth25
- LinkedIn: https://www.linkedin.com/in/rayeni-sumanth-reddy/

---

## ⭐ Show Your Support

If you found this project useful, please consider giving it a ⭐ on GitHub!

---
