import { IoIosArrowForward } from "react-icons/io"
import Container from "../../components/Container"
import submit from "../../assets/submit.png"

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-[#FC711B]/40 transition-all duration-300">
    <div className="flex items-start gap-3">
      <span className="text-3xl">{icon}</span>
      <div>
        <h4 className="font-bold text-lg text-white mb-2">{title}</h4>
        <p className="text-sm text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
)

const ProjectXSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#122644] via-[#1a3354] to-[#0f1f38]" name='projectx'>
      {/* Main ProjectX Section */}
      <div className="py-20 lg:py-28">
        <Container className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 text-white">
          {/* Content Side */}
          <div 
            className="lg:w-[50%]"
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <div className="inline-block px-5 py-2 bg-[#FC711B]/30 backdrop-blur-sm rounded-full text-sm font-bold text-[#ff8c42] mb-6">
              ✨ Career Platform
            </div>
            
            <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl mb-4">
              Morgan TechFest ProjectX
            </h2>
            
            <h3 className="text-2xl lg:text-3xl font-semibold text-[#ff8c42] mb-6">
              Where Projects Power Careers
            </h3>
            
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Create and collaborate on real-world projects while earning <span className="font-semibold text-[#ff8c42]">TechTalent Badges</span> that showcase your skills. Our platform bridges academia and industry through hands-on, project-driven learning.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4 mb-8">
              <FeatureCard 
                icon="🎯"
                title="Project-Driven Learning"
                description="Build real-world projects and collaborate with peers to gain hands-on experience."
              />
              <FeatureCard 
                icon="🤖"
                title="AI Career Navigator"
                description="Get personalized career guidance, curated resources, and interview prep tailored to your goals."
              />
              <FeatureCard 
                icon="🏆"
                title="TechTalent Badges"
                description="Earn verified badges that showcase your skills and achievements to potential employers."
              />
            </div>

            <div className="bg-[#FC711B]/20 backdrop-blur-sm border border-[#FC711B]/40 rounded-xl p-5 mb-8">
              <p className="text-white/95 text-base font-semibold">
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

          {/* Image Side */}
          <div 
            className="lg:w-[50%]"
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='200'
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FC711B] to-[#ff8c42] rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <img 
                  src={submit} 
                  alt="ProjectX Platform Dashboard" 
                  className="w-full object-cover rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#FC711B] to-[#ff8c42] rounded-2xl p-4 shadow-2xl">
                <p className="text-white font-bold text-2xl">1000+</p>
                <p className="text-white/90 text-sm">Active Projects</p>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
                <p className="text-white font-bold text-2xl">500+</p>
                <p className="text-white/90 text-sm">Students Enrolled</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ProjectXSection
