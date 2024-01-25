import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Design from "./components/Design";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Design />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
