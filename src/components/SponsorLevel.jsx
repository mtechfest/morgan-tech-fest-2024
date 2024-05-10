import gold from '../assets/gold.png'
import bloomberg from '../assets/bloomberg.png'
import silver from '../assets/silver.png'
import google from '../assets/google.png'
import capitalOne from '../assets/capitalOne.png'
import mandt from '../assets/m&t.png'
import kyndryl from '../assets/kyndryl.png'
import microsoft from '../assets/microsoft.png'

const SponsorLevel = () => {
  return (
    <div className='lg:pl-16 py-16'>
        <div className="flex flex-col items-center md:grid grid-cols-4 gap-10 pb-10">
            <div className="col-span-1">
                <img 
                    src={gold} 
                    alt=""
                    // data-aos='fade-right'
                    // data-aos-easing='linear'
                    // data-aos-duration='1000'
                />
            </div>
            <div className="col-span-2 md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <img 
                        src={bloomberg} 
                        alt="" 
                        className='w-[320px] object-cover' 
                        // data-aos='fade-right'
                        // data-aos-easing='linear'
                        // data-aos-duration='1000'
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center md:grid grid-cols-4 gap-10">
            <div className="col-span-1">
                <img 
                    src={silver} 
                    alt="" 
                    className='w-[80px] object-cover'
                    data-aos='fade-right'
                    data-aos-easing='linear'
                    data-aos-duration='1000'
                />
            </div>
            <div className="col-span-2 md:col-span-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <img 
                        src={google} 
                        alt="" 
                        className='w-[320px] object-cover'
                        // data-aos='fade-right'
                        // data-aos-easing='linear'
                        // data-aos-duration='1000'
                    />
                    <img 
                        src={capitalOne} 
                        alt="" 
                        className='w-[320px] object-cover'
                        // data-aos='fade-right'
                        // data-aos-easing='linear'
                        // data-aos-duration='1000'
                    />
                    <img 
                        src={mandt} 
                        alt="" 
                        className='w-[320px] object-cover'
                        // data-aos='fade-right'
                        // data-aos-easing='linear'
                        // data-aos-duration='1000'
                    />
                    <img 
                        src={kyndryl} 
                        alt="" 
                        className='w-[320px] object-cover'
                        // data-aos='fade-right'
                        // data-aos-easing='linear'
                        // data-aos-duration='1000'
                    />
                    <img 
                        src={microsoft} 
                        alt="" 
                        className='w-[320px] object-cover'
                        // data-aos='fade-right'
                        // data-aos-easing='linear'
                        // data-aos-duration='1000' 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SponsorLevel