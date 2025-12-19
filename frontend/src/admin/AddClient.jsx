import { useState } from "react";
import API from "../api";
import "../styles/Admin.css";

const AddClient = () => {
  const [client, setClient] = useState({
    name: "",
    designation: "",
    description: "",
    image: null,
  });

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append("name", client.name);
    formData.append("designation", client.designation);
    formData.append("description", client.description);
    formData.append("image", client.image);

    await API.post("/clients", formData);
    alert("Client Added");
  };

  return (
    <div className="admin-form">
      <h2>Add Client</h2>

      <input
        placeholder="Client Name"
        onChange={(e) => setClient({ ...client, name: e.target.value })}
      />

      <input
        placeholder="Designation"
        onChange={(e) =>
          setClient({ ...client, designation: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        onChange={(e) =>
          setClient({ ...client, description: e.target.value })
        }
      />

      <input
        type="file"
        onChange={(e) => setClient({ ...client, image: e.target.files[0] })}
      />

      <button onClick={submitHandler}>Add Client</button>
    </div>
  );
};

export default AddClient;
