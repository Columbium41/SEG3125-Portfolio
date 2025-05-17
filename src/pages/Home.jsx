import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";

function Home() {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects /> 
      </div>
    );
}

export default Home; 
