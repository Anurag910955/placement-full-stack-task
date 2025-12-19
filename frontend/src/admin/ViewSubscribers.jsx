import { useEffect, useState } from "react";
import API from "../api";
import "../styles/Admin.css";

const ViewSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    API.get("/subscribe")
      .then((res) => setSubscribers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="admin-table">
      <h2>Subscribed Emails</h2>

      <table>
        <thead>
          <tr>
            <th>Email Address</th>
          </tr>
        </thead>

        <tbody>
          {subscribers.map((s) => (
            <tr key={s._id}>
              <td>{s.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSubscribers;
