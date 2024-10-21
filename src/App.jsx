import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import "./index.scss";
import HomePage from "./pages/homepage/HomePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
