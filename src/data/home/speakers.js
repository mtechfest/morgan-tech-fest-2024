// ── 2026 lineup: panelists and workshop hosts ──
// Headshots live in /public/speakers/ as 4:5 portraits (800×1000) plus
// square thumbs (-sq, 480×480). Bios are the ones each guest supplied;
// `bio` is an array of paragraphs so the modal can set them cleanly.

export const speakers = [
  {
    id: 'alexis-robinson',
    name: 'Alexis Appollonia Robinson',
    role: 'Principal Program Manager, Amazon',
    org: 'Adjunct Professor, California State University, San Bernardino',
    session: 'Keynote · 10:20 AM · Room 104',
    img: '/speakers/alexis-robinson.webp',
    thumb: '/speakers/alexis-robinson-sq.webp',
    focus: 'Cloud security, GRC, FedRAMP',
    highlights: [
      'AWS re:Inforce speaker, three years running, and Governance, Risk & Compliance track leader (2022–2024)',
      'ISACA speaker (2018–2025)',
      'Co-author of AWS Audit Manager’s Generative AI Security Best Practices Framework',
      'Co-writer on the FedRAMP Authorization Act (passed 2023) and FISMA reform bills',
      'Managed FedRAMP authorization and continuous monitoring for 100+ AWS cloud services (2019–2022)'
    ],
    bio: [
      'Alexis Appollonia Robinson is a Principal Program Manager for Amazon in the Washington, DC area and an Adjunct Professor at California State University, San Bernardino. For the past 15 years, she has served buyers of the cloud, retail sellers, policy makers, compliance organizations, engineering leaders, and security teams by developing and implementing security strategies, collaborating on thought leadership, solving problems, building products, and conducting cybersecurity, engineering, and financial assessments.',
      'She graduated with double Bachelor of Science degrees in Accounting and Information Systems from the Robert H. Smith School of Business at the University of Maryland, College Park, and holds an Executive MBA from the Quantic program. She worked at CGI Federal and Ernst & Young before finding her way to Amazon. She is a Certified Information Systems Auditor (CISA) and a Project Management Professional (PMP).',
      'In her free time she plays video games and watches “Only Murders in the Building,” “Real Housewives,” “Demon Slayer,” and “Abbott Elementary.” She lives with her husband and son in Maryland.'
    ]
  }
]

// Opening Ceremony: the University's opening speaker, then the government
// representatives speaking on behalf of the Governor of Maryland and the Mayor
// of Baltimore.
export const representatives = [
  {
    id: 'don-terry-veal',
    name: 'Dr. Don-Terry Veal',
    role: 'Vice President for State and Federal Relations & Chief of Staff',
    org: 'Morgan State University · Office of the President',
    represents: 'Office of the President, Morgan State University',
    img: '/speakers/don-terry-veal.webp',
    thumb: '/speakers/don-terry-veal-sq.webp',
    focus: 'Opening speaker',
    bio: [
      'Dr. Don-Terry Veal is Vice President for State and Federal Relations and Chief of Staff at Morgan State University. He delivers the opening address at Morgan TechFest 2026 on behalf of the Office of the President.'
    ]
  },
  {
    id: 'maureen-wambui',
    name: 'Ms. Maureen Wambui',
    role: 'African Affairs Commissioner',
    org: 'Governor’s Office of Community Initiatives',
    represents: 'Office of the Governor of Maryland',
    img: '/speakers/maureen-wambui.webp',
    thumb: '/speakers/maureen-wambui-sq.webp',
    linkedin: 'https://www.linkedin.com/in/maureenwambui/',
    focus: 'Office of the Governor',
    bio: [
      'Ms. Maureen Wambui serves as African Affairs Commissioner in the Governor’s Office of Community Initiatives, and represents the Office of the Governor of Maryland at Morgan TechFest 2026.'
    ]
  },
  {
    id: 'antwan-brown',
    name: 'Dr. Antwan C. Brown',
    role: 'Administrative Director',
    org: 'Governor’s Commission on African Affairs',
    represents: 'Office of the Governor of Maryland',
    img: '/speakers/antwan-brown.webp',
    thumb: '/speakers/antwan-brown-sq.webp',
    linkedin: 'https://www.linkedin.com/in/antwanbrown/',
    focus: 'Office of the Governor',
    bio: [
      'Dr. Antwan C. Brown is Administrative Director of the Governor’s Commission on African Affairs, and represents the Office of the Governor of Maryland at Morgan TechFest 2026.'
    ]
  },
  {
    id: 'masuma-islam-lonczak',
    name: 'Ms. Masuma Islam Lonczak',
    role: 'Deputy Director',
    org: 'Mayor’s Office of Immigrant Affairs, City of Baltimore',
    represents: 'Office of the Mayor of Baltimore',
    img: '/speakers/masuma-islam-lonczak.webp',
    thumb: '/speakers/masuma-islam-lonczak-sq.webp',
    focus: 'Office of the Mayor',
    bio: [
      'Ms. Masuma Islam Lonczak is Deputy Director of the Mayor’s Office of Immigrant Affairs, and represents the Office of the Mayor of Baltimore at Morgan TechFest 2026.'
    ]
  }
]

