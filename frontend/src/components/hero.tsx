import { useEffect, useRef, useState } from "react";
import heroBg from "../assets/hero-bg.jpg";
import rav4 from "../assets/rav4.jpg";
import kia from "../assets/kia.jpg";
import prius from "../assets/prius.jpg";
import c200 from "../assets/c200.jpg";

const cars = [
  {
    name: "Toyota RAV4",
    image: rav4,
    description:
      "The Toyota RAV4 is known for its reliability, comfort, and fuel efficiency. Ideal for Rwandan roads and city driving.",
  },
  {
    name: "Kia Sportage",
    image: kia,
    description:
      "Stylish and modern, the Kia Sportage offers excellent value with advanced features and sporty design.",
  },
  {
    name: "Toyota Prius",
    image: prius,
    description:
      "The Prius is a fuel-saving hybrid loved for its smooth ride and great mileage—perfect for daily commutes.",
  },
  {
    name: "Mercedes-Benz C200",
    image: c200,
    description:
      "Luxury meets performance in the C200. A premium sedan with elegant design and powerful features.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePrev = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => (prev === 0 ? cars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => (prev + 1) % cars.length);
  };

  useEffect(() => {
    if (current === cars.length) {
      setTransitionEnabled(false);
      setCurrent(0);
    } else if (current === -1) {
      setTransitionEnabled(false);
      setCurrent(cars.length - 1);
    }
  }, [current]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="w-full px-4 md:px-12 relative max-w-4xl mx-auto">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/60 hover:bg-white text-black p-2 transition hover:scale-110 shadow-md"
          aria-label="Previous"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/60 hover:bg-white text-black p-2 transition hover:scale-110 shadow-md"
          aria-label="Next"
        >
          &gt;
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              width: `${cars.length * 100}%`,
              transform: `translateX(-${current * (100 / cars.length)}%)`,
              transition: transitionEnabled
                ? "transform 1s ease-in-out"
                : "none",
            }}
          >
            {cars.map((car, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-4 py-12 md:py-24"
                style={{ width: `${100 / cars.length}%` }}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-96 h-auto object-contain drop-shadow-xl mb-4" // Increased from w-72 to w-96
                />
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4">
                  {" "}
                  {/* Reduced from text-4xl md:text-5xl */}
                  {car.name}
                </h1>
                <p className="text-white text-lg max-w-2xl mt-4">
                  {car.description}
                </p>
                <button className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-green-600 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl mt-6">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
