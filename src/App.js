
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero"
import Reputation from './Components/Reputation/Reputation';
import AboutMe from './Components/Aboutme/AboutMe';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Consult from './Components/Consultation/Consult';
import Projects from './Components/Projects/Projects';
import Contactus from './Components/Contactus/Contactus';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
      <Reputation/>
      <AboutMe/>
      <Services/>
      <Experience/>
      <Consult/>
      <Projects/>
      <Contactus/>
      <Footer/>
   
    </>
  );
}

export default App;
