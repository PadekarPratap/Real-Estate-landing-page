import { useState } from "react";
import logo from "../assets/images/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-realBlack text-secondary w-full h-14">
      <div className="r-container h-full flex items-center justify-between">
        {/* logo */}
        <div>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="cursor-pointer"
          >
            <img src={logo} alt="logo" width={100} />
          </Link>
        </div>

        {/* menu  */}
        <div className="hidden sm:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="residency"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="cursor-pointer"
                activeClass="active"
              >
                Residencies
              </Link>
            </li>
            <li>
              <Link
                to="val"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="cursor-pointer"
              >
                Our Value
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button className="bg-gradient-to-r from-blue to-gradientDarkBlue px-4 py-2 rounded-md font-semibold active:scale-95 hover:brightness-110 hover:scale-105 transition duration-200">
                Get Started
              </button>
            </li>
          </ul>
        </div>

        {/* mobile menu  */}
        <div className="sm:hidden block relative">
          <BiMenuAltRight size={35} onClick={() => setNavOpen(!navOpen)} />

          {/* backgorund overlay when navopen is true */}
          <div
            className={navOpen ? "fixed inset-0 w-full h-full" : null}
            onClick={() => setNavOpen(!navOpen)}
          ></div>

          <div
            className={`fixed z-10 bg-lightBlue text-black rounded-lg p-4 w-[150px] duration-200 transition-all right-[3rem] ${
              navOpen
                ? "opacity-100"
                : "opacity-0 pointer-events-none translate-x-[10px]"
            } `}
          >
            <ul className="flex flex-col items-center gap-8">
              <li>
                <Link
                  to="residency"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="text-lg font-medium font-sans"
                  onClick={() => setNavOpen(!navOpen)}
                >
                  Residencies
                </Link>
              </li>
              <li>
                <Link
                  to="val"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="text-lg font-medium font-sans"
                  onClick={() => setNavOpen(!navOpen)}
                >
                  Our Value
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavOpen(!navOpen)}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="text-lg font-medium font-sans"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <button className="bg-gradient-to-r from-blue to-gradientDarkBlue px-4 py-2 rounded-md font-semibold active:scale-95 hover:brightness-110 text-white hover:scale-105 transition duration-200">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
