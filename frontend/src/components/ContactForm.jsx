import { useState } from "react";
import API from "../api";
import "../styles/Contact.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const submitHandler = async () => {
    try {
      await API.post("/contact", form);
      alert("Contact submitted successfully");

      // reset form
      setForm({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <input
        placeholder="Full Name"
        value={form.fullName}
        onChange={(e) =>
          setForm({ ...form, fullName: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        placeholder="Mobile"
        value={form.mobile}
        onChange={(e) =>
          setForm({ ...form, mobile: e.target.value })
        }
      />

      <input
        placeholder="City"
        value={form.city}
        onChange={(e) =>
          setForm({ ...form, city: e.target.value })
        }
      />

      <button onClick={submitHandler}>Submit</button>
    </section>
  );
};

export default ContactForm;
