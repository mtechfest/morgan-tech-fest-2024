import { useEffect } from "react";
import backgroundImage from "../../assets/hero1.png";
import About from "./About";
import Countdown from "./Countdown";
import Faq from "./Faq";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Speakers from "./Speakers";
import Sponsors from "./Sponsors";
import AOS from "aos";
import "aos/dist/aos.css";
import JudgingCriteria from "./JudgingCriteria";
import ResearchSymposium from "./ResearchSymposium";
import TeamSection from "./TeamSection";
// import femi from "../../assets/femi.png"
// import seyi from "../../assets/seyi.png"
// import beatrice from "../../assets/beatrice.png"
// import kyla from "../../assets/kyla.png"
// import terrell from "../../assets/terrell.png"
// import damilola from "../../assets/damilola.png"
// import tunmise from "../../assets/tunmise.png"
// import jaunel from "../../assets/jaunel.png"
// import ebun from "../../assets/ebun.png"
// import abdulai from "../../assets/abdulai.png"
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
    { name: 'Femi Mebude', position: 'President', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413421/mi5bzqfl4nq7rndosjhw.png" },
    { name: 'Seyifunmi Williams', position: 'Sponsorship Manager', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413422/lapxnlymmypo0l0buzke.png" },
    { name: 'Beatrice Oshokoya', position: 'IT Manager', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413421/idmjnp2xeediteyxjmlm.png" },
    { name: 'Kyla Abraham', position: 'Program Manager ', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413423/yhruavu21wqcfmy6zgpe.png" },
    { name: 'Terell Reed', position: 'Communication manager', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413420/b1u1xpmxnqnma0ybnrlj.png" },
    { name: 'Damilola Adegbuyi', position: 'Social Media Manager(Instagram)', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413422/uy9fk61mz2xia5rokzka.png" },
    { name: 'Tunmise Eboda', position: 'Social Media Manager(LinkedIn)', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413420/haakgsbyhik4uhvkzcfm.png" },
    { name: 'Jaunel Panton', position: 'Registration manager', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413423/koxkwkygpsisfuiqqar7.png" },
    { name: 'Ebun Oludemi', position: 'Transportation/Website', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413421/esudtq4exr7ijqswzeqp.png" },
    // { name: 'Kendell Crawford', position: 'Logistics (Catering) ', image: gallery12 },
    { name: 'Abdulai Hallowell', position: 'Creative Director', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413421/sdxnfrt3cejz7tbhbg1f.png" },
    // Add more team members here
  ];
  return (
    <div>
        <div
            className='bg-cover bg-center h-[100vh] md:h-[70vh] lg:h-[100vh]'
            style={{ backgroundImage: "url('https://res.cloudinary.com/dlzxduiks/image/upload/v1714432166/Hero/qj2r5u8xcrahphmmmmpr.png')" }}
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