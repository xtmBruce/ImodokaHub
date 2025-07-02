import aboutImage from "../assets/about.jpg";
import { useEffect } from "react";
import "aos/dist/aos.css"; // Make sure to install AOS: npm install aos

export default function About() {
  useEffect(() => {
    // Initialize AOS animation library using dynamic imports
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 600,
        easing: "ease-out-quad",
        once: true,
        offset: 100,
      });
    };

    initAOS();
  }, []);

  return (
    <section className="bg-white py-14 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with slide-in from left animation */}
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-offset="200"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl opacity-75 z-0" />
              <img
                src={aboutImage}
                alt="Our Team"
                className="relative z-10 w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>

          {/* Content with slide-in from right animation */}
          <div
            className="order-1 lg:order-2 max-w-lg mx-auto lg:mx-0"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-offset="200"
          >
            <span className="text-green-500 font-semibold text-lg mb-2 block">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Driving Excellence in{" "}
              <span className="text-green-500">Automotive Solutions</span>
            </h2>

            <div className="space-y-4 text-gray-600">
              <p className="text-base sm:text-lg leading-relaxed">
                Founded with a passion for automobiles, we've grown into
                Rwanda's premier car rental and automotive service provider. Our
                journey began with a simple mission: to deliver exceptional
                mobility solutions.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Today, we combine cutting-edge technology with personalized
                service to ensure every journey is seamless, comfortable, and
                memorable.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                className="flex items-center justify-center bg-blue-500 text-white gap-1 px-6 py-3 cursor-pointer font-medium rounded-lg hover:bg-green-500 duration-300 hover:gap-2 hover:translate-x-3 transition-all"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Learn More
                <svg
                  className="w-5 h-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <a
                href="#"
                className="flex items-center justify-center px-6 py-3 border border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-700 font-medium rounded-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Meet Our Team
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
