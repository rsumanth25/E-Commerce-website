
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ShoppingCartOutlined, PersonOutlined, Logout,SearchOutlined, AdminPanelSettings } from '@mui/icons-material';
import { logout } from '../store/authSlice';
import './Navbar.css';

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  const { user, isAdmin, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  let currentUser = null;

try {
  currentUser = JSON.parse(
    localStorage.getItem('currentUser')
  );
} catch {
  currentUser = {
    username:
      localStorage.getItem('currentUser')
  };
}
  const cartCount = items.length;
const handleLogout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('currentUser');

  window.location.reload();
};
  return (
    <nav className="navbar">

  <Link to="/" className="nav-logo">
    <span>URBAN STORE</span>
  </Link>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/">Products</Link>
  </div>

  <div className="nav-actions">

  

    <Link to="/cart" className="cart-icon-btn">
      <ShoppingCartOutlined />

      {cartCount > 0 && (
        <span className="cart-badge">
          {cartCount}
        </span>
      )}
    </Link>

    {isLoggedIn ? (
      <div className="user-section">

        <div className="user-name">
          <PersonOutlined />
          <div>
  {currentUser?.username}
</div>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <Logout fontSize="small" />
          Logout
        </button>

      </div>
    ) : (
      <Link to="/Login" className="login-btn">
        <PersonOutlined />
        Login
      </Link>
    )}

  </div>

</nav>

    
  );
}
        
      
export default Navbar;
