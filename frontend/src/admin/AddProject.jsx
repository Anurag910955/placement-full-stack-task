import { useState } from "react";
import API from "../api";
import "../styles/Admin.css";

const AddProject = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    image: null,
  });

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append("name", project.name);
    formData.append("description", project.description);
    formData.append("image", project.image);

    await API.post("/projects", formData);
    alert("Project Added");
  };

  return (
    <div className="admin-form">
      <h2>Add Project</h2>

      <input
        placeholder="Project Name"
        onChange={(e) =>
          setProject({ ...project, name: e.target.value })
        }
      />

      <textarea
        placeholder="Project Description"
        onChange={(e) =>
          setProject({ ...project, description: e.target.value })
        }
      />

      <input
        type="file"
        onChange={(e) =>
          setProject({ ...project, image: e.target.files[0] })
        }
      />

      <button onClick={submitHandler}>Add Project</button>
    </div>
  );
};

export default AddProject;
