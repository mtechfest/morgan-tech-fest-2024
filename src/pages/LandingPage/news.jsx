import Container from "../../components/Container";
import newsImage from "../../assets/mgtf.jpg";
import { IoIosArrowForward } from "react-icons/io";

const NewsPage = () => {
  return (
    <div id="news" className="bg-[#122644] py-20">
      <Container className="flex flex-col md:items-center gap-10 md:gap-3 lg:gap-10 md:flex-row justify-between text-white">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <p className="font-semibold text-3xl lg:text-5xl lg:leading-[60px]">
            Recognizing Excellence at Morgan TechFest 2024: A Celebration of Collaboration and Innovation
          </p>
          <p className="mt-4 text-base lg:text-lg">
            With features in publications like Baltimore News and Technical.ly, the event's impact and growing influence continue to inspire.
          </p>
          <a
            href="https://medium.com/@morgantechfest"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 md:mt-10 px-6 py-2 lg:py-3 bg-[#FC711B] rounded-3xl text-xs font-medium text-white inline-block"
          >
            <span className="flex items-center gap-2">
              <IoIosArrowForward />
              <span>Read more</span>
            </span>
          </a>
        </div>
        <div
          className="md:!w-[50%]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <img src={newsImage} alt="News" className="w-full object-cover rounded-sm" />
        </div>
      </Container>
    </div>
  );
};

export default NewsPage;