// Panel moderator and event MC
export const moderator = {
  id: 'juliana-talabi',
  name: 'Juliana Talabi',
  role: 'Panel Moderator & MC (MC JAT)',
  org: 'Legal Practitioner',
  img: '/speakers/juliana-talabi.webp',
  thumb: '/speakers/juliana-talabi-sq.webp',
  focus: 'Moderator',
  bio: [
    'Juliana Talabi, known as MC JAT, is a legal practitioner. She serves as master of ceremonies for Morgan TechFest 2026 and moderates the “Reinventing Industries” panel.'
  ]
}

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
    room: 'Room 110',
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
    workshop: 'How to Land a Six-Figure Career in Tech',
    room: 'Room 112',
    workshopBlurb:
      'A hands-on session on breaking into tech: the skills, portfolio, and moves that get students from classroom to first role.',
    // TODO: replace with the bio Vinod supplies. Only the headshot was in the
    // shared folder.
    bio: [
      'Vinod Akunuri leads Jumpstart2Tech and returns to Morgan TechFest after speaking at the 2024 edition. Full bio coming soon.'
    ]
  },
  {
    id: 'alexis-robinson-kiro',
    name: 'Alexis Appollonia Robinson',
    role: 'Principal Program Manager, Amazon',
    org: 'Adjunct Professor, California State University, San Bernardino',
    img: '/speakers/alexis-robinson.webp',
    thumb: '/speakers/alexis-robinson-sq.webp',
    workshop: 'Kiro',
    room: 'Room 105',
    workshopBlurb:
      'A hands-on session with Kiro, Amazon’s agentic AI development environment, from the keynote speaker.',
    bio: [
      'Alexis Appollonia Robinson is a Principal Program Manager for Amazon in the Washington, DC area and an Adjunct Professor at California State University, San Bernardino. After delivering the morning keynote, she leads the afternoon Kiro workshop in Room 105.',
      'She graduated with double Bachelor of Science degrees in Accounting and Information Systems from the Robert H. Smith School of Business at the University of Maryland, College Park, and holds an Executive MBA from the Quantic program. She worked at CGI Federal and Ernst & Young before finding her way to Amazon. She is a Certified Information Systems Auditor (CISA) and a Project Management Professional (PMP).'
    ]
  }
]

// Judges for the Tech Case Competition and Innovation Expo. Each person appears
// once. Photos are 4:5 portraits in /public/speakers/judges/.
export const judges = [
  { id: 'radhouane-chouchane', name: 'Dr. Radhouane Chouchane', img: '/speakers/judges/radhouane-chouchane.webp' },
  { id: 'roshan-puadel', name: 'Dr. Roshan Puadel', img: '/speakers/judges/roshan-puadel.webp' },
  { id: 'fahmi-khalifa', name: 'Fahmi Khalifa, Ph.D.', img: '/speakers/judges/fahmi-khalifa.webp' },
  { id: 'tolu-odumosu', name: 'Dr. Tolu Odumosu', img: '/speakers/judges/tolu-odumosu.webp' },
  { id: 'kelechi-nwachukwu', name: 'Kelechi Nwachukwu', img: '/speakers/judges/kelechi-nwachukwu.webp' },
  { id: 'og-ogunsemowo', name: 'Og Ògúnsémòwó', img: '/speakers/judges/og-ogunsemowo.webp' },
  { id: 'femi-adeyeye', name: 'Femi Adeyeye', img: '/speakers/judges/femi-adeyeye.webp' },
  { id: 'laila-henriksen', name: 'Laila Henriksen', img: '/speakers/judges/laila-henriksen.webp' }
]
