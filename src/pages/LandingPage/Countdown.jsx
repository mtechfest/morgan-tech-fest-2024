import { useEffect, useState } from "react";
// Container component
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Custom calendar icon
const CalendarIcon = ({ className = "" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.89-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
);

// Custom map marker icon
const MapIcon = ({ className = "" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const Countdown = () => {

    const features = ["TECH TALK", "WORKSHOP", "JOB FAIR", "POSTER SESSION", "AWARD", "NETWORKING", "PANEL SESSION", "PROJECT"]

    const eventDate = new Date("September 26, 2026 00:00:00 GMT+00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div name='schedule' className="">
        <div className='bg-white pt-10'>
            <Container className={'flex flex-col justify-center items-center text-[#122644] py-20'}>
                <p 
                  className="font-semibold text-sm md:text-lg pb-5" 
                  data-aos='fade-down'
                  data-aos-easing='linear'
                  data-aos-duration='1000'>JOIN US FOR OUR UPCOMING EVENT!</p>
                <p 
                  data-aos='fade-down'
                  data-aos-easing='linear'
                  data-aos-duration='1000'
                  className="font-semibold text-center text-2xl md:text-4xl"
                >A  World of Innovation</p>
                <div className="flex items-center gap-5 md:gap-20 p-3 font-semibold my-7 md:mt-16 md:mb-12">
                    <div className="flex flex-col items-center gap-5 leading-7">
                        <p className="text-[#FC711B] text-5xl ">{timeLeft.days}</p>
                        <p className="text-xs ">DAYS</p>
                    </div>
                    <div className="flex flex-col items-center gap-5 leading-7">
                        <p className="text-[#FC711B] text-5xl">{timeLeft.hours}</p>
                        <p className="text-xs">HOURS</p>
                    </div>
                    <div className="flex flex-col items-center gap-5 leading-7">
                        <p className="text-[#FC711B] text-5xl">{timeLeft.minutes}</p>
                        <p className="text-xs">MINUTES</p>
                    </div>
                    <div className="flex flex-col items-center gap-5 leading-7">
                        <p className="text-[#FC711B] text-5xl">{timeLeft.seconds}</p>
                        <p className="text-xs">SECONDS</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-center ">
                    <div className="flex items-center gap-3 "
                      data-aos='zoom-out'
                      data-aos-easing='linear'
                      data-aos-duration='1000'
                    >
                        <CalendarIcon />
                        <p>September 26, 2026</p>
                    </div>
                    <div className="flex items-center gap-3"
                      data-aos='zoom-out'
                      data-aos-easing='linear'
                      data-aos-duration='1000'
                    >
                        <MapIcon className="text-[1.5rem] md:text-base" />
                        <p className="text-center md:text-start">Morgan State University Student Center - Calvin & Tina Tyler Ballroom</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 w-[95%] lg:w-[70%] xl:w-[65%] mx-auto my-10">
                    {features.map((feature, index) => {
                        return (
                            <div key={index} className=""
                              data-aos='fade-up'
                              data-aos-easing='linear'
                              data-aos-duration='1000'
                            >
                                <p className="whitespace-nowrap text-sm font-semibold border-2 rounded-3xl flex items-center justify-center border-[#122644] px-6 md:px-3 py-1">{feature}</p>
                            </div>
                        )
                    })}
                </div>
                <button 
                  data-aos='fade-up'
                  data-aos-easing='linear'
                  data-aos-duration='1000'
                className='px-4 py-2 bg-[#FC711B] rounded-3xl text-xs font-semibold text-white'>COMING SOON</button>
                
            </Container>
        </div>
    </div>
  )
}

export default Countdown
