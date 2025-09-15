import { useEffect } from "react";
import backgroundImage from "../../assets/rob.png";
import opeyemi from "../../assets/Opeyemi-PIC.PNG";
import obi from "../../assets/passport.JPG";
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
import SubmitProject from "./SubmitProject";
import NewsPage from "./news";

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
    { name: 'Seyifunmi Williams', position: 'President', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413422/lapxnlymmypo0l0buzke.png" },
    { name: 'Abiola Ajala', position: 'Co President', image: "https://res.cloudinary.com/dv4qabxvt/image/upload/v1745952743/Abiola_Ajala_Headshot_c1wbbw.jpg" },
    { name: 'Beatrice Oshokoya', position: '_', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413421/idmjnp2xeediteyxjmlm.png" },
    { name: 'Blessing Adeika', position: 'Website Manager', image: "https://res.cloudinary.com/dv4qabxvt/image/upload/v1745951778/BlessingAdeika_g678t6.jpg" },
    { name: 'Collin', position: 'Finance Manager ', image: "https://res.cloudinary.com/dv4qabxvt/image/upload/v1745951778/CollinFinanceManager_qunlqi.jpg" },
    { name: 'Obiageli Nwachukwu', position: 'Program Manager', image: obi },
    { name: 'Terell Reed', position: 'Communication manager', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413420/b1u1xpmxnqnma0ybnrlj.png" },
    { name: 'Damilola Adegbuyi', position: 'Social Media Manager(Instagram)', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413422/uy9fk61mz2xia5rokzka.png" },    
    { name: 'David Owolabi', position: 'Media / Creative Director', image: "https://res.cloudinary.com/dv4qabxvt/image/upload/v1745951778/DavidOwolabi_ymwctc.jpg" },
    { name: 'Grace Balogun', position: 'Social Media Manager(LinkedIn)', image: "https://res.cloudinary.com/dv4qabxvt/image/upload/v1745951779/GraceBalogun_g3bnxr.jpg" },
    { name: 'Jaunel Panton', position: 'Registration manager', image: "https://res.cloudinary.com/djksz5job/image/upload/v1727485370/ughupzwc6rjzbiutou3w.jpg" },
    { name: 'Marissa Savage', position: 'Logistics (Swag)', image: "https://res.cloudinary.com/djksz5job/image/upload/v1726594862/qctpjiyshv6rmegf1znq.png" },
    { name: 'Opeyemi Adeniran', position: 'Director', image: opeyemi },
  ];

  return (
    <div>
        <div
            className=' bg-cover bg-center h-[100vh] md:h-[70vh] lg:h-[100vh]'
            style={{ backgroundImage: `url(${backgroundImage})` }}
            name='hero'
        >
            <Hero />
        </div>
        <About />
        <ResearchSymposium />
        <SubmitProject />
        <Countdown />
        <Speakers />
        <TeamSection teamData={teamData} />
        <Sponsors />
        <NewsPage />
        <Gallery />
        <Faq />
    </div>
  );
};

export default LandingPage;
