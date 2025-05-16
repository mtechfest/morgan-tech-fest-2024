import Container from "../../components/Container"
import ImageSlider from "../../components/ImageSlider"
import s1 from "../../assets/s1.png"
import s2 from "../../assets/s2.png"
import s3 from "../../assets/s3.png"
import s4 from "../../assets/s4.png"
import s5 from "../../assets/s5.png"
import s6 from "../../assets/s6.png"
import s7 from "../../assets/s7.png"
import s8 from "../../assets/s8.png"
import s9 from "../../assets/s9.png"
import s10 from "../../assets/s10.png"
import s11 from "../../assets/s11.png"




 const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11]

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
                        It&apos;s time to turn your ideas into reality and showcase your brilliance at our Innovation Expo! Whether you&apos;re passionate about coding, engineering, or conducting groundbreaking research, this is your chance to shine. <br />
                        Start building your projects, conducting research, and preparing to blow minds! We are excited to see your work and celebrate you! Cash and prizes to be won. <br />
                        If you are interested, let us know by filling out the interest form below.
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4">
                    <a href="https://drive.google.com/file/d/1J428uCP_iUStcLGoHiZOm-k26Si0qAzd/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className='px-8 py-2 bg-[#FC711B] rounded-3xl text-xs font-semibold whitespace-nowrap text-white border border-[#FC711B]'>Click for More Details</button></a>
                    <a href={'https://form.jotform.com/233056575770057'} target="_blank" rel="noopener noreferrer" className='py-2 px-7 border border-white rounded-3xl text-xs whitespace-nowrap'>Registration Form</a>
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
