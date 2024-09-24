import jos from '../assets/jos.png';
import aws from '../assets/aws.png';
import oracle from '../assets/oracle.png';
import scholarly from '../assets/scholarly.png';
import timeless from '../assets/timeless.png';
import msu from '../assets/msu.png';
import altus from '../assets/AltusTech.png';
import rtc from '../assets/RTC__Logo Orange.png';
import mlh from '../assets/mlh-logo-color.png';
import y3k from '../assets/Y3K.jpg';




const Partners = () => {
  return (
    <div>
        <div 
          className="flex items-center gap-3"
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1000'
        >
            <p className="font-semibold whitespace-nowrap">2024 PARTNERS</p>
            <hr className="border-t border-black w-full ml-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 py-6">
            <img 
              src={altus} 
              alt="partner" 
              className='w-[130px] h-[150px] object-contain' 
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            <img 
              src={rtc} 
              alt="partner" 
              className='w-[130px] h-[150px] object-contain' 
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            <img 
              src={mlh} 
              alt="partner" 
              className='w-[130px] h-[150px] object-contain' 
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            <img 
              src={y3k} 
              alt="partner" 
              className='w-[130px] h-[150px] object-contain' 
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            {/*
            <img 
              src={aws} 
              alt="partner" 
              className='w-[200px] h-[150px] object-contain' 
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            <img 
              src={oracle} 
              alt="partner" 
              className='w-[200px] h-[150px] object-contain'
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            <img 
              src={scholarly} 
              alt="partner" 
              className='w-[200px] h-[150px] object-contain'  
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            <img 
              src={timeless} 
              alt="partner" 
              className='w-[200px] h-[150px] object-contain' 
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            <img 
              src={msu} 
              alt="partner" 
              className='w-[200px] h-[150px] object-contain'  
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            /> */}
        </div>
    </div>
  )
}

export default Partners