import { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";

export default function Navbar() {
  const navItems = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/services",
      link: "Services",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/blogs",
      link: "Blogs",
    },
    {
      path: "/contact",
      link: "Contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-black text-white fixed left-0 right-0">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-bold text-white">
            Design <span className="text-orange-500">DK</span>
          </a>
          {/* navitems for lg devices*/}
          <ul className="md:flex gap-12 text-lg hidden">
            {navItems.map((item) => {
              return (
                <li key={item.path} className="text-white">
                  <NavLink
                    to={item.path}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {item.link}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/* menu icons */}
          <div className="text-white lg:flex gap-4 items-center hidden">
            <a href="/" className="hover:text-orange-500">
              <FaFacebook />
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaTwitter />
            </a>
            <button
              className="bg-orange-500 px-6 py-2 rounded-md font-medium hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
              onClick={openModal}
            >
              Log in
            </button>
          </div>

          {/* Modal component */}
          <Modal onClose={closeModal} isModalOpen={isModalOpen} />

          {/* mobile menu button, dispaly moible screen */}
          <div className="md:hidden mt-3">
            <button className="cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="size-5" />
              ) : (
                <FaBars className="size-5" />
              )}
            </button>
          </div>
        </nav>

        {/* menu items only for mobile */}
        <div className="md:hidden bg-black absolute  top-16 w-full px-4 py-2">
          {isMenuOpen && (
            <>
              <ul className="">
                {navItems.map((item) => {
                  return (
                    <li
                      key={item.path}
                      className="text-white px-4 py-2"
                      onClick={toggleMenu}
                    >
                      <NavLink to={item.path}>{item.link}</NavLink>
                    </li>
                  );
                })}
              </ul>
              <button className="bg-orange-500 px-6 py-2 rounded-md font-medium hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
                Log in
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}
