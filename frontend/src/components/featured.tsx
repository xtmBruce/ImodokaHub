import landRover from "../assets/featured/Land-Rover-Range-Rover-Sport-2014.jpg";
import mercedesC43 from "../assets/featured/Mercedes-Benz-C43-AMG-Coupe-2019.jpg";
import camry from "../assets/featured/Toyota-Camry-2018.jpg";
import hilux from "../assets/featured/Toyota-Hilux-Special-Edition-2019-.jpg";
import landCruiser from "../assets/featured/Toyota-Land-Cruiser-2013.jpg";
import passat from "../assets/featured/Volkswagen-Passat-2015.jpg";

import { FaTachometerAlt, FaCogs } from "react-icons/fa";
import { BsSpeedometer2 } from "react-icons/bs";

const featuredCars = [
  {
    name: "Range Rover Sport",
    year: "2014",
    price: "24,000,000 RWF",
    mileage: "95,000 km",
    transmission: "Automatic",
    engine: "5.0L",
    image: landRover,
  },
  {
    name: "Mercedes-Benz C43 AMG",
    year: "2019",
    price: "39,500,000 RWF",
    mileage: "58,000 km",
    transmission: "Automatic",
    engine: "3.0L",
    image: mercedesC43,
  },
  {
    name: "Toyota Camry",
    year: "2018",
    price: "21,800,000 RWF",
    mileage: "88,000 km",
    transmission: "Automatic",
    engine: "2.5L",
    image: camry,
  },
  {
    name: "Toyota Hilux Special Edition",
    year: "2019",
    price: "34,000,000 RWF",
    mileage: "60,000 km",
    transmission: "Manual",
    engine: "2.8L",
    image: hilux,
  },
  {
    name: "Toyota Land Cruiser",
    year: "2013",
    price: "42,000,000 RWF",
    mileage: "110,000 km",
    transmission: "Automatic",
    engine: "4.5L",
    image: landCruiser,
  },
  {
    name: "Volkswagen Passat",
    year: "2015",
    price: "19,000,000 RWF",
    mileage: "75,000 km",
    transmission: "Automatic",
    engine: "2.0L",
    image: passat,
  },
];

export default function Featured() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured Vehicles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {featuredCars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:shadow-xl taos:translate-y-[100%] taos:opacity-0 duration-[600ms]"
            data-taos-offset="300"
            data-taos-id={`car-${index}`}
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Info Section */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
              <p className="text-green-600 font-bold text-lg mb-2">
                {car.price}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Build year: {car.year}
              </p>

              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <FaTachometerAlt className="text-gray-500" />
                  {car.mileage}
                </div>
                <div className="flex items-center gap-1">
                  <FaCogs className="text-gray-500" />
                  {car.transmission}
                </div>
                <div className="flex items-center gap-1">
                  <BsSpeedometer2 className="text-gray-500" />
                  {car.engine}
                </div>
              </div>

              <button className="inline-block w-full cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
