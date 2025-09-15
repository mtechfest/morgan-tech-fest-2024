import { useState, useEffect } from 'react';
import judgingImg from '../../assets/rob2.png';

// Container component
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
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
      <Container className="flex items-center min-h-screen pt-20 lg:pt-24 xl:pt-28 2xl:pt-32 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 relative z-10">
          {/* Left side - Robot Image */}
          <div className="lg:w-[50%] xl:w-[45%] 2xl:w-[40%] flex justify-center lg:justify-start">
            <div className="relative group">
              <img 
                src={judgingImg}
                alt="Robot" 
                className="w-[800px] h-[800px] lg:w-[900px] lg:h-[900px] xl:w-[1000px] xl:h-[1000px] 2xl:w-[1100px] 2xl:h-[1100px] object-contain transform transition-all duration-700 hover:scale-110 hover:rotate-6 filter drop-shadow-2xl"
              />
              {/* Glowing effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-blue-400/30 rounded-full blur-2xl transform scale-75 group-hover:scale-90 transition-transform duration-700 -z-10"></div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:w-[50%] xl:w-[55%] 2xl:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0">
            
            {/* Main heading with enhanced animations */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[90px] xl:text-[120px] 2xl:text-[140px] font-bold flex flex-col gap-0 leading-[60px] sm:leading-[70px] md:leading-[80px] lg:leading-[85px] xl:leading-[110px] 2xl:leading-[130px]">
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

            {/* Event details section */}
            <div className={`w-full flex flex-col lg:flex-row lg:justify-between lg:items-end pt-8 lg:pt-12 gap-8 lg:gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Left side - Event info */}
              <div className="flex flex-col gap-6 items-center lg:items-start">
                
                {/* Date and time */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-10 items-center text-lg sm:text-xl font-bold">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    <p className="hover:text-blue-400 transition-colors duration-300">
                      Date: November 18, 2025
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                    <p className="hover:text-cyan-400 transition-colors duration-300">
                      10AM - 6PM
                    </p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="text-center lg:text-left">
                  <p className="font-semibold text-lg md:text-xl lg:text-2xl leading-relaxed hover:text-blue-400 transition-colors duration-300">
                    Morgan State University<br/>
                    <span className="text-blue-200">Graves School of Business and Management</span>
                  </p>
                </div>
                
                {/* Registration button */}
                <div className="group">
                  <a 
                    href="https://form.jotform.com/233056575770057" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 py-3 px-8 border-2 border-white rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 group-hover:border-blue-400 relative overflow-hidden"
                    aria-label="Register for Morgan TechFest 2025"
                  >
                    <span className="relative z-10">Registration Form</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </a>
                </div>
              </div>

              {/* Right side - Social media */}
              <div className="flex items-center justify-center lg:justify-end gap-6">
                <div className="flex items-center gap-5 p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <a 
                    href="https://www.linkedin.com/company/morgan-techfest/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform hover:scale-125 hover:rotate-12 transition-all duration-300 hover:text-blue-400 group"
                    aria-label="Follow us on LinkedIn"
                  >
                    <LinkedInIcon size={20} className="cursor-pointer transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://www.instagram.com/morgantechfest?igsh=MTFkNm8yMXdxeHRseQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform hover:scale-125 hover:rotate-12 transition-all duration-300 hover:text-cyan-400 group"
                    aria-label="Follow us on Instagram"
                  >
                    <InstagramIcon size={20} className="cursor-pointer transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-10 left-10 hidden xl:block">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-1/3 right-10 hidden xl:block">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
