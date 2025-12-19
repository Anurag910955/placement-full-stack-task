import { useEffect, useState } from "react";
import API from "../api";
import "../styles/Admin.css";

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API.get("/contact")
      .then((res) => setContacts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="admin-table">
      <h2>Contact Form Submissions</h2>

      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td>{c.fullName}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>
              <td>{c.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewContacts;
