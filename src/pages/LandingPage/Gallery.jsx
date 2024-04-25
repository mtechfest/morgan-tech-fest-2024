import Container from "../../components/Container"
import gallery4 from "../../assets/gallery4.png"
import gallery5 from "../../assets/gallery5.png"
import gallery6 from "../../assets/gallery6.png"
import gallery7 from "../../assets/gallery7.png"
import gallery8 from "../../assets/gallery8.png"
import gallery9 from "../../assets/gallery9.png"
import gallery10 from "../../assets/gallery10.png"
import gallery11 from "../../assets/gallery11.png"
import gallery12 from "../../assets/gallery12.png"


const Gallery = () => {
  return (
    <div className="bg-[#1e3d76] text-white py-20">
        <Container>
            <p className="font-semibold">GALLERY</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-3">
                {/* <img 
                    src={gallery1} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain"
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                />
                <img 
                    src={gallery2} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain" 
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                />
                <img 
                    src={gallery3} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain" 
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                /> */}
                <img 
                    src={gallery4} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain" 
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                />
                <img 
                    src={gallery5} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain" 
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                />
                <img 
                    src={gallery6} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain" 
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                />
                <img 
                    src={gallery7} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain"
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                />
                <img 
                    src={gallery8} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain"
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000' 
                />
                <img 
                    src={gallery9} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain" 
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                />
                <img 
                    src={gallery10} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain"
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                />
                <img 
                    src={gallery11} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain"
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000' 
                />
                <img 
                    src={gallery12} 
                    alt="gallery" 
                    className="md:w-[500px] md:h-[300px] object-cover md:object-contain" 
                    data-aos='fade-up'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                />
            </div>
            <div className="flex justify-center">
            <a href={'https://seethroughmylens.pixieset.com/morgantechfest/'} target="_blank" rel="noopener noreferrer" 
                className='px-8 py-1 mt-7 bg-[#FC711B] rounded-3xl text-xs font-semibold text-white'
                data-aos='fade-up'
                data-aos-easing='linear'
                data-aos-duration='1000'
            >
                SEE MORE
            </a>
            </div>
        </Container>
    </div>
  )
}

export default Gallery