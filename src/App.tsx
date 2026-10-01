import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import AboutUs from "./components/AboutUs/AboutUs";
import StatsBar from "./components/StatsBar/StatsBar";
import Services from "./components/Services/Services";
import WhyUs from "./components/WhyUs/WhyUs";
import Projects from "./components/Projects/Projects";
import Hiring from "./components/Hiring/Hiring";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div id="home">     <Hero />          </div>
      <div id="portfolio"><Cards />         </div>
      <div id="about">    <AboutUs />       </div>
      <StatsBar />
      <div id="services"> <Services />      </div>
      <WhyUs />
      <div id="projects"> <Projects />      </div>
      <Hiring />
      <Testimonials />
      <div id="blog">     <Blog />          </div>
      <div id="contact">  <Footer />        </div>
    </>
  );
}

export default App;
