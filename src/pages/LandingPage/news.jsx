import Container from "../../components/Container";
import newsImage from "../../assets/IMG_4679.png";
import { IoIosArrowForward } from "react-icons/io";

const NewsPage = () => {
  return (
    <div className="bg-[#122644] py-20">
      <Container className={'flex flex-col md:items-center gap-10 md:gap-3 lg:gap-10 md:flex-row justify-between text-white'}>
        <div
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='800'
        >
          <p className="font-semibold text-3xl lg:text-5xl lg:leading-[60px]">Opeyemi Adeniran Honored at TechFest 2024</p>
          <p className="mt-4 text-base lg:text-lg">
           Opeyemi Adeniran dedicates the Founder Initiative Award, received at Morgan TechFest 2024, to God.
            She also acknowledges the efforts of the dedicated departments and the 2022 and 2023 teams for their unwavering belief in the vision. 
          </p>
          <p className="mt-4 text-sm lg:text-base">
            Reflecting on the journey since its inception on October 18, 2022, Opeyemi celebrated the remarkable milestones achieved through collective commitment and divine inspiration.
          </p>
          <a href="https://drive.google.com/file/d/1m8LCXu8q_AWQfmJGe353EyO_6r1ihc-3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='mt-5 md:mt-10 px-6 py-2 lg:py-3 bg-[#FC711B] rounded-3xl text-xs font-medium text-white inline-block'>
            <p className="flex items-center gap-2">
              <IoIosArrowForward />
              <span>Learn More</span>
            </p>
          </a>
        </div>
        <div 
          className="md:!w-[50%]"
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='800'
        >
          <img src={newsImage} alt="News" className="w-full object-cover rounded-sm"/>
        </div>
      </Container>
    </div>
  );
};

export default NewsPage;
