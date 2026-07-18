// ── Event details: single source of truth for the hero + countdown ──
export const eventInfo = {
  theme: 'Future Flux',
  tagline: 'Building The Intelligent World',
  iso: '2026-09-19T09:00:00',
  stamp: '2026-09-19 09:00 ET',
  date: 'September 19, 2026',
  venue: 'Earl G. Graves School of Business & Management',
  city: 'Morgan State University, Baltimore, MD',
  registerUrl: 'https://form.jotform.com/252798316140156',
  domains: ['AI', 'Cybersecurity', 'Robotics', 'Data Science']
}

// Nav is data, so the desktop bar and the mobile disclosure cannot drift apart.
export const nav = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'components', label: 'Components', index: '02' },
  { id: 'tracks', label: 'Tracks', index: '03' },
  { id: 'schedule', label: 'Schedule', index: '04' },
  { id: 'partners', label: 'Partners', index: '05' },
  { id: 'faq', label: 'FAQ', index: '06' }
]

export const schedule = [
  'Tech Case Competition',
  'Innovation Expo',
  'Networking',
  'Panel Session',
  'Award Ceremony'
]

// The 2026 lineup is not announced yet, so the marquee runs placeholder slots.
// Swap `speakerSlots` for the announced names when they are confirmed.
export const speakerSlots = [
  { id: 's1', role: 'Keynote' },
  { id: 's2', role: 'Panelist' },
  { id: 's3', role: 'Panelist' },
  { id: 's4', role: 'Industry Speaker' },
  { id: 's5', role: 'Panelist' },
  { id: 's6', role: 'Industry Speaker' }
]

// Archived: 2024 speakers and panelists. Kept so the marquee can be restored
// with real names and headshots once the 2026 lineup is public.
export const pastSpeakers = [
  { name: 'Amen Mashariki', img: '/Guest Images/Amen Mashariki.JPG' },
  { name: 'Arielle Williams', img: '/Guest Images/Arielle Williams.jpeg' },
  { name: 'Deanna Bailey', img: '/Guest Images/DeannaBailey_Headshot.png' },
  { name: 'Dr. Jalaal A. Hayes', img: '/Guest Images/Dr. Jalaal A. Hayes.JPG' },
  { name: 'Jamell Dacon', img: '/Guest Images/Jamell Dacon.jpg' },
  { name: 'Kayla Mclaughlin', img: '/Guest Images/Kayla Mclaughlin.jpg' },
  { name: 'Kenneth Kerr', img: '/Guest Images/Kenneth Kerr.png' },
  { name: 'Marisniulkis Lescaille', img: '/Guest Images/Marisniulkis Lescaille.jpeg' },
  { name: 'Rishi Chopra', img: '/Guest Images/Rishi Chopra.jpg' },
  { name: 'Scott Roth', img: '/Guest Images/Scott Roth.jpg' },
  { name: 'Sharod Jenkins', img: '/Guest Images/Sharod Jenkins.JPEG' },
  { name: 'Vinod Akunuri', img: '/Guest Images/Vinod Akunuri.jpg' }
]

export const tracks = [
  {
    id: 'TRK-01',
    name: 'Health',
    brief: 'Diagnostics, access, and patient outcomes'
  },
  {
    id: 'TRK-02',
    name: 'Education',
    brief: 'Learning tools, literacy, and student success'
  },
  {
    id: 'TRK-03',
    name: 'Transportation',
    brief: 'Mobility, logistics, and transit systems'
  },
  {
    id: 'TRK-04',
    name: 'Finance',
    brief: 'Payments, access to capital, and financial literacy'
  },
  {
    id: 'TRK-05',
    name: 'Energy & Sustainability',
    brief: 'Climate, grid, and resource efficiency'
  },
  {
    id: 'TRK-06',
    name: 'Workforce & Employment',
    brief: 'Hiring, skills, and career mobility'
  }
]

