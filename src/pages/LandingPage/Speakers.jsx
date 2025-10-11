import backgroundImage from "../../assets/speakersbg.png";
import Container from "../../components/Container";
import SpeakerImage from "../../components/SpeakerImage";
import PanelistImage from "../../components/PanelistImage";

import speakerOne from "../../assets/speakerOne.png";
import speakerTwo from "../../assets/Roth, Scott.jpg";
import panelist1 from "../../assets/AmenMashariki.jpg";
import panelist2 from "../../assets/KennethKerr.png";
import panelist3 from "../../assets/Dacon.jpg";
import panelist4 from "../../assets/DeannaBailey.png";
import panelist5 from "../../assets/SharodJenkins_HS.jpeg";
import recruiter1 from "../../assets/Kayla.jpg";
import recruiter2 from "../../assets/Arielle Headshot.jpeg";
import recruiter3 from "../../assets/Rishi.jpg";
import recruiter4 from "../../assets/vinod.jpg";

const Speakers = () => {
  // OPTIMIZATION: Organized data structure
  const speakers = [
    { img: speakerOne, name: 'PROV. DR. HONGTAO YU' },
    { img: speakerTwo, name: 'SCOTT ROTH' },
  ];

  const panelists = [
    { img: panelist1, name: 'AMEN MASHARIKI' },
    { img: panelist2, name: 'KENNETH KERR' },
    { img: panelist3, name: 'DR. JAMELL DACON' },
    { img: panelist4, name: 'DR. DEANNA BAILEY' },
    { img: panelist5, name: 'SHAROD JENKINS' },
  ];

  const recruiters = [
    { img: recruiter1, name: 'KAYLA MCLAUGHLIN' },
    { img: recruiter2, name: 'ARIELLE WILLIAMS' },
    { img: recruiter3, name: 'RISHI CHOPRA' },
    { img: recruiter4, name: 'VINOD AKUNURI' },
  ];

  return (
    <div
      className='bg-cover bg-center bg-[#1e3d76] text-white py-20'
      style={{ backgroundImage: `url(${backgroundImage})` }}
      name='speakers'
    >
      <Container>
        {/* 2024 Speakers Section */}
        <p className="font-semibold text-2xl mb-8">2024 SPEAKER</p>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 pt-8">
          {speakers.map((speaker, index) => (
            <SpeakerImage 
              key={index}
              img={speaker.img} 
              name={speaker.name} 
            />
          ))}
        </div>

        {/* Innovators Insight Panel */}
        <div className="py-16">
          <div className="flex items-center gap-3 mb-8">
            <p className="font-semibold whitespace-nowrap">2024 INNOVATORS INSIGHT PANEL</p>
            <hr className="border-t border-white w-full" />
          </div>
          <div className="flex md:grid md:grid-cols-3 xl:grid-cols-4 gap-10 pt-8 overflow-x-scroll md:overflow-hidden">
            {panelists.map((panelist, index) => (
              <PanelistImage 
                key={index}
                img={panelist.img} 
                name={panelist.name}
              />
            ))}
          </div>
        </div>

        {/* Unlocking Opportunities Panel */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <p className="font-semibold whitespace-nowrap">2024 UNLOCKING OPPORTUNITIES PANEL</p>
            <hr className="border-t border-white w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 pt-8">
            {recruiters.map((recruiter, index) => (
              <SpeakerImage 
                key={index}
                img={recruiter.img} 
                name={recruiter.name} 
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Speakers;
