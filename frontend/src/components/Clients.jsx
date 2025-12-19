import { useEffect, useState } from "react";
import API from "../api";
import "../styles/Clients.css";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    API.get("/clients")
      .then((res) => setClients(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="clients" className="clients">
      <h2>Happy Clients</h2>

      <div className="client-grid">
        {clients.map((c) => (
          <div className="client-card" key={c._id}>
            <img
              src={`https://placement-full-stack-task.onrender.com/${c.image}`}
              alt={c.name}
            />
            <p>{c.description}</p>
            <h4>{c.name}</h4>
            <span>{c.designation}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
