import { useState } from 'react';
import TeamMember from '../../components/TeamMember';
import Container from '../../components/Container';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const TeamSection = ({ teamData }) => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex(startIndex => Math.max(0, startIndex - 4));
  };

  const nextSlide = () => {
    setStartIndex(startIndex => Math.min(teamData.length - 4, startIndex + 4));
  };

  return (
    <div className="py-16 bg-[#F1ECF1]">
        <Container>      
        <h2 className="text-[#FC711B] text-4xl font-medium text-center pb-12">Meet The Team</h2>
        <div className="relative">
          {startIndex > 0 && (
            <button className="prev absolute top-1/2 left-0 transform -translate-y-1/2" onClick={prevSlide}><IoIosArrowBack size={22} /></button>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-5 md:mx-8 lg:px-0">
            {teamData?.slice(startIndex, startIndex + 4).map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
          {startIndex + 4 < teamData.length && (
            <button className="next absolute top-1/2 right-0 transform -translate-y-1/2" onClick={nextSlide}><IoIosArrowForward size={22} /></button>
          )}
        </div>
        </Container>
    </div>
  );
};

export default TeamSection;
