// ── 2026 lineup: panelists and workshop hosts ──
// Headshots live in /public/speakers/ as 4:5 portraits (800×1000) plus
// square thumbs (-sq, 480×480). Bios are the ones each guest supplied;
// `bio` is an array of paragraphs so the modal can set them cleanly.

export const panelists = [
  {
    id: 'jamell-dacon',
    name: 'Dr. Jamell Dacon',
    role: 'Director, MINDS Lab',
    org: 'Morgan State University · CEAMLS',
    img: '/speakers/jamell-dacon.webp',
    thumb: '/speakers/jamell-dacon-sq.webp',
    focus: 'Trustworthy AI, NLP, AI governance',
    bio: [
      'Dr. Jamell Dacon is the Director of the MINDS Lab at Morgan State University and a core faculty researcher at the Center for Equitable AI and Machine Learning Systems (CEAMLS). His work bridges the gap between complex machine learning architectures and real-world human impact.',
      'His primary mission is to build robust, responsible, and equitable AI systems by detecting and mitigating demographic biases, performance errors, and disparities in large-scale models. By translating theoretical AI ethics into measurable engineering workflows, Dr. Dacon actively helps shape the future of safe and transparent technology.',
      'His core areas of expertise include Trustworthy AI and Responsible ML (designing frameworks for algorithmic accountability, robustness, and systemic bias), Natural Language Processing (investigating socio-linguistic variations to improve model equity), and AI Governance and Compliance (aligning emerging machine learning technologies with evolving global safety guidelines).'
    ]
  },
  {
    id: 'eyitayo-ogunmola',
    name: 'Eyitayo Ogunmola',
    role: 'Founder & CEO, Utiva',
    org: 'Tech Entrepreneur · AI Investor',
    img: '/speakers/eyitayo-ogunmola.webp',
    thumb: '/speakers/eyitayo-ogunmola-sq.webp',
    focus: 'Global talent, hiring, AI product',
    bio: [
      'Eyitayo Ogunmola is a leading technology entrepreneur and ecosystem builder, and the Founder & CEO of Utiva, a global talent infrastructure company that has empowered over 100,000 people with advanced technology skills and enabled companies across the US, UK, and Europe to hire top talent from more than 39 markets, without relocating talent out of their home countries. Eyitayo founded Utiva to operate at the intersection of global hiring, talent development, and cross-border payments.',
      'Widely recognized as a Tech Bishop, Eyitayo brings over 13 years of leadership experience across technology, product, and partnerships. Prior to Utiva, he held senior roles at Creative Associates in Washington, DC, and at Afrissance, where he served as Vice President for Business Development, driving growth, partnerships, and market expansion.',
      'His work has earned numerous global recognitions, including Facebook Community Leader (2020), Antler Entrepreneur (2021), Halcyon Fellow (2020), Chevening Scholar (2018), and Atlas Corps Fellow (2020). He is also a Global Good Fund Fellow, Carrington Youth Fellow, a 2024 Cascador Entrepreneur, and a recipient of the Jack Ma Foundation Business Heroes award. Eyitayo holds the UK Global Talent Visa in recognition of his exceptional contributions to technology and workforce development.',
      'Eyitayo earned a master’s degree in Business Strategy and Change from Edinburgh Business School and consults as an AI Product Manager. He is also the founder of The Velocity, an invite-only community of over 700 high-performing entrepreneurs, operators, and professionals across Africa and the global diaspora.'
    ]
  },
  {
    id: 'nuel-adeyeye',
    name: 'Oluwafemi “Nuel” Adeyeye',
    role: 'Founder & Executive Director, Nuel Foundation',
    org: 'Founder, Nuel Global · Google Data Center AI Fellow',
    img: '/speakers/nuel-adeyeye.webp',
    thumb: '/speakers/nuel-adeyeye-sq.webp',
    focus: 'Data, BI, workforce development',
    bio: [
      'Oluwafemi Emmanuel Adeyeye, widely known as Nuel, is a technology leader, data evangelist, social entrepreneur, educator, and social impact advocate with extensive experience spanning business intelligence, data analytics, artificial intelligence, cybersecurity, digital transformation, workforce development, and community leadership.',
      'He is the Founder and Executive Director of Nuel Foundation, a nonprofit organization committed to advancing economic mobility and strengthening communities through technology education, workforce development, youth empowerment, welfare programs, and access to opportunity. Under his leadership, the Foundation provides practical training in Data Analytics, Business Analysis, Business Intelligence, Cybersecurity, Cloud Computing, Database Administration, IT Support, Data Privacy, and other emerging fields. The Foundation also develops partnerships that connect individuals with mentorship, career pathways, employment opportunities, and resources for greater self-sufficiency.',
      'Nuel is also the Founder of Nuel Global, a technology solutions and consulting company that delivers business intelligence, data analytics, enterprise reporting, dashboard development, digital transformation, and contracting services. Nuel Global also helps entrepreneurs and nonprofit leaders establish, strengthen, and grow their organizations through practical business setup and strategic consulting.',
      'As a technology professional, Nuel has built a distinguished career in data management, business intelligence, IT risk and controls, data privacy, cybersecurity, and enterprise reporting. He previously worked within Microsoft’s Xbox division, where he supported enterprise reporting, data privacy, and compliance initiatives. This experience strengthened his understanding of how data, governance, technology, and responsible innovation operate within a global technology environment.',
      'Nuel is a Fellow of the Google Data Center AI Fellowship, where he continues to advance his work at the intersection of artificial intelligence, workforce development, economic opportunity, and community transformation.',
      'He is also involved with WhiteGarment Connect (WGC), an initiative focused on strengthening connections, collaboration, visibility, and shared progress within the white-garment faith community. In addition, he serves as the Executive Director of The Seraph Builders, a global faith-based community of more than 20,000 people dedicated to spiritual growth, leadership development, personal transformation, and purposeful living. His work across these platforms reflects his commitment to raising people who can combine faith, knowledge, innovation, and service to create lasting change.',
      'An accomplished social entrepreneur and community leader, Nuel has designed and supported initiatives focused on youth technology education, career readiness, apprenticeships, professional development, digital inclusion, food assistance, family support, entrepreneurship, and community engagement.',
      'Nuel also serves as a member of the City of Arlington Mayor’s Black Advisory Council, contributing his experience and perspective to conversations concerning community advancement, economic opportunity, technology, education, and civic engagement. His leadership is grounded in his personal philosophy of “Love and Light”: using knowledge, compassion, service, and innovation to illuminate pathways for others.',
      'Through Nuel Foundation, Nuel Global, WhiteGarment Connect, The Seraph Builders, the Google Data Center AI Fellowship, and his broader professional and civic engagements, Nuel continues to champion the development of future-ready professionals, ethical technology leaders, social entrepreneurs, businesses, and community changemakers. His long-term vision is to use data, artificial intelligence, education, entrepreneurship, and collaborative leadership to solve complex problems, expand access to opportunity, strengthen economic stability, and empower people and organizations to build meaningful and sustainable futures.'
    ]
  }
]

