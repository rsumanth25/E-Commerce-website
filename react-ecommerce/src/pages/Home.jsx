import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import './Home.css';
import axios from 'axios';
import watchImg from '../assets/watch.jpg';
import capImg from '../assets/cap.jpg';
import shoesImg from '../assets/shoes.jpg';
import handbagImg from '../assets/handbag.jpg';
import cupImg from '../assets/cup.jpg';
import beltImg from '../assets/belt.jpg';
import chairImg from '../assets/chair.jpg';
import jeansImg from '../assets/jeans.jpg';
import NecklaceImg from '../assets/NeckLace.jpg';
import tableImg from '../assets/table.jpg';

const LOCAL_PRODUCTS = [
  {
    id: 1,
    title: "Minimalist Smart Watch",
    price: 999,
    category: "Accessories",
    image: watchImg
  },
  {
    id: 2,
    title: "Puma Red Cap",
    price: 699,
    category: "Apparel",
    image: capImg
  },
  {
    id: 3,
    title: "Lightweight Running Shoes",
    price: 795,
    category: "Footwear",
    image: shoesImg
  },
  {
    id: 4,
    title: "Waterproof Travel Backpack",
    price: 450,
    category: "Bags",
    image: handbagImg
  },
  {
    id: 5,
    title: "Ceramic Coffee Mug",
    price: 250,
    category: "Kitchen",
    image: cupImg
  },
  {
    id: 6,
    title: "Leather Belt",
    price: 100,
    category: "Accessories",
    image: beltImg
  },
  {
    id: 7,
    title: "Wooden Chair",
    price: 2500,
    category: "Furniture",
    image: chairImg
  },
  {
    id: 8,
    title: "Denim Jeans",
    price: 2500,
    category: "Apparel",
    image: jeansImg
  },
  {
    id: 9,
    title: "Gold Necklace",
    price: 100000,
    category: "Accessories",
    image: NecklaceImg
  },
  {
    id: 10,
    title: "Wooden Table",
    price: 3000,
    category: "Furniture",
    image: tableImg
  }
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {

    const response = await axios.get(
      'https://e-commerce-website-s5nt.onrender.com/api/products'
    );

    setProducts([
      ...LOCAL_PRODUCTS,
      ...response.data
    ]);

  } catch (error) {

    console.log(error);

  }
};

  const categories = [
    'all',
    ...new Set(products.map((p) => p.category))
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === 'all' ||
      product.category === category;

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-header">
      <h1>Welcome to URBAN STORE</h1>

      <p>
        Discover our exclusive collection of trendy
        products. Shop now and elevate your style!
      </p>

      <div className="home-container">

        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="search-input"
          />
        </div>

        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`filter-btn ${
                category === cat ? 'active' : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
  key={product._id || product.id}
  product={product}
/>

            ))
          ) : (
            <h2>No products found</h2>
          )}
        </div>

      </div>
    </div>
  );
}