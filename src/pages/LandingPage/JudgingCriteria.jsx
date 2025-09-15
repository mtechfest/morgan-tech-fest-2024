import Container from "../../components/Container"
import { IoIosArrowForward } from "react-icons/io";

// Updated imports
import judgingImg from '../../assets/Jdg.png'; 
import judgepdf from '../../assets/Judging Criteria.pdf';

const JudgingCriteria = () => {
  return (
    <div className="bg-[#122644] py-20">
      <Container className="flex flex-col md:items-center gap-10 md:gap-3 lg:gap-10 md:flex-row justify-between text-white">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <p className="font-semibold text-3xl lg:text-5xl lg:leading-[60px]">
            View the Judging Criteria Here
          </p>
          <a
            href={judgepdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 md:mt-10 px-6 py-2 lg:py-3 bg-[#FC711B] rounded-3xl text-xs font-medium text-white inline-block"
          >
            <p className="flex items-center gap-2">
              <IoIosArrowForward />
              <span>Download now</span>
            </p>
          </a>
        </div>

        <div
          className="md:!w-[50%]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <img
            src={judgingImg}
            alt="Judging Criteria"
            className="w-full object-cover rounded-sm"
          />
        </div>
      </Container>
    </div>
  );
};

export default JudgingCriteria;
