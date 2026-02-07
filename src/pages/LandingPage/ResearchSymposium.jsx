import Container from "../../components/Container";
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

const EXPO_CONFIG = {
  title: "INNOVATION EXPO",
  submissionUrl: "https://form.jotform.com/241518319102145",
  projectCriteriaUrl: projectCriteria,
  researchCriteriaUrl: researchCriteria,
  posterFormat36x48Url: posterFormat36x48,
  images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11],
};

const ActionButton = ({ href, variant = "primary", children, download = false }) => {
  const baseClasses =
    "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 w-full justify-center";
  const variants = {
    primary:
      "bg-gradient-to-r from-[#FC711B] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#FC711B] text-white shadow-lg hover:shadow-xl hover:scale-105",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
  };

  return (
    <a
      href={href}
      {...(download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
      className={`${baseClasses} ${variants[variant]}`}
    >
      <span>{children}</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
};

const CategoryCard = ({ title, description, criteriaUrl }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FC711B]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FC711B]/20">
    <div className="inline-block px-4 py-2 bg-[#FC711B]/20 rounded-full text-sm font-bold text-[#ff8c42] mb-6">
      {title}
    </div>
    <h3 className="font-bold text-2xl lg:text-3xl text-white mb-4">{title} Category</h3>
    <p className="text-white/80 mb-6 leading-relaxed">{description}</p>
    <div className="bg-[#FC711B]/10 border border-[#FC711B]/30 rounded-lg p-4 mb-6 text-sm text-white/90">
      <p className="mb-1">
        <strong>Presentation Format:</strong> All submissions must be presented in poster format.
      </p>
      <p>
        <strong>Poster Size:</strong> 36" x 48" (36 inches high by 48 inches wide)
      </p>
    </div>
    <ActionButton href={criteriaUrl} variant="primary">
      View {title} Judging Criteria
    </ActionButton>
  </div>
);

// Lightweight slider: horizontal scroll with CSS
const ImageSlider = ({ images, alt }) => (
  <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
    {images.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`${alt} ${idx + 1}`}
        className="snap-start flex-shrink-0 w-64 h-40 object-cover rounded-2xl border border-white/10"
        loading="lazy"
      />
    ))}
  </div>
);

const InnovationExpo = () => {
  return (
    <div className="bg-gradient-to-br from-[#122644] via-[#1a3354] to-[#0f1f38]">
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FC711B]/20 to-[#ff8c42]/20 border border-[#FC711B]/30 p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-[45%] text-white">
              <div className="inline-block px-5 py-2 bg-[#FC711B]/30 rounded-full text-sm font-bold text-[#ff8c42] mb-6">
                Showcase Your Innovation
              </div>
              <h2 className="font-bold text-4xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                {EXPO_CONFIG.title}
              </h2>
              <p className="text-white/90 mb-4 text-lg leading-relaxed">
                Ready to revolutionize the tech world? Showcase your brilliance at our Innovation Expo!
              </p>
              <p className="text-white/80 text-base leading-relaxed">
                Choose your category:{" "}
                <span className="font-semibold text-[#ff8c42]">Projects</span> or{" "}
                <span className="font-semibold text-[#ff8c42]">Research</span>. Cash prizes and recognition await!
              </p>
            </div>
            <div className="lg:w-[55%]">
              <ImageSlider images={EXPO_CONFIG.images} alt="Innovation Expo showcase" />
            </div>
          </div>
        </Container>
      </section>

      {/* Category Cards */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            <CategoryCard
              title="Projects"
              description="Showcase your technical projects, applications, and innovative solutions. Demonstrate your coding skills, problem-solving abilities, and bring your ideas to life through technology."
              criteriaUrl={EXPO_CONFIG.projectCriteriaUrl}
            />
            <CategoryCard
              title="Research"
              description="Present your groundbreaking research findings, academic work, and experimental studies. Share discoveries that push the boundaries of knowledge and contribute to advancing your field."
              criteriaUrl={EXPO_CONFIG.researchCriteriaUrl}
            />
          </div>

          {/* Submission Section */}
          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 text-center">
            <h3 className="font-bold text-2xl lg:text-3xl text-white mb-6">Ready to Submit?</h3>
            <div className="max-w-2xl mx-auto space-y-4">
              <ActionButton href={EXPO_CONFIG.submissionUrl} variant="primary">
                Submit Your Project or Research
              </ActionButton>

              <div className="bg-[#FC711B]/10 border border-[#FC711B]/30 rounded-lg p-6">
                <p className="text-white/90 text-center mb-4 font-semibold">Download Poster Template</p>
                <ActionButton href={EXPO_CONFIG.posterFormat36x48Url} variant="secondary" download={true}>
                  Download 36" x 48" Format
                </ActionButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default InnovationExpo;
