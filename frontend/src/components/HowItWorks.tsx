import { useEffect } from "react";
import "aos/dist/aos.css";

export default function HowItWorks() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 800,
        easing: "ease-out-quad",
        once: true,
        offset: 100,
      });
    };

    initAOS();
  }, []);

  return (
    <section
      className="py-20 overflow-hidden bg-gray-100 dark:bg-gray-800"
      data-aos="fade-up"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center -mx-5">
            {/* Left Column - Text Content */}
            <div
              className="w-full lg:w-1/2 px-5 mb-16 lg:mb-0"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="max-w-md">
                <span
                  className="text-lg font-bold text-green-600 dark:text-green-400"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Simple Process
                </span>
                <h2
                  className="mt-8 mb-6 text-4xl sm:text-5xl font-extrabold leading-tight text-gray-800 dark:text-gray-200"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  Buy Your Dream Car in 4 Easy Steps
                </h2>
                <p
                  className="mb-10 text-lg text-gray-600 dark:text-gray-400"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Our streamlined process makes car buying simple and
                  stress-free.
                </p>
                <a
                  className="inline-block px-8 py-3 sm:px-12 sm:py-4 text-white font-bold bg-green-600 hover:bg-green-700 rounded-full shadow-lg transition duration-200 transform hover:scale-105"
                  href="#"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  Browse Inventory
                </a>
              </div>
            </div>

            {/* Right Column - Steps List */}
            <div
              className="w-full lg:w-1/2 px-5"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <ul>
                {[
                  {
                    title: "Create Your Account",
                    description:
                      "Register in minutes to access our full inventory and save favorites.",
                  },
                  {
                    title: "Browse Our Collection",
                    description:
                      "Explore certified vehicles with detailed specs and 360° views.",
                  },
                  {
                    title: "Secure Payment",
                    description:
                      "Complete purchase with our protected payment system and financing options.",
                  },
                  {
                    title: "Receive Your Vehicle",
                    description:
                      "Get delivery or pickup with full documentation and warranty.",
                  },
                ].map((step, index) => (
                  <li
                    key={index}
                    className="flex pb-8 mb-6 sm:pb-10 sm:mb-8 border-b border-gray-200 dark:border-gray-700"
                    data-aos="fade-up"
                    data-aos-delay={350 + index * 100}
                  >
                    <div className="mr-6 sm:mr-8">
                      <span className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 bg-green-200/50 dark:bg-green-600/30 text-lg font-bold rounded-full text-green-600 dark:text-green-300">
                        {index + 1}
                      </span>
                    </div>
                    <div className="max-w-xs">
                      <h3 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-300">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
