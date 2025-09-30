import { IoIosArrowForward } from "react-icons/io"
import Container from "../../components/Container"
import submit from "../../assets/submit.png"
import judgingImg from '../../assets/Jdg-prj.png'
import judgepdf from '../../assets/Jdg-prj.pdf'

const ProjectSubmissionSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#122644] via-[#1a3354] to-[#0f1f38]">
      {/* ProjectX Platform Section */}
      <div className="py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FC711B]/15 to-[#ff8c42]/15 border border-[#FC711B]/30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
            
            <div className="text-white text-center p-8 lg:p-16 relative z-10">
              <div 
                data-aos='fade-down'
                data-aos-duration='1000'
              >
                <div className="inline-block px-5 py-2 bg-[#FC711B]/30 backdrop-blur-sm rounded-full text-sm font-bold text-[#ff8c42] mb-6">
                  ✨ Career Platform
                </div>
                <h2 className="font-bold text-4xl lg:text-6xl mb-4">
                  Morgan TechFest ProjectX
                </h2>
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#ff8c42] mb-8">
                  Where Projects Power Careers
                </h3>
              </div>
              
              <div 
                className="max-w-4xl mx-auto"
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-delay='200'
              >
                <p className="text-white/90 mb-6 text-lg lg:text-xl leading-relaxed">
                  Create and collaborate on real-world projects while earning <span className="font-semibold text-[#ff8c42]">TechTalent Badges</span> that showcase your skills. Our platform bridges academia and industry through hands-on, project-driven learning.
                </p>
                <p className="text-white/90 mb-10 text-lg lg:text-xl leading-relaxed">
                  Get personalized career guidance with our <span className="font-semibold text-[#ff8c42]">AI-powered Career Navigator</span>. Access curated resources, career tips, and interview prep to turn your projects into career opportunities.
                </p>
                
                <div className="bg-[#FC711B]/20 backdrop-blur-sm border border-[#FC711B]/40 rounded-2xl p-6 mb-8">
                  <p className="text-white/95 text-lg font-semibold">
                    💡 Projects created on ProjectX can be submitted and presented at our Innovation Expo!
                  </p>
                </div>
                
                <a 
                  href="https://careers.morgantechfest.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group px-10 py-5 bg-gradient-to-r from-[#FC711B] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#FC711B] rounded-full text-base font-bold text-white inline-flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-[#FC711B]/50 hover:scale-105"
                >
                  <span>Explore ProjectX Platform</span>
                  <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300 text-xl" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Submit & Judging Section - Two Column Grid */}
      <div className="py-16 lg:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Submit Your Project Card */}
            <div
              className="group"
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className="h-full bg-gradient-to-br from-[#FC711B]/10 to-[#ff8c42]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#FC711B]/30 hover:border-[#FC711B]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FC711B]/20">
                <div className="inline-block px-4 py-2 bg-[#FC711B]/30 backdrop-blur-sm rounded-full text-sm font-bold text-[#ff8c42] mb-6">
                  🚀 Innovation Expo
                </div>
                
                <h3 className="font-bold text-3xl lg:text-4xl text-white mb-4">
                  Submit Your Project
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed text-lg">
                  Ready to showcase your project at the Innovation Expo? Submit your work and compete with peers for recognition.
                </p>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Projects built on ProjectX or independently are welcome!
                </p>
                
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={submit} 
                    alt="submit project" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122644] via-transparent to-transparent"></div>
                </div>
                
                <a 
                  href={'https://form.jotform.com/233056575770057'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/btn px-8 py-4 bg-gradient-to-r from-[#FC711B] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#FC711B] rounded-full text-base font-bold text-white inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full justify-center"
                >
                  <span>Submit to Innovation Expo</span>
                  <IoIosArrowForward className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Judging Criteria Card */}
            <div
              className="group"
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='200'
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FC711B]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FC711B]/20">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-bold text-white/90 mb-6">
                  📋 Evaluation Guidelines
                </div>
                
                <h3 className="font-bold text-3xl lg:text-4xl text-white mb-4">
                  Judging Criteria
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  Review what our expert judges evaluate in project submissions. Understanding the criteria helps you prepare a stronger submission.
                </p>
                
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={judgingImg} 
                    alt="judging criteria" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122644] via-transparent to-transparent"></div>
                </div>
                
                <a 
                  href={judgepdf}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='group/btn px-8 py-4 bg-white/10 hover:bg-gradient-to-r hover:from-[#FC711B] hover:to-[#ff8c42] rounded-full text-base font-bold text-white inline-flex items-center gap-2 transition-all duration-300 border border-white/20 hover:border-transparent w-full justify-center'
                >
                  <span>View Judging Criteria</span>
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
