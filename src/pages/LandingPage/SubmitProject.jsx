import { IoIosArrowForward } from "react-icons/io"
import Container from "../../components/Container"
import submit from "../../assets/submit.png"
import judgingImg from '../../assets/JudgingCriteria.jpg'
import judgepdf from '../../assets/Judging Criteria.pdf' // ✅ Correct PDF import

const ProjectSubmissionSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#122644] to-[#1a3354]">
      {/* Submit Project Section */}
      <div className="py-16 lg:py-20">
        <Container className={'flex flex-col lg:items-center gap-8 lg:gap-12 lg:flex-row justify-between text-white'}>
          <div 
            className="lg:w-[48%] order-2 lg:order-1"
            data-aos='fade-right'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='1000'
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10">
              <h2 className="font-bold text-3xl lg:text-5xl lg:leading-[60px] mb-6">
                Submit Your Project Here!
              </h2>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                Ready to showcase your innovative project? Submit it now and join the competition to make your mark in the tech world.
              </p>
              <a 
                href={'https://form.jotform.com/233056575770057'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='group px-8 py-4 bg-gradient-to-r from-[#FC711B] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#FC711B] rounded-full text-sm font-semibold text-white inline-flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
              >
                <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>Submit Now</span>
              </a>
            </div>
          </div>
          
          <div 
            className="lg:w-[48%] order-1 lg:order-2"
            data-aos='fade-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='1000'
            data-aos-delay='200'
          >
            <div className="relative group">
              <img 
                src={submit} 
                alt="submit" 
                className="w-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </Container>
      </div>

      {/* Separator */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-px"></div>
      </div>

      {/* Judging Criteria Section */}
      <div className="py-16 lg:py-20 bg-gradient-to-br from-[#1a3354] to-[#122644]">
        <Container className={'flex flex-col lg:items-center gap-8 lg:gap-12 lg:flex-row justify-between text-white'}>
          <div 
            className="lg:w-[48%]"
            data-aos='fade-right'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='1000'
            data-aos-delay='100'
          >
            <div className="relative group">
              <img 
                src={judgingImg} 
                alt="judging criteria" 
                className="w-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div
            className="lg:w-[48%]"
            data-aos='fade-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10">
              <h2 className="font-bold text-3xl lg:text-5xl lg:leading-[60px] mb-6">
                View the Judging Criteria
              </h2>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                Understand what our expert judges are looking for. Click below to view the full judging criteria document.
              </p>
              <a 
                href={judgepdf}  // ✅ Correct PDF link
                target="_blank" 
                rel="noopener noreferrer" 
                className='group px-8 py-4 bg-gradient-to-r from-[#FC711B] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#FC711B] rounded-full text-sm font-semibold text-white inline-flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
              >
                <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>Click for More Details</span> {/* ✅ Updated button text */}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ProjectSubmissionSection
