import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const About = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.3
    })
  return (
    <div className='px-4 md:px-32 lg:px-60 py-10 md:py-9' id='about'>
        <div className='p-4 md:p-6 py-10 bg-slate-100  flex flex-col md:gap-10 gap-5'>
            <p className='text-sm md:text-lg font-normal md:w-9/12 rounded'>At WebNest, we specialize in crafting clean, modern, and fully responsive websites that help brands grow online. Our focus is on creating stunning digital experiences that not only look great but perform flawlessly. Whether you're a startup or an established business, we bring your ideas to life with creativity, strategy, and precision.</p>
            <div className='flex justify-between items-center' >
                <div className='flex items-center gap-5 stats-section' ref={ref}>
                    <div className={`${inView ? 'slide-up' : ''}`}>
                        <p className='font-semibold text-lg md:text-2xl mb-3'>
                            {inView && <CountUp end={25} duration={10} suffix='+'/>}
                        </p>
                        <p>Project Completed</p>
                    </div>
                    <div className={`${inView ? 'slide-up' : ''}`}>
                        <p className='font-semibold text-lg md:text-2xl mb-3'>
                            {inView && <CountUp end={42} duration={10} suffix='+'/>}
                        </p>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
                <img src="../images/favicon.svg" alt="" className="hidden md:block"/>
            </div>
        </div>
    </div>
  )
}

export default About
