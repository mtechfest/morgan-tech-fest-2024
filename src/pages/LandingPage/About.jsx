import { useState } from 'react';

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

const StatCard = ({ number, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
    <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">{number}</div>
    <div className="text-sm text-gray-300">{label}</div>
  </div>
);

const FeatureItem = ({ text }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
    <p className="text-gray-300 leading-relaxed">{text}</p>
  </div>
);

const About = () => {
  const [loadVideo, setLoadVideo] = useState(false);
  
  const videoId = "MLX3J9nk0cI";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 relative overflow-hidden" name="aboutUs">

      {/* Background effects - CSS only, no JS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 text-white mb-16">

          {/* Left Content Section */}
          <div className="lg:w-1/2 space-y-8">
            
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-orange-400 text-sm font-medium tracking-wider uppercase bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
                About TechFest
              </span>
            </div>

            {/* Main Title */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 rounded-full" />
            </div>

            {/* Description */}

            <div className="space-y-6">
              <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
                At <span className="text-orange-400 font-semibold">Morgan TechFest</span>, we are dedicated to fostering an environment that empowers the next generation of tech leaders. Through innovative events, impactful research symposiums, and collaborative opportunities, we strive to inspire, educate, and connect students with the ever-evolving world of technology.
              </p>
          
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-orange-400 font-semibold mb-3">
                  Focus Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">AI</span>
                  <span className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">Robotics</span>
                  <span className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">Cybersecurity</span>
                  <span className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">Data Science</span>
                  <span className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">VR</span>
                  <span className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">Blockchain</span>
                  <span className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">Software Dev</span>
                  <span className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="lg:w-1/2">
            <div className="relative group">

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

              {/* Video Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-800 border border-white/10">
                <div className="relative aspect-video bg-slate-800">

                  {!loadVideo ? (
                    <button
                      className="relative w-full h-full cursor-pointer group/video"
                      onClick={() => setLoadVideo(true)}
                      aria-label="Play Morgan TechFest video"
                    >
                      <img
                        src={thumbnailUrl}
                        alt="Morgan TechFest 2025 Video Thumbnail"
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                      />

                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30 flex items-center justify-center group-hover/video:from-black/80 transition-all duration-300 rounded-2xl">
                        <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform duration-300 shadow-2xl">
                          <PlayIcon size={40} className="text-white ml-1.5" />
                        </div>
                      </div>

                      {/* Title on thumbnail */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 rounded-b-2xl">
                        <h3 className="text-white font-bold text-xl mb-1">Morgan TechFest 2025</h3>
                        <p className="text-orange-300 text-sm font-medium mb-2">Bridging Academia & Industry</p>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <PlayIcon size={12} className="text-orange-400" />
                          <span>Click to watch the highlights</span>
                        </div>
                      </div>
                    </button>
                  ) : (
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

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard number="500+" label="Expected Attendees" />
          <StatCard number="20+" label="Industry Speakers" />
          <StatCard number="50+" label="Innovation Projects" />
          <StatCard number="$10K+" label="Prize Pool" />
        </div>

      </Container>
    </div>
  );
};

export default About;
