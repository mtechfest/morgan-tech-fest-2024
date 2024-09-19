import Container from "../../components/Container"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <Container className="flex items-center pt-40 lg:pt-28 xl:pt-32 2xl:pt-40 text-white">
      <div className="w-[0%] md:w-[27%] xl:w-[35%] 2xl:w-[48%] flex-1"></div>
      <div className="md:w-[73%] xl:w-[65%] 2xl:w-[52%] items-start pl-7">
        <div className=" text-7xl md:text-[90px] xl:text-[130px] font-bold  flex flex-col gap-0 leading-[75px] xl:leading-[110px]">
          <p>Discover</p>
          <p className="bg-gradient-to-b from-[#FC711B] via-[#FC711B] to-[#FBFF4B] inline-block text-transparent bg-clip-text">Network</p> <p>Innovate</p>
        </div>
        <div className="flex justify-between items-end pt-12">
          <div className="flex flex-col gap-6">
            <div className="flex gap-10 items-center text-xl font-bold">
              <p>SAT SEP 28, 2024</p>
              <p>9AM - 6PM</p>
            </div>
            <p className="font-semibold text-lg md:text-2xl">Morgan State University | Student Center<br/>Calvin & Tina Tyler Ballroom</p>
            <p className="!inline-block"><a href={'https://form.jotform.com/240678505118054'} target="_blank" rel="noopener noreferrer" className='py-2 px-7 border border-white rounded-3xl text-xs'>REGISTER</a></p>
          </div>
          <div className="flex items-center gap-4">
            {/* <FaFacebookF className="cursor-pointer hover:text-[#FC711B]" size={18} />
            <FaXTwitter className="cursor-pointer hover:text-[#FC711B]" size={18} /> */}
            <a href="https://www.linkedin.com/company/morgan-techfest/" target="_blank"><FaLinkedinIn className="cursor-pointer hover:text-[#FC711B]" size={18} /></a>
            <a href="https://www.instagram.com/morgantechfest?igsh=MTFkNm8yMXdxeHRseQ==" target="_blank"><RiInstagramFill className="cursor-pointer hover:text-[#FC711B]" size={18} /></a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero