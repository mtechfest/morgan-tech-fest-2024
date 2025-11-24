import { useEffect, lazy, Suspense } from "react";
import backgroundImage from "../../assets/cvs.png";
import opeyemi from "../../assets/opeyemi-pic.png";
import obi from "../../assets/passport.jpg";

// OPTIMIZATION: Removed AOS completely
// import AOS from "aos";
// import "aos/dist/aos.css";

// Eager load above-fold components
import Hero from "./Hero";
import About from "./About";
import Countdown from "./Countdown";

// OPTIMIZATION: Lazy load below-fold components for faster initial load
const Faq = lazy(() => import("./Faq"));
const Gallery = lazy(() => import("./Gallery"));
const Speakers = lazy(() => import("./Speakers"));
const Sponsors = lazy(() => import("./Sponsors"));
const ResearchSymposium = lazy(() => import("./ResearchSymposium"));
const TeamSection = lazy(() => import("./TeamSection"));
const NewsPage = lazy(() => import("./news"));
const JudgingCriteria = lazy(() => import("./JudgingCriteria"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const LandingPage = () => {
  // OPTIMIZATION: Removed all AOS initialization
  // useEffect(() => {
  //   AOS.init({
  //     easing: "ease-in-out-cubic",
  //     duration: 1000,
  //   });
  // }, []);

  // useEffect(() => {
  //   AOS.refresh();
  // });

  const teamData = [
    { name: 'Seyifunmi Williams', position: 'President', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413422/lapxnlymmypo0l0buzke.png" },
    { name: 'Abiola Ajala', position: 'Co President', image: "https://res.cloudinary.com/dv4qabxvt/image/upload/v1745952743/Abiola_Ajala_Headshot_c1wbbw.jpg" },
    { name: 'Jaunel Panton', position: 'Registration manager', image: "https://res.cloudinary.com/djksz5job/image/upload/v1727485370/ughupzwc6rjzbiutou3w.jpg" },
    { name: 'Marissa Savage', position: 'Logistics (Swag)', image: "https://res.cloudinary.com/djksz5job/image/upload/v1726594862/qctpjiyshv6rmegf1znq.png" },
    { name: 'Blessing Adeika', position: 'Website Manager', image: "https://res.cloudinary.com/dv4qabxvt/image/upload/v1745951778/BlessingAdeika_g678t6.jpg" },
    { name: 'Collin', position: 'Finance Manager ', image: "https://res.cloudinary.com/dv4qabxvt/image/upload/v1745951778/CollinFinanceManager_qunlqi.jpg" },
    { name: 'Obiageli Nwachukwu', position: 'Program Manager', image: obi },
    { name: 'Beatrice Oshokoya', position: 'IT Manager', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413421/idmjnp2xeediteyxjmlm.png" },
    { name: 'Terell Reed', position: 'Communication manager', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413420/b1u1xpmxnqnma0ybnrlj.png" },
    { name: 'Damilola Adegbuyi', position: 'Social Media Manager(Instagram)', image: "https://res.cloudinary.com/dlzxduiks/image/upload/v1714413422/uy9fk61mz2xia5rokzka.png" },
    { name: 'David Owolabi', position: 'Media / Creative Director', image: "https://res.cloudinary.com/dv4qabxvt/image/upload/v1745951778/DavidOwolabi_ymwctc.jpg" },
    { name: 'Grace Balogun', position: 'Social Media Manager(LinkedIn)', image: "https://res.cloudinary.com/dv4qabxvt/image/upload/v1745951779/GraceBalogun_g3bnxr.jpg" },
  ];

  return (
    <div>
      {/* Hero Section - Load immediately */}
      <div
        className='bg-cover bg-center h-[100vh] md:h-[70vh] lg:h-[100vh]'
        style={{ backgroundImage: `url(${backgroundImage})` }}
        name='hero'
      >
        <Hero />
      </div>

      {/* Above-fold content - Load immediately */}
      <About />
      
      {/* OPTIMIZATION: Lazy load below-fold content */}
      <Suspense fallback={<LoadingFallback />}>
        <ResearchSymposium />
      </Suspense>

      {/* Countdown loads immediately since it's important */}
      <Countdown />

      <Suspense fallback={<LoadingFallback />}>
        <Speakers />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <TeamSection teamData={teamData} />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Sponsors />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <NewsPage />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Faq />
      </Suspense>
    </div>
  );
};

export default LandingPage;
