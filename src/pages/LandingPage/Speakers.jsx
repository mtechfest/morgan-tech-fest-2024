import backgroundImage from "../../assets/speakersbg.png";
import Container from "../../components/Container";
import SpeakerImage from "../../components/SpeakerImage";
import speakerOne from "../../assets/speakerOne.png";
import speakerTwo from "../../assets/speakerTwo.png";
import panelist1 from "../../assets/Oludare.jpeg";
import panelist3 from "../../assets/Dacon.jpg";
import panelist2 from "../../assets/Waters.jpg";
import panelist4 from "../../assets/Ariyibi.jpeg";
import panelist5 from "../../assets/George.jpeg";
import panelist6 from "../../assets/Ojeme.jpeg";
import panelist7 from "../../assets/FKhalifa.jpg";
import panelist8 from "../../assets/CHOUCHANE.jpeg";
import panelist9 from "../../assets/Busari.jpeg";
import panelist10 from "../../assets/Ajibola.png";
import panelist11 from "../../assets/Sakk.png";
import panelist12 from "../../assets/Timothy.jpeg";
import panelist13 from "../../assets/Olaoluwa.jpeg";
import panelist14 from "../../assets/panelist14.jpeg";
import panelist15 from "../../assets/Zaveri.jpg";
import recruiter1 from "../../assets/Julian.jpg";
import recruiter2 from "../../assets/Hoggard.png";
import recruiter3 from "../../assets/Taofeek.png";

const Speakers = () => {
  return (
    <div
        className='bg-cover bg-center bg-[#1e3d76] text-white py-20'
        style={{ backgroundImage: `url(${backgroundImage})` }}
        name='speakers'
    >
        <Container>
            <p className="font-semibold">2023 SPEAKERS</p>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 pt-8">
                <SpeakerImage img={speakerOne} name={'PROV. DR. HONGTAO YU'} />
                <SpeakerImage img={speakerTwo} name={'PATRICE BARNES'} />
            </div>
            <div className="py-16">
                <div className="flex items-center gap-3">
                    <p className="font-semibold whitespace-nowrap">2023 PANELIST / JUDGES</p>
                    <hr className="border-t border-white w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 pt-8">
                    <SpeakerImage img={panelist1} name={'DR. OLUDARE OWOLABI'}/>
                    <SpeakerImage img={panelist2} name={'GABRIELLA WATERS'} />
                    <SpeakerImage img={panelist3} name={'DR. JAMELL DACON'}/>
                    <SpeakerImage img={panelist4} name={'DR. ADEDAYO ARIYBI'} />
                    <SpeakerImage img={panelist5} name={'DR. GEORGE MICHENI'} />
                    <SpeakerImage img={panelist6} name={'DR. BLESSING OJEME'}/>
                    <SpeakerImage img={panelist7} name={'DR. FAHMI KHALIFA'} />
                    <SpeakerImage img={panelist8} name={'DR. RADHOUANE CHOUCHANE'}/>
                    <SpeakerImage img={panelist9} name={'DR. OLUWATOBI BUSARI'} />
                    <SpeakerImage img={panelist10} name={'TEMITOPE AJIBOLA'} />
                    <SpeakerImage img={panelist11} name={'DR. ERIC SAKK'}/>
                    <SpeakerImage img={panelist12} name={'DR. TIMOTHY OLADUNNI'} />
                    <SpeakerImage img={panelist13} name={'DR. ADEOYE O. OLAOLUWA'}/>
                    <SpeakerImage img={panelist14} name={'DR. NAJA A. MACK'} />
                    <SpeakerImage img={panelist15} name={'DR. JIGISH ZAVERI'} />
                </div>
            </div>
            <div>
                <div className="flex items-center gap-3">
                    <p className="font-semibold whitespace-nowrap">2023 RECRUITER&apos;S PANEL</p>
                    <hr className="border-t border-white w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 pt-8">
                    <SpeakerImage img={recruiter1} name={'GWEN ST. JULIAN'} />
                    <SpeakerImage img={recruiter2} name={'DR. MICHAEL HOGGARD'}  />
                    <SpeakerImage img={recruiter3} name={'TAOFEEK OBAFEMI'} />
                    <SpeakerImage img={speakerTwo} name={'PATRICE BARNES'}  />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Speakers