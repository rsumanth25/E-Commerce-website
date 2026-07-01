import { Link } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = ({ handleLogout }) => {
  return (
    <div className="admin-sidebar">

      <h2>ADMIN PANEL</h2>

      <Link to="/admin/dashboard">
        Dashboard
      </Link>

      <a href="#products">
        Products
      </a>

      <a href="#orders">
        Orders
      </a>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
};

export default AdminSidebar;