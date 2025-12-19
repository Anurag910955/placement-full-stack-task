import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Projects />
      <Clients />
      <ContactForm />
      <Newsletter />
    </>
  );
};

export default Home;
