import { useState } from "react";
import Container from "../../components/Container";

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
import projectCriteria from "../../assets/Jdg-prj.png";
import posterFormat36x48 from "../../assets/36x 48-MorganTechFest-InnovationXpo-Format.pptx";

// Configuration constants
const EXPO_CONFIG = {
  title: "INNOVATION EXPO",
  submissionUrl: "https://form.jotform.com/241518319102145",
  projectCriteriaUrl: projectCriteria,
  researchCriteriaUrl: researchCriteria,
  posterFormat36x48Url: posterFormat36x48,
  images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11]
};

const ActionButton = ({ href, variant = 'primary', children }) => {
  const baseClasses = "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 w-full justify-center";
  const variants = {
    primary: "bg-gradient-to-r from-[#FC711B] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#FC711B] text-white shadow-lg hover:shadow-xl",
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

const ImageModal = ({ isOpen, onClose, imageSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ icon, title, description, criteriaUrl, onImageClick }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FC711B]/50 transition-all">
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
        <strong>Poster Size:</strong> 36" x 48" (36 inches high by 48 inches wide)
      </p>
    </div>
    
    <div className="space-y-3">
      <p className="text-white/90 font-semibold text-sm mb-2">Judging Criteria:</p>
      <div 
        onClick={onImageClick}
        className="cursor-pointer group relative overflow-hidden rounded-lg border-2 border-[#FC711B]/30 hover:border-[#FC711B] transition-all"
      >
        <img 
          src={criteriaUrl} 
          alt={`${title} Judging Criteria`}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
          <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Click to Enlarge
          </span>
        </div>
      </div>
    </div>
  </div>
);

const InnovationExpo = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: null,
    title: ''
  });

  const openModal = (imageSrc, title) => {
    setModalState({ isOpen: true, imageSrc, title });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, imageSrc: null, title: '' });
  };

  return (
    <div name='symposium' className="bg-gradient-to-br from-[#122644] via-[#1a3354] to-[#0f1f38]">
      <ImageModal 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
      />

      {/* Hero Section with Static Image */}
      <section className="py-20 lg:py-28" id="innovation-expo" aria-labelledby="expo-title">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FC711B]/20 to-[#ff8c42]/20 border border-[#FC711B]/30">
            
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12 relative z-10">
              <div className="lg:w-[45%] text-white">
                <div className="inline-block px-5 py-2 bg-[#FC711B]/30 rounded-full text-sm font-bold text-[#ff8c42] mb-6">
                  🎯 Showcase Your Innovation
                </div>
                <h2 
                  id="expo-title"
                  className="font-bold text-4xl lg:text-6xl mb-6 text-white"
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
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={s1} 
                    alt="Innovation Expo showcase"
                    className="w-full h-auto rounded-2xl"
                  />
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
              onImageClick={() => openModal(EXPO_CONFIG.projectCriteriaUrl, "Projects Judging Criteria")}
            />

            {/* Research Card */}
            <CategoryCard
              icon="🔬"
              title="Research"
              description="Present your groundbreaking research findings, academic work, and experimental studies. Share discoveries that push the boundaries of knowledge and contribute to advancing your field."
              criteriaUrl={EXPO_CONFIG.researchCriteriaUrl}
              onImageClick={() => openModal(EXPO_CONFIG.researchCriteriaUrl, "Research Judging Criteria")}
            />
          </div>

          {/* Unified Submission and Poster Format Section */}
          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
            <h3 className="font-bold text-2xl lg:text-3xl text-white mb-6 text-center">
              Poster Template & Submission
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Poster Template Preview */}
              <div>
                <p className="text-white/90 font-semibold text-sm mb-3 text-center">
                  Poster Template (36" x 48")
                </p>
                <div 
                  className="cursor-pointer group relative overflow-hidden rounded-lg border-2 border-[#FC711B]/30 hover:border-[#FC711B] transition-all bg-white p-2"
                >
                  <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-600 font-medium">PowerPoint Template</p>
                      <p className="text-sm text-gray-500 mt-1">Click to download</p>
                    </div>
                  </div>
                  <a 
                    href={EXPO_CONFIG.posterFormat36x48Url}
                    download
                    className="absolute inset-0"
                    aria-label="Download poster template"
                  />
                </div>
              </div>

              {/* Quick Info */}
              <div className="flex flex-col justify-center">
                <div className="bg-[#FC711B]/10 border border-[#FC711B]/30 rounded-lg p-6 space-y-3">
                  <h4 className="text-white font-bold text-lg mb-3">📋 Requirements</h4>
                  <div className="space-y-2 text-sm text-white/90">
                    <p>✓ Poster size: 36" x 48"</p>
                    <p>✓ Choose Projects or Research category</p>
                    <p>✓ Review judging criteria above</p>
                    <p>✓ Download and use the template</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Button */}
            <div className="max-w-md mx-auto">
              <ActionButton href={EXPO_CONFIG.submissionUrl} variant="primary">
                Submit Your Project or Research
              </ActionButton>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default InnovationExpo;
