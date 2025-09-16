import { useState, useEffect } from 'react';
import judgingImg from '../../assets/rob2.png';

// Container component
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Custom SVG icons
const LinkedInIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      <Container className="flex items-center min-h-screen py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-l from-blue-500/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 relative z-10">
          {/* Left side - Robot Image */}
          <div className="w-full lg:w-[45%] xl:w-[40%] 2xl:w-[35%] flex justify-center lg:justify-start order-1 lg:order-none">
            <div className="relative group">
              <img 
                src={judgingImg}
                alt="Robot" 
                className="w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] object-contain animate-spin filter drop-shadow-2xl max-w-full"
                style={{ animationDuration: '8s' }}
              />
              {/* Glowing effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-blue-400/30 rounded-full blur-2xl transform scale-75 group-hover:scale-90 transition-transform duration-700 -z-10"></div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="w-full lg:w-[55%] xl:w-[60%] 2xl:w-[65%] flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-none">
            
            {/* Main heading with enhanced animations */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold flex flex-col gap-0 leading-tight">
                <span className="hover:scale-105 hover:rotate-3 transition-transform duration-300 cursor-default inline-block">
                  Discover
                </span>
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text hover:scale-105 hover:rotate-2 transition-transform duration-300 cursor-default">
                  Network
                </span>
                <span className="hover:scale-105 hover:-rotate-2 transition-transform duration-300 cursor-default inline-block">
                  Innovate
                </span>
              </h1>
            </div>

            {/* Theme 2025 */}
            <div className={`mt-3 sm:mt-4 lg:mt-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-blue-200 hover:text-white transition-colors duration-300 px-2 sm:px-0">
                Revolutionizing Tech from Ideas to Impact
              </p>
            </div>

            {/* Event details section */}
            <div className={`w-full flex flex-col lg:flex-row lg:justify-between lg:items-end pt-4 sm:pt-6 lg:pt-8 gap-4 sm:gap-6 lg:gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Left side - Event info */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 items-center lg:items-start">
                
                {/* Date and time */}
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 items-center text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse flex-shrink-0"></span>
                    <p className="hover:text-blue-400 transition-colors duration-300 whitespace-nowrap">
                      Date: November 15, 2025
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse flex-shrink-0"></span>
                    <p className="hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
                      10AM - 6PM
                    </p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="text-center lg:text-left px-2 sm:px-0">
                  <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed hover:text-blue-400 transition-colors duration-300">
                    Morgan State University<br/>
                    <span className="text-blue-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Graves School of Business and Management</span>
                  </p>
                </div>
                
                {/* Registration button */}
                <div className="group">
                  <a 
                    href="https://form.jotform.com/233056575770057" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 sm:gap-3 py-2 sm:py-3 px-4 sm:px-6 md:px-8 border-2 border-white rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 group-hover:border-blue-400 relative overflow-hidden"
                    aria-label="Register for Morgan TechFest 2025"
                  >
                    <span className="relative z-10">Registration Form</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </a>
                </div>
              </div>

              {/* Right side - Social media */}
              <div className="flex items-center justify-center lg:justify-end gap-4 sm:gap-6 order-first lg:order-none">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <a 
                    href="https://www.linkedin.com/company/morgan-techfest/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform hover:scale-125 hover:rotate-12 transition-all duration-300 hover:text-blue-400 group"
                    aria-label="Follow us on LinkedIn"
                  >
                    <LinkedInIcon size={16} className="cursor-pointer transition-colors duration-300 sm:w-5 sm:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/morgantechfest?igsh=MTFkNm8yMXdxeHRseQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform hover:scale-125 hover:rotate-12 transition-all duration-300 hover:text-cyan-400 group"
                    aria-label="Follow us on Instagram"
                  >
                    <InstagramIcon size={16} className="cursor-pointer transition-colors duration-300 sm:w-5 sm:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements - hidden on smaller screens */}
        <div className="absolute bottom-10 left-10 hidden lg:block xl:block">
          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-orange-400 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-1/3 right-10 hidden lg:block xl:block">
          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-orange-500 rounded-full animate-bounce"></div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
