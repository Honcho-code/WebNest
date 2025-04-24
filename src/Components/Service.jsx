import { useEffect, useState } from "react";
import { Layout, Code, Smartphone, Zap } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import clsx from "clsx";

const Service = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('');
  const useIsmobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isMobile;
  };
  const isMobile = useIsmobile();

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const handleNext = () => {
    setDirection("left");
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setDirection("right");
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  const services = [
    {
      icon: <Layout className="h-10 w-10 text-blue-600" />,
      title: "Custom Website Design",
      description:
        "Bespoke website designs tailored to your brand identity and business goals, creating a unique online presence.",
      imageUrl: "https://placehold.co/400x300",
    },
    {
      icon: <Code className="h-10 w-10 text-blue-600" />,
      title: "Web Application Development",
      description:
        "Powerful, scalable web applications built with modern frameworks to streamline your business operations.",
      imageUrl: "https://placehold.co/400x300",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-blue-600" />,
      title: "Responsive Mobile Design",
      description:
        "Mobile-first websites that provide an optimal viewing experience across all devices and screen sizes.",
      imageUrl: "https://placehold.co/400x300",
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Performance Optimization",
      description:
        "Speed optimization to ensure your website loads quickly, improving user experience and SEO rankings.",
      imageUrl: "https://placehold.co/400x300",
    },
  ];
  return (
    <div className="px-4 md:px-32 lg:px-60 md:py-9" id="service">
      <div>
        <h2 className="headline-2 font-bold">
          Our Service
        </h2>
        <p className="text-gray-500 text-sm md:text-xl">
          Varieties of services we offer
        </p>
      </div>
      <div className="mt-5">
        {isMobile ? (
          <div {...swipeHandlers}className="relative overflow-hidden h-48">
            <div
              className={clsx(
                "bg-slate-100 p-4 rounded items-center mt-2 md:mt-0",
                direction === "left" && "animate-slideLeft",
                direction === "right" && "animate-slideRight"
              )}
              key={current}
            >
              <div>{services[current].icon}</div>
              <h2 className="text-xl font-semibold py-3">
                {services[current].title}
              </h2>
              <h2>{services[current].description}</h2>
            </div>
          </div>
        ) : (
          <div className="block md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 ">
            {services.map((serv, index) => (
              <div
                key={index}
                className="bg-slate-100 p-4 rounded items-center mt-2 md:mt-0"
              >
                <div>{serv.icon}</div>
                <h2 className="text-xl font-semibold py-3">{serv.title}</h2>
                <h2>{serv.description}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
