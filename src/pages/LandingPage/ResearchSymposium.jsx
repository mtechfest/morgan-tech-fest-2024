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
import detailsImage from "../../assets/Jdg-Rsc.png"  // ADD THIS LINE

// Configuration constants
const EXPO_CONFIG = {
  title: "INNOVATION EXPO",
  detailsUrl: detailsImage,
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

const ExpoContent = () => (
  <div className="text-sm leading-relaxed space-y-4">
    <p>
      <strong>Calling All Innovators!</strong>
    </p>
    <p>
      Are you ready to revolutionize the tech world? It's time to turn your ideas into reality 
      and showcase your brilliance at our Innovation Expo!
    </p>
    <p>
      Whether you're passionate about coding, engineering, or conducting groundbreaking research, 
      this is your chance to shine. Start building your projects, conducting research, and 
      preparing to blow minds!
    </p>
    <p>
      We are excited to see your work and celebrate you! Cash and prizes to be won.
    </p>
    <p>
      If you are interested, let us know by filling out the interest form below.
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
          
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mt-8">
            <ActionButton 
              href={EXPO_CONFIG.detailsUrl}
              variant="primary"
              aria-label="View detailed information about the Innovation Expo"
            >
              Click for More Details
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
