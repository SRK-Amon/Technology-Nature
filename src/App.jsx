import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Intro />
      <main className="main">
        <div className="main__box container">
          <About />
          <Gallery />
          <Projects />
          <Contacts />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
