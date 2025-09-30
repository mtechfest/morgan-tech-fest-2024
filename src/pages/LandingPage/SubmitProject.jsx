import { IoIosArrowForward } from "react-icons/io"
import Container from "../../components/Container"
import submit from "../../assets/submit.png"
import judgingImg from '../../assets/Jdg-prj.png'
import judgepdf from '../../assets/Jdg-prj.pdf'

const ProjectSubmissionSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#122644] via-[#1a3354] to-[#0f1f38]">
      {/* Hero Submit Project Section */}
      <div className="py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FC711B]/20 to-[#ff8c42]/20 border border-[#FC711B]/30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12 relative z-10">
              <div 
                className="lg:w-[55%] text-white"
                data-aos='fade-right'
                data-aos-duration='1000'
              >
                <div className="inline-block px-4 py-2 bg-[#FC711B]/30 backdrop-blur-sm rounded-full text-sm font-semibold text-[#ff8c42] mb-6">
                  🚀 Competition Open
                </div>
                <h2 className="font-bold text-4xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Submit Your Project Here!
                </h2>
                <p className="text-white/90 mb-8 text-lg lg:text-xl leading-relaxed">
                  Ready to showcase your innovative project? Submit it now and join the competition to make your mark in the tech world.
                </p>
                <a 
                  href={'https://form.jotform.com/233056575770057'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='group px-10 py-5 bg-gradient-to-r from-[#FC711B] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#FC711B] rounded-full text-base font-bold text-white inline-flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-[#FC711B]/50 hover:scale-105'
                >
                  <span>Submit Now</span>
                  <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300 text-xl" />
                </a>
              </div>
              
              <div 
                className="lg:w-[45%]"
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-delay='200'
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FC711B] to-[#ff8c42] rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={submit} 
                    alt="submit" 
                    className="relative w-full object-cover rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Two Column Grid Section */}
      <div className="py-16 lg:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Judging Criteria Card */}
            <div
              className="group"
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FC711B]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FC711B]/20">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={judgingImg} 
                    alt="judging criteria" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122644] via-transparent to-transparent"></div>
                </div>
                
                <h3 className="font-bold text-2xl lg:text-3xl text-white mb-4">
                  Judging Criteria
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Understand what our expert judges are looking for. View the comprehensive evaluation framework.
                </p>
                <a 
                  href={judgepdf}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='group/btn px-6 py-3 bg-white/10 hover:bg-gradient-to-r hover:from-[#FC711B] hover:to-[#ff8c42] rounded-full text-sm font-semibold text-white inline-flex items-center gap-2 transition-all duration-300 border border-white/20 hover:border-transparent'
                >
                  <span>View Details</span>
                  <IoIosArrowForward className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* ProjectX Card */}
            <div
              className="group"
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='200'
            >
              <div className="h-full bg-gradient-to-br from-[#FC711B]/10 to-[#ff8c42]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#FC711B]/30 hover:border-[#FC711B]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FC711B]/20">
                <div className="inline-block px-4 py-2 bg-[#FC711B]/20 rounded-full text-sm font-bold text-[#ff8c42] mb-4">
                  ✨ Career Platform
                </div>
                
                <h3 className="font-bold text-2xl lg:text-3xl text-white mb-3">
                  Morgan TechFest ProjectX
                </h3>
                <h4 className="text-lg font-semibold text-[#ff8c42] mb-4">
                  Where Projects Power Careers
                </h4>
                <p className="text-white/80 mb-4 leading-relaxed">
                  ProjectX bridges academia and industry through real-world, project-driven learning. Earn TechTalent Badges that showcase your skills.
                </p>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Our AI-powered Career Navigator provides personalized insights, resources, and interview prep—turning projects into career pathways.
                </p>
                <a 
                  href="https://careers.morgantechfest.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/btn px-6 py-3 bg-gradient-to-r from-[#FC711B] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#FC711B] rounded-full text-sm font-semibold text-white inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Join ProjectX</span>
                  <IoIosArrowForward className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ProjectSubmissionSection
