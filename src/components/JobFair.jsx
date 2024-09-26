import altus from '../assets/AltusTech.png';
import rtc from '../assets/RTC__Logo Orange.png';
import mlh from '../assets/mlh-logo-color.png';
import lincoln from '../assets/lincoln.jpg';
import ripple from '../assets/ripple.png';
import google from '../assets/google.png';
import cealms from '../assets/ceamls.png';
import kyndryl from '../assets/kyndryl.png';
import aws from '../assets/aws.png';
import js2t from '../assets/JS2T.png';
import northrop from '../assets/northrop.png'



const JobFair = () => {
  return (
    <div>
        <div 
          className="flex items-center gap-3"
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1000'
        >
            <p className="font-semibold whitespace-nowrap">2024 JOB FAIR</p>
            <hr className="border-t border-black w-full ml-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 py-6">
            <img 
                src={lincoln} 
                alt="" 
                className='w-[100px] h-[150px] object-contain' 
                // data-aos='fade-right'
                // data-aos-easing='linear'
                // data-aos-duration='1000'
            />
            <img 
              src={ripple} 
              alt="partner" 
              className='w-[100px] h-[150px] object-contain' 
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            <img 
              src={google} 
              alt="partner" 
              className='w-[100px] h-[150px] object-contain' 
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
             <img 
              src={cealms} 
              alt="partner" 
              className='w-[100px] h-[150px] object-contain' 
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            
            <img 
              src={kyndryl} 
              alt="partner" 
              className='w-[100px] h-[150px] object-contain' 
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            
            <img 
              src={aws} 
              alt="partner" 
              className='w-[100px] h-[150px] object-contain'
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            <img 
              src={js2t} 
              alt="partner" 
              className='w-[100px] h-[150px] object-contain'
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            <img 
              src={northrop} 
              alt="partner" 
              className='w-[100px] h-[150px] object-contain'
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1000'
            />
            {/*
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

export default JobFair