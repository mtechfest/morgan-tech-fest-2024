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
                    <p className="pb-5">
                      Morgan TechFest is a student-led technology conference that educates students on the impact of technology in shaping their career paths, inspires them through tech talks, projects, and research expos, empowers them with mentorship and career opportunities, and bridges the gap between academia and industry.
                    </p>
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
                    src="https://youtu.be/MLX3J9nk0cI"
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
