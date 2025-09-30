import Container from "../../components/Container"
import ImageSlider from "../../components/ImageSlider"

// Import all images at once using require.context or create a barrel export
import s1 from "../../assets/s1.png"
import s2 from "../../assets/s2.png"
import s3 from "../../assets/s3.png"
import s4 from "../../assets/s4.png"
import s5 from "../../assets/s5.png"
import s6 from "../../assets/s6.png"
import s7 from "../../assets/s7.png"
import s8 from "../../assets/s8.png"
import s9 from "../../assets/s9.png"
import s10 from "../../assets/s10.png"
import s11 from "../../assets/s11.png"
import detailsImage from "../../assets/Jdg-Rsc.png"
import projectCriteria from "../../assets/Jdg-prj.pdf"
import posterFormat from "../../assets/MorganTechFest-InnovationXpo-Format.pptx.pdf"

// Configuration constants
const EXPO_CONFIG = {
  title: "INNOVATION EXPO",
  projectCriteriaUrl: projectCriteria,
  researchCriteriaUrl: detailsImage,
  posterFormatUrl: posterFormat,
  registrationUrl: "https://form.jotform.com/233056575770057",
  images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11]
}

// Animation configuration
const ANIMATIONS = {
  fadeDown: {
    'data-aos': 'fade-down',
    'data-aos-easing': 'linear',
    'data-aos-duration': '800'
  }
}

const ActionButton = ({ href, variant = 'primary', children, ...props }) => {
  const baseClasses = "px-8 py-2 rounded-3xl text-xs font-semibold whitespace-nowrap transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    primary: "bg-[#FC711B] text-white border border-[#FC711B] hover:bg-[#e5640f] focus:ring-[#FC711B]",
    secondary: "border border-white text-white hover:bg-white hover:text-[#122644] focus:ring-white"
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} inline-block`}
      {...props}
    >
      {children}
    </a>
  )
}

const CategoryCard = ({ title, icon, description }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-[#FC711B]/50 transition-all duration-300">
    <div className="flex items-start gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <h3 className="font-bold text-lg text-[#FC711B] mb-2">{title}</h3>
        <p className="text-sm text-white/80 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
)

const ExpoContent = () => (
  <div className="space-y-6">
    <div className="text-sm leading-relaxed space-y-3">
      <p className="text-base">
        <strong>Calling All Innovators!</strong>
      </p>
      <p>
        Ready to revolutionize the tech world? Showcase your brilliance at our Innovation Expo! 
        We have two exciting categories for you to participate in:
      </p>
    </div>

    <div className="grid gap-4">
      <CategoryCard 
        icon="💻"
        title="Projects"
        description="Showcase your technical projects, applications, and innovative solutions. Demonstrate your coding skills and problem-solving abilities."
      />
      <CategoryCard 
        icon="🔬"
        title="Research"
        description="Present your groundbreaking research findings, academic work, and experimental studies that push the boundaries of knowledge."
      />
    </div>

    <div className="bg-[#FC711B]/10 border border-[#FC711B]/30 rounded-lg p-4">
      <p className="text-sm text-white/90">
        <strong>Note:</strong> Both projects and research will be presented in poster format. Download the poster template below to get started!
      </p>
    </div>

    <p className="text-sm text-white/90">
      Cash prizes and recognition await! Fill out the interest form below to participate.
    </p>
  </div>
)

const InnovationExpo = () => {
  return (
    <section 
      className="w-full bg-[#122644] py-24" 
      id="innovation-expo"
      aria-labelledby="expo-title"
    >
      <Container className="flex flex-col lg:flex-row lg:items-center gap-10 text-white">
        {/* Content Section */}
        <div className="flex-1" {...ANIMATIONS.fadeDown}>
          <h2 
            id="expo-title"
            className="font-bold text-2xl xl:text-4xl pb-8 text-[#FC711B]"
          >
            {EXPO_CONFIG.title}
          </h2>
          
          <ExpoContent />
          
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mt-8 flex-wrap">
            <ActionButton 
              href={EXPO_CONFIG.projectCriteriaUrl}
              variant="primary"
              aria-label="View Project Judging Criteria"
            >
              Project Judging Criteria
            </ActionButton>
            
            <ActionButton 
              href={EXPO_CONFIG.researchCriteriaUrl}
              variant="primary"
              aria-label="View Research Judging Criteria"
            >
              Research Judging Criteria
            </ActionButton>
            
            <ActionButton 
              href={EXPO_CONFIG.posterFormatUrl}
              variant="primary"
              aria-label="Download Poster Format Template"
            >
              Download Poster Format
            </ActionButton>
            
            <ActionButton 
              href={EXPO_CONFIG.registrationUrl}
              variant="secondary"
              aria-label="Register for the Innovation Expo"
            >
              Registration Form
            </ActionButton>
          </div>
        </div>

        {/* Image Slider Section */}
        <div 
          className="flex-1 lg:min-w-[50%]"
          aria-label="Innovation Expo image gallery"
        >
          <ImageSlider 
            images={EXPO_CONFIG.images} 
            alt="Innovation Expo showcase images"
          />
        </div>
      </Container>
    </section>
  )
}

export default InnovationExpo
