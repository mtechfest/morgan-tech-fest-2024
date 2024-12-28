import { useEffect } from "react";
import backgroundImage from "../../assets/cvs.png";
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
    { name: 'Femi Mebude', position: 'President', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413421/mi5bzqfl4nq7rndosjhw.png" },
    { name: 'Seyifunmi Williams', position: 'Sponsorship Manager', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413422/lapxnlymmypo0l0buzke.png" },
    { name: 'Beatrice Oshokoya', position: 'IT Manager', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413421/idmjnp2xeediteyxjmlm.png" },
    { name: 'Kyla Abraham', position: 'Program Manager ', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413423/yhruavu21wqcfmy6zgpe.png" },
    { name: 'Terell Reed', position: 'Communication manager', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413420/b1u1xpmxnqnma0ybnrlj.png" },
    { name: 'Damilola Adegbuyi', position: 'Social Media Manager(Instagram)', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413422/uy9fk61mz2xia5rokzka.png" },
    { name: 'Tunmise Eboda', position: 'Social Media Manager(LinkedIn)', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413420/haakgsbyhik4uhvkzcfm.png" },
    { name: 'Jaunel Panton', position: 'Registration manager', image: "https://res.cloudinary.com/djksz5job/image/upload/v1727485370/ughupzwc6rjzbiutou3w.jpg" },
    { name: 'Ebun Oludemi', position: 'Transportation/Website', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413421/esudtq4exr7ijqswzeqp.png" },
    { name: 'Abdulai Hallowell', position: 'Creative Director', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413421/sdxnfrt3cejz7tbhbg1f.png" },
    { name: 'Ayomide Ajibola', position: 'Finance Manager', image: "https://res.cloudinary.com/djksz5job/image/upload/v1720650069/e5tbki6drsjs433covq8.jpg" },
    { name: 'Theophilus Akwemoh', position: 'Logistics (Event Planning)', image: "https://res.cloudinary.com/djksz5job/image/upload/v1720650080/lbwq3qa9i4vstt5shrec.jpg" },
    { name: 'Oluwapemiisin Akingbola', position: 'Partnerships Manager', image: "https://res.cloudinary.com/djksz5job/image/upload/v1720650077/t8i3uk8ix6rmip3xrobj.jpg" },
    { name: 'Marissa Savage', position: 'Logistics (Swag)', image: "https://res.cloudinary.com/djksz5job/image/upload/v1726594862/qctpjiyshv6rmegf1znq.png" },

    // Add more team members here
  ];
  return (
    <div>
        <div
            className=' bg-cover bg-center h-[100vh] md:h-[70vh] lg:h-[100vh]'
            // style={{ backgroundImage: "url('https://res.cloudinary.com/dlzxduiks/image/upload/v1714432166/Hero/qj2r5u8xcrahphmmmmpr.png')" }}
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
        <JudgingCriteria />
        <NewsPage />
        <Sponsors />
        <Gallery />
        <Faq />
    </div>
  );
};

export default LandingPage;
