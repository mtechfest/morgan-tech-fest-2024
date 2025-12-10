import Container from "../../components/Container";
import ImageSlider from "../../components/ImageSlider";

// Import all images
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";
import s7 from "../../assets/s7.png";
import s8 from "../../assets/s8.png";
import s9 from "../../assets/s9.png";
import s10 from "../../assets/s10.png";
import s11 from "../../assets/s11.png";
import researchCriteria from "../../assets/Jdg-Rsc.png";
import projectCriteria from "../../assets/Jdg-prj.pdf";

// Configuration constants
const EXPO_CONFIG = {
  title: "INNOVATION EXPO",
  submissionUrl: "https://form.jotform.com/241518319102145",
  projectCriteriaUrl: projectCriteria,
  researchCriteriaUrl: researchCriteria,
  posterFormat36x48Url: "https://raw.githubusercontent.com/mtechfest/morgan-tech-fest-2024/bcc8ee19f8ba25105415acf3cd59223eb2f1126c/src/assets/36x%2048-MorganTechFest-InnovationXpo-Format.pptx",
  posterFormat42x60Url: "https://raw.githubusercontent.com/mtechfest/morgan-tech-fest-2024/bcc8ee19f8ba25105415acf3cd59223eb2f1126c/src/assets/42x60-MorganTechFest-InnovationXpo-Format.pptx",
  images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11]
};

const ActionButton = ({ href, variant = 'primary', children }) => {
  const baseClasses = "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 w-full justify-center";
  const variants = {
    primary: "bg-gradient-to-r from-[#FC711B] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#FC711B] text-white shadow-lg hover:shadow-xl hover:scale-105",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20"
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]}`}
    >
      <span>{children}</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
};

const CategoryCard = ({ icon, title, description, criteriaUrl }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FC711B]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FC711B]/20">
    <div className="inline-block px-4 py-2 bg-[#FC711B]/20 rounded-full text-sm font-bold text-[#ff8c42] mb-6">
      {icon} {title}
    </div>
    
    <h3 className="font-bold text-2xl lg:text-3xl text-white mb-4">
      {title} Category
    </h3>
    
    <p className="text-white/80 mb-6 leading-relaxed">
      {description}
    </p>

    <div className="bg-[#FC711B]/10 border border-[#FC711B]/30 rounded-lg p-4 mb-6">
      <p className="text-sm text-white/90 mb-2">
        <strong>Presentation Format:</strong> All submissions must be presented in poster format.
      </p>
      <p className="text-sm text-white/80">
        <strong>Poster Sizes:</strong> 36" x 48" (36 inches high by 48 inches wide) or 42" x 60"
      </p>
    </div>
    
    <div className="space-y-3">
      <ActionButton href={criteriaUrl} variant="primary">
        View {title} Judging Criteria
      </ActionButton>
    </div>
  </div>
);

const InnovationExpo = () => {
  return (
    <div name='symposium' className="bg-gradient-to-br from-[#122644] via-[#1a3354] to-[#0f1f38]">
      {/* Hero Section with Image Slider */}
      <section className="py-20 lg:py-28" id="innovation-expo" aria-labelledby="expo-title">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FC711B]/20 to-[#ff8c42]/20 border border-[#FC711B]/30">
            {/* OPTIMIZATION: Simplified background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12 relative z-10">
              <div className="lg:w-[45%] text-white">
                <div className="inline-block px-5 py-2 bg-[#FC711B]/30 rounded-full text-sm font-bold text-[#ff8c42] mb-6">
                  🎯 Showcase Your Innovation
                </div>
                <h2 
                  id="expo-title"
                  className="font-bold text-4xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
                >
                  {EXPO_CONFIG.title}
                </h2>
                <p className="text-white/90 mb-4 text-lg leading-relaxed">
                  Ready to revolutionize the tech world? Showcase your brilliance at our Innovation Expo!
                </p>
                <p className="text-white/80 text-base leading-relaxed">
                  Choose your category: <span className="font-semibold text-[#ff8c42]">Projects</span> or <span className="font-semibold text-[#ff8c42]">Research</span>. Cash prizes and recognition await!
                </p>
              </div>
              
              <div className="lg:w-[55%]">
                <div className="relative group">
                  {/* OPTIMIZATION: Reduced blur intensity */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FC711B] to-[#ff8c42] rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="relative">
                    <ImageSlider 
                      images={EXPO_CONFIG.images} 
                      alt="Innovation Expo showcase images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Two Category Cards */}
      <div className="py-16 lg:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Projects Card */}
            <CategoryCard
              icon="💻"
              title="Projects"
              description="Showcase your technical projects, applications, and innovative solutions. Demonstrate your coding skills, problem-solving abilities, and bring your ideas to life through technology."
              criteriaUrl={EXPO_CONFIG.projectCriteriaUrl}
            />

            {/* Research Card */}
            <CategoryCard
              icon="🔬"
              title="Research"
              description="Present your groundbreaking research findings, academic work, and experimental studies. Share discoveries that push the boundaries of knowledge and contribute to advancing your field."
              criteriaUrl={EXPO_CONFIG.researchCriteriaUrl}
            />
          </div>

          {/* Unified Submission and Poster Format Section */}
          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
            <h3 className="font-bold text-2xl lg:text-3xl text-white mb-6 text-center">
              Ready to Submit?
            </h3>
            
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Submission Button */}
              <ActionButton href={EXPO_CONFIG.submissionUrl} variant="primary">
                Submit Your Project or Research
              </ActionButton>

              {/* Poster Format Downloads */}
              <div className="bg-[#FC711B]/10 border border-[#FC711B]/30 rounded-lg p-6">
                <p className="text-white/90 text-center mb-4 font-semibold">
                  Download Poster Templates
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <ActionButton href={EXPO_CONFIG.posterFormat36x48Url} variant="secondary">
                    36" x 48" Format
                  </ActionButton>
                  <ActionButton href={EXPO_CONFIG.posterFormat42x60Url} variant="secondary">
                    42" x 60" Format
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default InnovationExpo;
