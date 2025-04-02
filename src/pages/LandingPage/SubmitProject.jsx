import { IoIosArrowForward } from "react-icons/io"
import Container from "../../components/Container"
import submit from "../../assets/submit.png"


const SubmitProject = () => {
  return (
    <div className="bg-[#122644] py-20">
        <Container className={'flex flex-col md:items-center gap-10 md:gap-3 lg:gap-10 md:flex-row justify-between text-white'}>
            <div
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='800'
            >
                <p className="font-semibold text-3xl lg:text-5xl lg:leading-[60px]">Submit Your Project Here!</p>
                <a href={'https://form.jotform.com/250367598302158'} target="_blank" rel="noopener noreferrer" className='mt-5 md:mt-10 px-6 py-2 lg:py-3 bg-[#FC711B] rounded-3xl text-xs font-medium text-white inline-flex items-center gap-2'>
                    <IoIosArrowForward />
                    <span>Submit now</span>
                </a>
            </div>
            <div 
                className="md:!w-[50%]"
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='800'
            >
                <img src={submit} alt="submit" className="w-full object-cover rounded-sm" />
            </div>
        </Container>
    </div>
  )
}

export default SubmitProject
