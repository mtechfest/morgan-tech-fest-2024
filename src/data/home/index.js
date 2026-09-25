// ── Event details: single source of truth for the hero + countdown ──
export const eventInfo = {
  year: '2027',
  theme: 'Coming Soon',
  iso: '2027-09-18T09:00:00',
  stamp: '2027-09-18 09:00 ET',
  date: 'September 18, 2027',
  venue: 'University Student Center',
  city: 'Morgan State University, Baltimore, MD',
  registerUrl: '/register.html'
}

// Nav is data, so the desktop bar and the mobile disclosure cannot drift apart.
// `href` wins over `id`: items with an href are standalone pages, items
// without one scroll to a section on this page.
export const nav = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', index: '01', href: '/about.html' },
  { id: 'techcase', label: 'Tech Case', href: '/tech-case.html' },
  { id: 'expo', label: 'Innovation Expo', href: '/innovation-expo.html' },
  { id: 'schedule', label: 'Schedule', index: '04', href: '/schedule.html' },
  { id: 'team', label: 'Team', href: '/team.html' },
  { id: 'faq', label: 'FAQ', index: '06' }
]

// Secondary pages that moved out of the header menu into the footer.
export const footerLinks = [
  { label: 'Transit', href: '/transit.html' },
  { label: 'Past Events', href: '/highlights.html' },
  { label: 'Media', href: '/media.html' }
]

// Quick links to each past edition's page, shown in the footer.
export const pastEditions = ['2022', '2023', '2024', '2026'].map((year) => ({
  label: year,
  href: `/past/${year}.html`
}))

// Headline program blocks, in the order they actually run on the day.
// The SH-0n ids are a sequence, so the order here must match the timeline on
// /schedule.html, if that page is re-timed, re-sort this list to match.
export const schedule = [
  { id: 'SH-01', name: 'Innovation Expo' },
  { id: 'SH-02', name: 'Panel Session' },
  { id: 'SH-03', name: 'Workshop' },
  { id: 'SH-04', name: 'Tech Case Competition' },
  { id: 'SH-05', name: 'Networking' },
  { id: 'SH-06', name: 'Award Ceremony' }
]

// The 2026 panelists and workshop hosts live in ./speakers.js.

// Archived: 2024 speakers and panelists, kept for the highlights page.
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
  { name: 'Amazon', img: '/sponsors-2026/amazon.webp' },
  { name: 'Google', img: '/sponsors-2026/google.webp' },
  { name: 'AT&T', img: '/sponsors-2026/att.webp' },
  { name: 'Morgan State University', img: '/sponsors-2026/msu.webp' },
  { name: 'Center for Equitable AI & Machine Learning Systems', img: '/sponsors-2026/ceamls.webp' },
  { name: 'Nuel Foundation', img: '/sponsors-2026/nuel-foundation.webp' },
  { name: 'Utiva', img: '/sponsors-2026/utiva.webp' },
  { name: 'Technical.ly', img: '/sponsors-2026/technically.webp' },
  { name: 'Jumpstart2Tech', img: '/sponsors-2026/jumpstart2tech.webp' },
  { name: 'RapidLabz', img: '/sponsors-2026/rapidlabz.webp' },
  { name: 'The Fintech Center', img: '/sponsors-2026/fintech-center.webp' },
  { name: 'Clarence M. Mitchell, Jr. School of Engineering', img: '/sponsors-2026/mitchell-engineering.webp' },
  { name: 'Earl G. Graves School of Business & Management', img: '/sponsors-2026/graves-business.webp' },
  { name: 'CECE', img: '/sponsors-2026/cece.webp' },
  { name: 'Herbiestech', img: '/sponsors-2026/herbiestech.webp' },
  { name: 'Beacon Printz', img: '/sponsors-2026/beacon-printz.webp' },
  { name: 'HAX Lab', img: '/sponsors-2026/hax-lab.webp' },
  { name: 'ACE: AI Club Engineers', img: '/sponsors-2026/ace.webp' },
  { name: 'Student Government Association', img: '/sponsors-2026/sga.webp' }
]

export const FaqQuestionsAnswers = [
  {
    question: `What is the ${eventInfo.year} theme?`,
    answer: `The theme for Morgan TechFest ${eventInfo.year} is coming soon. It will be announced here and on our social channels.`
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
    question: 'What is the Tech Case Competition?',
    answer: 'Student teams take on a real-world case, work out where technology can make a practical difference, and pitch their solution to faculty and industry judges. The case, format, and prizes for each edition are published on the Tech Case page when the competition opens.'
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
    answer: `The ${eventInfo.venue} at ${eventInfo.city}. It is an in-person event on ${eventInfo.date}.`
  },
  {
    question: 'How do I register?',
    answer: 'Registration for Morgan TechFest 2027 opens soon. Once it does, the Register Now button at the top of this page will take you straight to the form.'
  }
]
