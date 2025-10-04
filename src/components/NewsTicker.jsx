import React from 'react';

function NewsTicker() {
  return (
    <div className="bg-blue-600 text-white py-3 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span className="text-sm md:text-base font-medium mx-8">
          🚀 Morgan TechFest launches ProjectX, a career development platform - build your skills, earn TechTalents badges, and grow year-round!
          <span className="mx-4">|</span>
          Morgan TechFest Innovation Expo returns 2026 - present your innovative projects and showcase your growth.
          <span className="mx-4">|</span>
          Start your journey today at morgantechfest.com
        </span>
        <span className="text-sm md:text-base font-medium mx-8">
          🚀 Morgan TechFest launches ProjectX, a career development platform - build your skills, earn TechTalents badges, and grow year-round!
          <span className="mx-4">|</span>
          Morgan TechFest Innovation Expo returns 2026 - present your innovative projects and showcase your growth.
          <span className="mx-4">|</span>
          Start your journey today at morgantechfest.com
        </span>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default NewsTicker;
