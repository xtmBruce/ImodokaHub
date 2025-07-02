import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { FaRegHeart, FaUser } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0B1220] text-white px-6 md:px-12 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-2xl md:text-3xl font-semibold">
          Imodoka<span className="text-green-400">Hub</span>
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4 lg:gap-8 items-center">
        <Link
          to="/"
          className="px-3 py-2 rounded transition-colors font-medium hover:bg-green-500 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/inventory"
          className="px-3 py-2 rounded transition-colors font-medium hover:bg-green-500 hover:text-white"
        >
          Inventory
        </Link>

        {/* Dropdown Menu - More */}
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center gap-1 px-3 py-2 rounded transition-colors font-medium hover:bg-green-500 hover:text-white">
            More
            <ChevronDownIcon aria-hidden="true" className="w-4 h-4 mt-1" />
          </MenuButton>
          <MenuItems className="absolute left-0 z-10 mt-2 w-44 origin-top-left rounded-md bg-white text-black shadow-lg ring-1 ring-black/5 focus:outline-none">
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

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center gap-4">
        <button className="text-white">
          <FaRegHeart className="text-xl" />
        </button>
        <button
          className="text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Desktop Login/Favorites */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <button className="flex items-center gap-1 text-white hover:text-red-500 transition-colors">
          <FaRegHeart className="text-xl" />
          <span className="text-sm font-medium">0</span>
          <span className="ml-1 text-sm hidden lg:inline">Favorites</span>
        </button>
        <button className="flex items-center gap-1 text-white hover:text-green-400 transition-colors">
          <FaUser className="text-lg" />
          <span className="text-sm font-medium">Login</span>
          <ChevronDownIcon className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B1220] shadow-lg py-4 px-6 z-40">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="px-4 py-2 rounded transition-colors font-medium hover:bg-green-500 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/inventory"
              className="px-4 py-2 rounded transition-colors font-medium hover:bg-green-500 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link
              to="/about-us"
              className="px-4 py-2 rounded transition-colors font-medium hover:bg-green-500 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded transition-colors font-medium hover:bg-green-500 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/blog"
              className="px-4 py-2 rounded transition-colors font-medium hover:bg-green-500 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog Posts
            </Link>
            <div className="pt-4 border-t border-gray-700 flex justify-between">
              <button className="flex items-center gap-2 text-white">
                <FaRegHeart className="text-xl" />
                <span>Favorites (0)</span>
              </button>
              <button className="flex items-center gap-2 text-white">
                <FaUser className="text-lg" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
