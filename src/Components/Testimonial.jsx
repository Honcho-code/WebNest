import { useRef, useEffect, useState } from "react";
import "./TestimonialSlider.css";

const Testimonial = () => {
    const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && slider) {
          slider.scrollLeft += 1;

          // Loop back to start when end is reached
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
          }
        }
      }, 20); // Lower = faster
    };

    startScroll();

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

      const testimonials = [
        {
          name: "Chioma A.",
          message:
            "WebNest turned my rough vision into a beautiful, functional website that speaks directly to my brand. Their design sense is unmatched!",
        },
        {
          name: "Kene E.",
          message:
            "I’ve worked with developers before, but WebNest was different. Their professionalism, creativity, and attention to detail really blew me away.",
        },
        {
          name: "Anita J.",
          message:
            "From the first meeting to launch, everything was seamless. I love how WebNest handled feedback quickly and with great ideas.",
        },
        {
          name: "Uche M.",
          message:
            "The team at WebNest delivered our business site on time, with perfect responsiveness and sleek animations. I highly recommend them!",
        },
        {
          name: "Seyi B.",
          message:
            "Working with WebNest was a breeze. They truly listened, offered expert guidance, and built something far better than we imagined.",
        },
        {
          name: "Gloria F.",
          message:
            "Our bakery now has an online presence we’re proud of — thanks to WebNest! Clients keep complimenting how professional our website looks.",
        },
        {
          name: "David K.",
          message:
            "WebNest is not just a developer, they’re a creative partner. The project was smooth, and their support after launch has been incredible.",
        },
      ];
  return <div className="px-4 md:px-32 lg:px-60 md:py-9" id="testemonial">
    <div className="mb-2">
        <h2 className='headline-2 font-semibold '>Customers Review</h2>
        <p className='text-sm md:text-lg'>Feedback from our satisfied and returning clients</p>
    </div>
    <div
      className="testimonial-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between overflow-x-auto gap-2 testimonial-slider" ref={sliderRef}>
        {testimonials.map((t, index) => (
          <div className="testimonial-card w-full md:w-80 lg:w-96 bg-slate-100" key={index}>
            <p className="testimonial-message">"{t.message}"</p>
            <h4 className="testimonial-name">- {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>;
};

export default Testimonial;
