export default function SellInfo() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-800 py-12 sm:py-16 px-4">
      <div
        className="group relative cursor-pointer overflow-hidden bg-white dark:bg-gray-900 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 dark:ring-gray-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
        data-aos="fade-up"
      >
        {/* Animated background circle */}
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]"></span>

        <div className="relative z-10 mx-auto max-w-md">
          {/* Icon circle */}
          <span className="grid h-20 w-20 place-items-center rounded-full bg-green-500 transition-all duration-300 group-hover:bg-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </span>

          {/* Content */}
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-white/90">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-white">
              Want to Sell Your Car?
            </h3>
            <p>
              Get top value for your vehicle with our hassle-free selling
              process. We offer fair valuations, quick payments, and handle all
              paperwork.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a
                href="#"
                className="text-green-600 dark:text-green-400 transition-all duration-300 group-hover:text-white"
              >
                Get a Free Valuation &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
