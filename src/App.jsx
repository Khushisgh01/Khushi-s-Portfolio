import { BrowserRouter } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary bg-animate'>
        <CustomCursor />
        
        {/* Scroll Progress Bar */}
        <motion.div
          className='progress-bar'
          style={{ scaleX: scrollYProgress }}
        />

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        <div className='relative z-0'>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;