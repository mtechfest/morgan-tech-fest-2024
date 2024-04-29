import Container from "../../components/Container"
import ImageSlider from "../../components/ImageSlider"
import s1 from "../../assets/s1.png"
import s2 from "../../assets/s2.png"
import s3 from "../../assets/s3.png"

 const images = [s1, s2, s3]

const ResearchSymposium = () => {
  return (
    <div className="w-full bg-[#122644] py-24" name='symposium'>
        <Container className={'flex flex-col lg:flex-row lg:items-center gap-10 text-white'}>
            <div 
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='800'
            > 
                <p className="font-bold text-2xl xl:text-4xl pb-8">INNOVATION EXPO</p>
                <div className="text-sm">
                    <p className="pb-5">
                        Calling All Innovators!<br />
                        Are you ready to revolutionize the tech world?<br />
                        It&apos;s time to turn your ideas into reality and showcase your brilliance at our Research Symposium and Tech Showcase! Whether you&apos;re passionate about coding, engineering, or creating the next big thing, this is your chance to shine. <br />
                        Start crafting your projects, conducting groundbreaking research, and preparing to blow minds! We are excited to see your work and celebrate you! Lots of cash and prizes to be won. <br />
                        Click below to learn more and join us on this exciting journey!.
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4">
                    <button className='px-8 py-2 bg-[#FC711B] rounded-3xl text-xs font-semibold whitespace-nowrap text-white border border-[#FC711B]'>Click for More Details</button>
                    <a href={'https://form.jotform.com/240748563822058'} target="_blank" rel="noopener noreferrer" className='py-2 px-7 border border-white rounded-3xl text-xs whitespace-nowrap'>Interest Form</a>
                </div>
            </div>
            <div 
                className=" lg:!min-w-[50%]"
                // data-aos='flip-left'
                // data-aos-easing='ease-out-cubic'
                // data-aos-duration='800'
            >
                <ImageSlider images={images} />
            </div>
        </Container>
    </div>
  )
}

export default ResearchSymposium