import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaRegHeart, FaUser } from "react-icons/fa";
import carLogo from "../assets/car-logo.png";

export default function Navbar() {
  return (
    <header className="bg-[#0B1220] text-white px-6 md:px-12 py-4 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={carLogo}
          alt="Imodoka Hub Logo"
          className="w-14 h-14 rounded-full bg-white p-2 shadow-md object-contain"
        />
        <span className="text-2xl md:text-3xl font-semibold">
          Imodoka <span className="text-green-400">Hub</span>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-8 items-center">
        <Link
          to="/"
          className="px-4 py-2 rounded transition-colors font-semibold hover:bg-green-500 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/inventory"
          className="px-4 py-2 rounded transition-colors font-semibold hover:bg-green-500 hover:text-white"
        >
          Inventory
        </Link>

        {/* Dropdown Menu - More */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="flex items-center gap-1 px-4 py-2 rounded transition-colors font-semibold hover:bg-green-500 hover:text-white">
              More
              <ChevronDownIcon aria-hidden="true" className="w-4 h-4 mt-1" />
            </MenuButton>
          </div>

          <MenuItems className="absolute left-0 z-10 mt-2 w-44 origin-top-left divide-y divide-gray-100 rounded-md bg-white text-black shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/about-us"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    About Us
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/contact"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    Contact Us
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/blog"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    Blog Posts
                  </Link>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </nav>

      {/* Favorites and Login */}
      <div className="flex items-center gap-6">
        {/* Favorites */}
        <button className="flex items-center gap-1 text-white hover:text-red-500 transition-colors">
          <FaRegHeart className="text-xl" />
          <span className="text-sm font-semibold">0</span>
          <span className="ml-1 text-sm">Favorites</span>
        </button>
        {/* Login/Profile */}
        <button className="flex items-center gap-1 text-white hover:text-green-400 transition-colors">
          <FaUser className="text-lg" />
          <span className="text-sm font-semibold">Login</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
