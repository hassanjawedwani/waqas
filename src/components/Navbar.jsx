import React, { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [collapse, setCollapse] = useState(false);
  console.log(collapse);
  return (
    <div className="w-full py-3 px-10 shadow">
      <div className="lg:max-w-7xl  text-colorText1 mx-auto flex justify-between items-center ">
        <Link to="/">
          <div id="brand" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="w-14 h-14 mr-4 "
            />
            <span className="text-lg font-bold">Tagofy - Map Camera</span>
          </div>
        </Link>
        <nav className="hidden lg:flex">
          <ul className="flex font-semibold gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-colorText2 ${
                    isActive ? "text-colorText2" : "text-colorText1"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-colorText2 ${
                    isActive ? "text-colorText2" : "text-colorText1"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `hover:text-colorText2 ${
                    isActive ? "text-colorText2" : "text-colorText1"
                  }`
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/screens"
                className={({ isActive }) =>
                  `hover:text-colorText2 ${
                    isActive ? "text-colorText2" : "text-colorText1"
                  }`
                }
              >
                Screens
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how-to-use"
                className={({ isActive }) =>
                  `hover:text-colorText2 ${
                    isActive ? "text-colorText2" : "text-colorText1"
                  }`
                }
              >
                How to Use
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  `hover:text-colorText2 ${
                    isActive ? "text-colorText2" : "text-colorText1"
                  }`
                }
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `hover:text-colorText2 ${
                    isActive ? "text-colorText2" : "text-colorText1"
                  }`
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </nav>

        <div id="appBtn" className="hidden lg:flex">
          <a
            href="https://play.google.com/store/apps/details?id=com.gps.photo.geo.capture.location.map.time.stamp&pli=1"
            target="_blank"
          >
            <img
              src="/assets/playstore.svg"
              alt="logo"
              className="w-14 h-14 mr-4 rounded-2xl"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.gps.photo.geo.capture.location.map.time.stamp&pli=1"
            target="_blank"
          >
            <img
              src="/assets/appstore.svg"
              alt="logo"
              className="w-14 h-14 rounded-2xl "
            />
          </a>
        </div>

        <button
          className="flex lg:hidden cursor-pointer"
          onClick={() => setCollapse((prevValue) => !prevValue)}
          aria-label="Toggle navigation menu"
        >
          <img
            src="/assets/burger.svg"
            alt="mobile-menu"
            className="w-8 h-8 rounded-2xl"
          />
        </button>
      </div>
      {collapse && (
        <div id="collapseNav" className="mt-6 leading-4 ">
          <nav>
            <ul className="flex flex-col font-semibold gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-colorText2 ${
                      isActive ? "text-colorText2" : "text-colorText1"
                    }`
                  }
                  onClick={() => setCollapse(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-colorText2 ${
                      isActive ? "text-colorText2" : "text-colorText1"
                    }`
                  }
                  onClick={() => setCollapse(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/features"
                  className={({ isActive }) =>
                    `hover:text-colorText2 ${
                      isActive ? "text-colorText2" : "text-colorText1"
                    }`
                  }
                  onClick={() => setCollapse(false)}
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/screens"
                  className={({ isActive }) =>
                    `hover:text-colorText2 ${
                      isActive ? "text-colorText2" : "text-colorText1"
                    }`
                  }
                  onClick={() => setCollapse(false)}
                >
                  Screens
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/how-to-use"
                  className={({ isActive }) =>
                    `hover:text-colorText2 ${
                      isActive ? "text-colorText2" : "text-colorText1"
                    }`
                  }
                  onClick={() => setCollapse(false)}
                >
                  How to Use
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    `hover:text-colorText2 ${
                      isActive ? "text-colorText2" : "text-colorText1"
                    }`
                  }
                  onClick={() => setCollapse(false)}
                >
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `hover:text-colorText2 ${
                      isActive ? "text-colorText2" : "text-colorText1"
                    }`
                  }
                  onClick={() => setCollapse(false)}
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
