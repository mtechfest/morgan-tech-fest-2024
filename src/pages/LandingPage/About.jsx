import Container from "../../components/Container"


const About = () => {
  return (
    <div className="w-full bg-[#1e3d76] py-24" name='aboutUs'>
        <Container className={'flex flex-col lg:flex-row lg:items-center gap-10 text-white'}>
            <div 
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='800'
            > 
                <p className="font-bold text-4xl pb-8">WHO WE ARE</p>
                <div className="text-sm">
                    <p className="pb-5">Morgan TechFest is a student-led tech conference powered by the computer science department at Morgan State University.</p>
                    <p>Morgan TechFest focuses on educating students about the influence of technology on their career paths, facilitating networking with tech experts, enabling job opportunities in the tech industry, and recognizing outstanding tech-innovative research through poster showcases and awards.</p>
                </div>
                {/* <button className='mt-4 px-8 py-1 bg-[#FC711B] rounded-3xl text-xs font-semibold text-white'>CONTACT</button> */}
            </div>
            <div 
                className="youtube-video-container"
                data-aos='flip-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='800'
            >
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rbUvsSZRNnI?si=2awKHrGYyGn9_6j6"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </Container>
    </div>
  )
}

export default About