export const workshopHosts = [
  {
    id: 'adalbert-de-la-cruz',
    name: 'Adalbert De La Cruz',
    role: 'Founder, Clarity',
    org: 'Product Leader · Educator · Speaker',
    img: '/speakers/adalbert-de-la-cruz.webp',
    thumb: '/speakers/adalbert-de-la-cruz-sq.webp',
    workshop: 'Build Like a Full-Stack Product Manager on Lovable',
    workshopBlurb:
      'A masterclass on shipping AI products end to end, from idea to working prototype, without waiting on an engineering team.',
    bio: [
      'Adalbert De La Cruz is a product leader, founder, educator, and speaker working at the intersection of AI, product strategy, emerging technology, and community. He is the founder of Clarity, an AI-powered productivity companion, and the force behind community experiences like Vibe Connect and Vibe Code & Sip.',
      'He has spoken at Baruch College, Columbia University, TD Bank, Lyft HQ, Nationals Park, DC Startup Week, Google DevFest BK & Queens, and innovation communities across NYC and D.C. His talks cover AI and product strategy, vibe coding for founders and non-technical builders, building AI products people actually want, Web3 and the future of digital ownership, and community as a growth engine.'
    ]
  },
  {
    id: 'vinod-akunuri',
    name: 'Vinod Akunuri',
    role: 'Jumpstart2Tech',
    org: 'Workshop Host · Returning TechFest speaker',
    img: '/speakers/vinod-akunuri.webp',
    thumb: '/speakers/vinod-akunuri-sq.webp',
    workshop: 'Jumpstart2Tech',
    workshopBlurb:
      'A hands-on session on breaking into tech: the skills, portfolio, and moves that get students from classroom to first role.',
    // TODO: replace with the bio Vinod supplies. Only the headshot was in the
    // shared folder.
    bio: [
      'Vinod Akunuri leads Jumpstart2Tech and returns to Morgan TechFest after speaking at the 2024 edition. Full bio coming soon.'
    ]
  }
]