export const studentValues = [
  {
    title: 'Practical Experience',
    description: 'Solve real-world challenges across technology-driven sectors'
  },
  {
    title: 'Portfolio Development',
    description: 'Build case solutions, research presentations, and prototypes'
  },
  {
    title: 'Professional Skills',
    description: 'Strengthen critical thinking, teamwork, and communication'
  },
  {
    title: 'Career Path Discovery',
    description: 'Explore how technology applies across different fields'
  },
  {
    title: 'Growth Opportunities',
    description: 'Engage with faculty, researchers, and industry professionals'
  },
  {
    title: 'Recognition',
    description: 'Earn awards and exposure for innovation and excellence'
  }
]

export const partners = [
  {
    name: 'Google',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    name: 'Bloomberg',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/New_Bloomberg_Logo.svg'
  },
  {
    name: 'Microsoft',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  },
  {
    name: 'Northrop Grumman',
    img: '/Northrop-Grumman-Logo.png'
  },
  {
    name: 'Ripple',
    img: '/Ripple - blueblack_lg (1).png'
  },
  {
    name: 'AltusTech',
    img: '/AltusTech.png'
  },
  {
    name: 'CEAMLS',
    img: '/CEAMLS.PNG'
  },
  {
    name: 'JS2T',
    img: '/JS2T - (Black-NonTrspt).png'
  },
  {
    name: 'LFG',
    img: '/LFG_color.jpg'
  },
  {
    name: 'Y3K',
    img: '/Y3K.JPG'
  },
  {
    name: 'MLH',
    img: '/mlh-logo-color.png'
  },
  {
    name: 'JS Technology Academy',
    img: 'https://res.cloudinary.com/ojay-dev/image/upload/v1693912315/MorganTechFest/patners/JOS-Tech-Logo_yyryyj.png'
  },
  {
    name: 'AWS',
    img: 'https://res.cloudinary.com/ojay-dev/image/upload/v1700028978/MorganTechFest/patners/aws_logo_1_sdbmrm.png'
  },
  {
    name: 'Oracle',
    img: 'https://res.cloudinary.com/ojay-dev/image/upload/v1700028978/MorganTechFest/patners/Oracle_logo_PNG1_1_xfqgvx.png'
  },
  {
    name: 'Scholarly',
    img: 'https://res.cloudinary.com/ojay-dev/image/upload/v1700028979/MorganTechFest/patners/Scholarly_1_ens2ws.png'
  },
  {
    name: 'Timeless Venture Group',
    img: 'https://res.cloudinary.com/ojay-dev/image/upload/v1700192312/MorganTechFest/patners/TGV_2_1_dpmpfd.png'
  },
  {
    name: 'Morgan State University, Graves School',
    img: 'https://res.cloudinary.com/ojay-dev/image/upload/v1700028979/MorganTechFest/patners/MSU-Earl-G-Graves-Logo-1_1_vlv3ij.png'
  },
  {
    name: 'RTC',
    img: '/RTC__Logo Orange.png'
  }
]

export const FaqQuestionsAnswers = [
  {
    question: 'What is the 2026 theme?',
    answer: 'Future Flux: Building The Intelligent World. The 2026 edition runs across four areas shaping that world — AI, Cybersecurity, Robotics, and Data Science.'
  },
  {
    question: 'What is Morgan TechFest?',
    answer: 'Morgan TechFest is a premier platform for discovery, innovation, and collaboration, empowering the next generation of technology leaders by advancing student development and creating pathways for career exploration in technology-driven fields.'
  },
  {
    question: 'Who can participate?',
    answer: 'Morgan TechFest is open to students from Morgan State University and other institutions. We encourage inter-university collaboration and diverse perspectives.'
  },
  {
    question: 'What are the competition tracks?',
    answer: 'Solutions are developed around six tracks: Health, Education, Transportation, Finance, Energy & Sustainability, and Workforce & Employment.'
  },
  {
    question: 'What can I showcase at the Innovation Expo?',
    answer: 'You can showcase research projects, engineering prototypes, and AI/technology solutions. Participants compete for awards and recognition.'
  },
  {
    question: 'Is it free?',
    answer: 'Yes. Morgan TechFest is completely free for all students.'
  },
  {
    question: 'Where is it held?',
    answer: 'The Earl G. Graves School of Business & Management at Morgan State University, Baltimore, MD. It is an in-person event held on September 19, 2026.'
  },
  {
    question: 'How do I register?',
    answer: 'Click the Register Now button at the top of this page and fill out the form.'
  }
]
