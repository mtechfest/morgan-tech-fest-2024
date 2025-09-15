import { useState, useEffect } from 'react';
import Container from "../../components/Container";
import { IoIosArrowForward } from "react-icons/io";

// Custom icons for news/media
const NewsIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
  </svg>
);

const MediaIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const NewsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="news" className="bg-gradient-to-br from-[#122644] via-[#1a3154] to-[#0f1c33] py-20 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-l from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-orange-500/5 to-red-400/5 rounded-full blur-xl animate-pulse"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-12 text-white">
          
          {/* Header with icon and badge */}
          <div className={`flex flex-col items-center gap-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* News badge */}
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-yellow-400/20 backdrop-blur-sm rounded-full border border-orange-400/30">
              <NewsIcon size={20} className="text-orange-400" />
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-300">Latest News & Recognition</span>
            </div>

            {/* Year badge */}
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">2024 Highlights</span>
            </div>
          </div>

          {/* Main content card */}
          <div className={`max-w-5xl w-full transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-12 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group">
              
              {/* Award icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MediaIcon size={32} className="text-white" />
                </div>
              </div>

              {/* Main heading */}
              <div className="text-center mb-8">
                <h2 className="font-bold text-3xl lg:text-5xl xl:text-6xl lg:leading-[60px] xl:leading-[70px] mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-orange-200 inline-block text-transparent bg-clip-text">
                    Recognizing Excellence at
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text">
                    Morgan TechFest 2024
                  </span>
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
              </div>

              {/* Subtitle */}
              <p className="text-center text-xl lg:text-2xl font-medium text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                A Celebration of <span className="text-orange-400 font-semibold">Collaboration</span> and <span className="text-orange-400 font-semibold">Innovation</span>
              </p>

              {/* Description */}
              <p className="text-center text-base lg:text-lg text-blue-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                With features in publications like <span className="font-semibold text-white">Baltimore News</span> and <span className="font-semibold text-white">Technical.ly</span>, the event's impact and growing influence continue to inspire.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-400 font-bold text-lg">📰</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-100">Media Coverage</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-400 font-bold text-lg">🤝</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-100">Industry Recognition</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-400 font-bold text-lg">🚀</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-100">Growing Impact</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <a
                  href="https://medium.com/@morgantechfest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-full text-white font-semibold text-base lg:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Read Our Story</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className={`flex items-center gap-4 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsPage;
