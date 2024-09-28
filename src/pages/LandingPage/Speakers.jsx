import backgroundImage from "../../assets/speakersbg.png";
import Container from "../../components/Container";
import SpeakerImage from "../../components/SpeakerImage";
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
// import panelist5 from "../../assets/IMG_6945.jpeg";
// import panelist6 from "../../assets/Jamaal.jpg";
// import panelist6 from "../../assets/SharodJenkins_HS.jpeg";
// import panelist7 from "../../assets/FKhalifa.jpg";
// import panelist8 from "../../assets/CHOUCHANE.jpeg";
// import panelist9 from "../../assets/Busari.jpeg";
// import panelist10 from "../../assets/Ajibola.png";
// import panelist11 from "../../assets/Sakk.png";
// import panelist12 from "../../assets/Timothy.jpeg";
// import panelist13 from "../../assets/Olaoluwa.jpeg";
// import panelist14 from "../../assets/panelist14.jpeg";
// import panelist15 from "../../assets/Zaveri.jpg";
// import recruiter1 from "../../assets/Julian.jpg";
// import recruiter2 from "../../assets/Hoggard.png";
// import recruiter3 from "../../assets/Taofeek.png";
import PanelistImage from "../../components/PanelistImage";

const Speakers = () => {
  return (
    <div
        className='bg-cover bg-center bg-[#1e3d76] text-white py-20'
        style={{ backgroundImage: `url(${backgroundImage})` }}
        name='speakers'
    >
        <Container>
            <p className="font-semibold">2024 SPEAKER</p>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 pt-8">
                <SpeakerImage img={speakerOne} name={'PROV. DR. HONGTAO YU'} />
                <SpeakerImage img={speakerTwo} name={'SCOTT ROTH'} />
            </div>
            <div className="py-16">
                <div className="flex items-center gap-3">
                    <p className="font-semibold whitespace-nowrap">2024 INNOVATORS INSIGHT PANEL</p>
                    <hr className="border-t border-white w-full" />
                </div>
                <div className="flex md:grid md:grid-cols-3 xl:grid-cols-4 gap-10 pt-8 overflow-x-scroll md:overflow-hidden ">
                    <PanelistImage img={panelist1} name={'AMEN MASHARIKI'}/>
                    <PanelistImage img={panelist2} name={'KENNETH KERR'} />
                    <PanelistImage img={panelist3} name={'DR. JAMELL DACON'}/>
                    <PanelistImage img={panelist4} name={'DR. DEANNA BAILEY'} />
                    <PanelistImage img={panelist5} name={'SHAROD JENKINS'} />
                    {/* <PanelistImage img={panelist7} name={'DR. FAHMI KHALIFA'} />
                    <PanelistImage img={panelist8} name={'DR. RADHOUANE CHOUCHANE'}/>
                    <PanelistImage img={panelist9} name={'DR. OLUWATOBI BUSARI'} />
                    <PanelistImage img={panelist10} name={'TEMITOPE AJIBOLA'} />
                    <PanelistImage img={panelist11} name={'DR. ERIC SAKK'}/>
                    <PanelistImage img={panelist12} name={'DR. TIMOTHY OLADUNNI'} />
                    <PanelistImage img={panelist13} name={'DR. ADEOYE O. OLAOLUWA'}/>
                    <PanelistImage img={panelist14} name={'DR. NAJA A. MACK'} />
                    <PanelistImage img={panelist15} name={'DR. JIGISH ZAVERI'} /> */}
                </div>
            </div>
            <div>
                <div className="flex items-center gap-3">
                    <p className="font-semibold whitespace-nowrap">2024 UNLOCKING OPPORTUNITIES PANEL</p>
                    <hr className="border-t border-white w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 pt-8">
                    <SpeakerImage img={recruiter1} name={'KAYLA MCLAUGHLIN'} />
                    <SpeakerImage img={recruiter2} name={'ARIELLE WILLIAMS'}  />
                    <SpeakerImage img={recruiter3} name={'RISHI CHOPRA'} />
                    <SpeakerImage img={recruiter4} name={'VINOD AKUNURI'} />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Speakers;
