import { useEffect } from "react";
import backgroundImage from "../../assets/hero1.png";
import About from "./About";
import Countdown from "./Countdown";
import Faq from "./FAQ";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Speakers from "./Speakers";
import Sponsors from "./Sponsors";
import AOS from "aos";
import "aos/dist/aos.css";
import JudgingCriteria from "./JudgingCriteria";
import ResearchSymposium from "./ResearchSymposium";
import TeamSection from "./TeamSection";
import femi from "../../assets/femi.png"
import seyi from "../../assets/seyi.png"
import beatrice from "../../assets/beatrice.png"
import kyla from "../../assets/kyla.png"
import terrell from "../../assets/terrell.png"
import damilola from "../../assets/damilola.png"
import tunmise from "../../assets/tunmise.png"
import jaunel from "../../assets/jaunel.png"
import ebun from "../../assets/ebun.png"
import abdulai from "../../assets/abdulai.png"
// import SubmitProject from "./SubmitProject";

const LandingPage = () => {

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-cubic",
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  const teamData = [
    { name: 'Femi Mebude', position: 'President', image: femi },
    { name: 'Seyifunmi Williams', position: 'Sponsorship Manager', image: seyi },
    { name: 'Beatrice Oshokoya', position: 'IT Manager', image: beatrice },
    { name: 'Kyla Abraham', position: 'Program Manager ', image: kyla },
    { name: 'Terell Reed', position: 'Communication manager', image: terrell },
    { name: 'Damilola Adegbuyi', position: 'Social Media Manager(Instagram)', image: damilola },
    { name: 'Tunmise Eboda', position: 'Social Media Manager(LinkedIn)', image: tunmise },
    { name: 'Jaunel Panton', position: 'Registration manager', image: jaunel },
    { name: 'Ebun Oludemi', position: 'Transportation/ Accommodation', image: ebun },
    // { name: 'Kendell Crawford', position: 'Logistics (Catering) ', image: gallery12 },
    { name: 'Abdulai Hallowell', position: 'Creative Director', image: abdulai },
    // Add more team members here
  ];
  return (
    <div>
        <div
            className='bg-cover bg-center h-[100vh] md:h-[70vh] lg:h-[100vh]'
            style={{ backgroundImage: `url(${backgroundImage})` }}
            name='hero'
        >
            <Hero />
        </div>
        <About />
        <ResearchSymposium />
        <Countdown />
        <Speakers />
        <TeamSection teamData={teamData} />
        <JudgingCriteria />
        <Sponsors />
        {/* <SubmitProject /> */}
        <Gallery />
        <Faq />
    </div>
  )
}

export default LandingPage