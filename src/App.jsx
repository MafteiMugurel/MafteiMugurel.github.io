import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Recommendations from "./components/recommendation/Recommendations";
import Contact from "./components/contact/Contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Recommendations />
      <Contact />
    </div>
  );
}

export default App;
