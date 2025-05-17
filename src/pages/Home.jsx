import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Footer from "../components/Footer";

function Home() {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects /> 
        <Footer />
      </div>
    );
}

export default Home; 
