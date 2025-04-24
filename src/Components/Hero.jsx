import { useEffect, useState } from 'react'

const Hero = () => {
    const [current, setCurrent] = useState(0)
    

    const images = [
        {
            image: '../images/project-1.jpg'
        },
        {
            image: '../images/project-2.jpg'
        },
        {
            image: '../images/project-3.jpg'
        },
        {
            image: '../images/project-4.jpg'
        },
        {
            image: '../images/project-5.jpg'
        },
        {
            image: '../images/project-6.jpg'
        },
    ]
    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
          }, 4000);
          return () => clearInterval(interval);
    },[])
  return (
    <div className='px-4 md:px-32 lg:px-60 py-10 md:py-9' id='home'>
        <div className='block lg:grid md:grid-cols-2 items-center'>
            <div>
                <h2 className='text-3xl md:text-4xl w-full md:w-full lg:text-5xl font-semibold'>Building Scalable Mordern Website For Your Business</h2>
                <p className='md:text-xl text-gray-500 w-full mb-7 mt-2 lg:text-2xl lg:my-5'>Let`s grow your online presence with a fully responsive and functional website</p>
                <div className='block md:flex md:gap-3\'>
                    <a href='#contact' className=' w-full md:w-auto bg-blue-600 text-white px-5 py-3 rounded mr-3 md:mr-0'>Contact us</a>
                    <a href='#about' className='mt-5 md:mt-0  w-full md:w-auto bg-slate-100 text-gray-600 px-5 py-3 rounded'> Scroll Down</a>
                </div>
            </div>
            <div>
                <img src={images[current].image} alt="hero-image" className='hidden lg:block' />
            </div>
        </div>
    </div>
  )
}

export default Hero