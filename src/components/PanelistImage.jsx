
const PanelistImage = ({img, name}) => {
    return (
      <div className="relative flex-shrink-0" 
        data-aos='fade-up'
        data-aos-easing='linear'
        data-aos-duration='1000'
      >
          <img src={img} alt="speakerImg" className=" w-[280px] md:w-[300px] rounded-tl-3xl h-[300px] md:h-[250px] object-cover object-center relative" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white text-center p-4 z-20">
              <p className="font-semibold">{name}</p>
          </div>
      </div>
    )
  }
  
  export default PanelistImage