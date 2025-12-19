import { useEffect, useState } from "react";
import API from "../api";
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Our Projects</h2>

      <div className="grid">
        {projects.map((p) => (
          <div className="card" key={p._id}>
            <img
              src={`https://placement-full-stack-task.onrender.com/${p.image}`}
              alt={p.name}
            />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
