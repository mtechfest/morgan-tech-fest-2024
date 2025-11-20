import { useState, useEffect } from 'react';

// Container component
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Simple play icon
const PlayIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  
  // OPTIMIZATION: Video ID and thumbnail
  const videoId = "MLX3J9nk0cI";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20" name='aboutUs'>
      
      {/* OPTIMIZATION: Reduced blur intensity and opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-2xl" />
      </div>

      <Container className="flex flex-col lg:flex-row lg:items-center gap-16 text-white relative z-10">
        
        {/* Left Content Section */}
        <div className={`lg:w-1/2 space-y-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Section Label */}
          <div className="inline-block">
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">About TechFest</span>
          </div>

          {/* Main Title */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                Who We Are
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
          </div>
          
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
              Morgan TechFest is a <span className="text-orange-300 font-medium">two-day in-person tech conference</span> that not only educates students about the influence of technology on their career paths, but also provides a platform for <span className="text-orange-300 font-medium">networking with tech experts</span>, enabling job applications in the tech industry.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              We pride ourselves on recognizing excellence by showcasing and awarding outstanding tech-innovative research presentations in fields like <span className="text-orange-300 font-medium">AI, Robotics, Cybersecurity, Data Science, VR, and Blockchain</span>. Moreover, we celebrate innovative projects in <span className="text-orange-300 font-medium">Software Development, Engineering, and Business & Education Technology</span>.
            </p>
          </div>
        </div>

        {/* Right Video Section */}
        <div className={`lg:w-1/2 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative group">
            
            {/* Video Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-800">
              
              <div className="relative aspect-video bg-slate-800">
                
                {/* OPTIMIZATION: Load thumbnail first, iframe only on click */}
                {!loadVideo ? (
                  /* Thumbnail with play button - loads instantly, no YouTube scripts */
                  <div 
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setLoadVideo(true)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && setLoadVideo(true)}
                    aria-label="Play Morgan TechFest video"
                  >
                    <img 
                      src={thumbnailUrl}
                      alt="Morgan TechFest 2025 Video Thumbnail"
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300 rounded-2xl">
                      <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <PlayIcon size={32} className="text-slate-800 ml-1" />
                      </div>
                    </div>
                    
                    {/* Video Title on thumbnail */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-b-2xl">
                      <h3 className="text-white font-medium text-lg">Morgan TechFest 2025</h3>
                      <p className="text-gray-300 text-sm mt-1">Bridging Academia & Industry</p>
                      <p className="text-gray-400 text-xs mt-2">▶ Click to play video</p>
                    </div>
                  </div>
                ) : (
                  /* Actual iframe - only loads after user clicks */
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="Morgan TechFest Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
