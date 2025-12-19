import { useState } from "react";
import API from "../api";
import "../styles/Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    await API.post("/subscribe", { email });
    alert("Subscribed");
  };

  return (
    <section className="newsletter">
      <h3>Subscribe Newsletter</h3>
      <input placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={subscribe}>Subscribe</button>
    </section>
  );
};

export default Newsletter;
