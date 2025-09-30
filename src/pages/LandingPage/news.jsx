import { useState, useEffect } from 'react';
import Container from "../../components/Container";
import { IoIosArrowForward } from "react-icons/io";

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
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-10 text-white">
          
          {/* Content card */}
          <div className={`max-w-4xl w-full transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-12 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
              
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-400/20 backdrop-blur-sm rounded-full border border-orange-400/30">
                  <span className="text-orange-400 text-xl">🏆</span>
                  <span className="text-sm font-semibold text-orange-300">Latest News</span>
                </div>
              </div>

              {/* Main heading */}
              <div className="text-center mb-6">
                <h2 className="font-bold text-3xl lg:text-5xl mb-4">
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text">
                    Recognizing Excellence at Morgan TechFest 2024
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-center text-lg text-blue-200 mb-8 leading-relaxed">
                A celebration of collaboration and innovation. Featured in <span className="font-semibold text-white">Baltimore News</span> and <span className="font-semibold text-white">Technical.ly</span>.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <p className="text-2xl font-bold text-orange-400 mb-1">📰</p>
                  <p className="text-xs text-blue-200">Media Coverage</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <p className="text-2xl font-bold text-orange-400 mb-1">🤝</p>
                  <p className="text-xs text-blue-200">Industry Recognition</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <p className="text-2xl font-bold text-orange-400 mb-1">🚀</p>
                  <p className="text-xs text-blue-200">Growing Impact</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <a
                  href="https://medium.com/@morgantechfest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-full text-white font-semibold text-base flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
                >
                  <span>Read Our Story</span>
                  <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsPage;
