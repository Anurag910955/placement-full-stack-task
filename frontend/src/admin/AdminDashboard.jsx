import { Link } from "react-router-dom";
import "../styles/Admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <Link to="/admin/add-project">Add Project</Link>
      <Link to="/admin/add-client">Add Client</Link>
      <Link to="/admin/contacts">View Contacts</Link>
      <Link to="/admin/subscribers">View Subscribers</Link>
    </div>
  );
};

export default AdminDashboard;
