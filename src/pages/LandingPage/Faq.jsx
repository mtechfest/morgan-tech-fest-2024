import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";


const Faq = () => {
  const [isOpen, setIsOpen] = useState(Array(5).fill(false));

  const toggleQuestion = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  const faqData = [
    {
      question: "What is Morgan TechFest?",
      answer:
        "Morgan TechFest is a one-day in-person student-led tech conference that brings together developers, researchers, and tech enthusiasts across universities in the US.",
    },
    {
      question: "Who is eligible to participate in Morgan TechFest?",
      answer:
        "University students (undergraduate, graduate, & postgraduate)",
    },
    {
      question: "Which specific domain of research does Morgan TechFest emphasize?",
      answer:
        "All tech-related research (AI, VR, Blockchain, Software Development, Robotics etc.)",
    },
    {
      question: "Are there any accolades presented for exceptional contributions during the Innovation Expo?",
      answer: "Yes. We award the best 3 projects.",
    },
    {
      question: "Is Morgan TechFest accessible to all university students?",
      answer:
        "Yes! We invite all students to join us at the National Treasure, Morgan State University",
    },
    {
      question: "How do I register for Morgan TechFest?",
      answer:
        "Just click on the registration button on this page and fill out the form.",
    },
    {
      question: "What steps can I take to engage my university in Morgan TechFest?",
      answer:
        "Connect us with your university or department, and we will take it from there.",
    },
    {
      question: "What if I am doing nothing related to technology? Can I come?",
      answer:
        "Yes! Morgan TechFest is open to anyone interested in developing a career or business in the tech space. We have put together robust educational programs to help anyone interested in starting a career or business in the field.",
    },
    {
      question: "When is Morgan TechFest?",
      answer:
        "It is a one-day event on September 28, 2024 from 8am-6pm",
    },
    {
      question: "Are provisions like breakfast, lunch, and dinner included?",
      answer:
        "Yes! Food and drinks are available, and we also do our best to accommodate all kinds of dietary restrictions",
    },
    {
      question: "How do I get there?",
      answer:
        "We may provide transportation support through your university, department, and student organization.",
    },
    {
      question: "Is Morgan TechFest free?",
      answer:
        "Yes. It's free and made for all students.",
    },
    {
      question: "Is Morgan TechFest in-person?",
      answer:
        "Yes! It is an in-person event.",
    },
    {
      question: "Location?",
      answer:
        "Morgan Business Center - Graves School of Business and Management 4100 Hillen Rd. Baltimore, MD 21218.",
    },
    {
      question: "Is it specific to any department?",
      answer:
        "No. In fact, we want to expose you to how technology is altering your field and how you can switch or channel your career towards it.",
    },
    {
      question: "Any other opportunities?",
      answer:
        "Certainly! There are numerous additional opportunities beyond that. You have the chance to engage in networking sessions with seasoned tech professionals, explore job openings within the tech industry, receive recognition for your groundbreaking tech-driven research and innovative techology projects, and connect with a vibrant community of fellow students, developers, and researchers.",
    },
  ];

  return (
    <div className="bg-[#F1ECF1]" 
    name='faqs'
    data-aos='fade-down'
    data-aos-easing='linear'
    data-aos-duration='1000'
    >
        <div className={'py-20 w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[50%] mx-auto'} >
        <h2 className="text-[#FC711B] text-5xl font-medium text-center pb-12">FAQs</h2>
        {faqData.map((faq, index) => (
            <div key={index} className="mb-10">
            <div className="flex items-center justify-between gap-9 md:gap-4 mb-2 text-[#122644]">
                <p className="font-semibold">{faq.question}</p>
                <div
                    className={`w-10 h-10 min-w-[40px] border border-[#122644] rounded-full flex items-center justify-center mr-3 cursor-pointer`}
                    onClick={() => toggleQuestion(index)}
                >
                {isOpen[index] ? (
                    <FaArrowUp  />
                ) : (
                    <FaArrowDown  />
                )}
                </div>
            </div>
            {isOpen[index] && (
                <div>
                <p className="text-sm pr-8">{faq.answer}</p>
                </div>
            )}
            </div>
        ))}
        </div>
    </div>
  );
};

export default Faq;
