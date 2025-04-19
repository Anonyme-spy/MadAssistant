import { NavLink } from "react-router-dom";
import FrenchFlag from "../assets/flag-for-flag-france-svgrepo-com.svg";
import UkFlag from "../assets/united-kingdom-uk-svgrepo-com.svg";
import Language from "../composer/Language.jsx";

export const NavBar = () => {
  return (
    <nav className=" border-gray-200 bg-[#2663DEFF]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse" id="navbar-logo">
          <img src="/logo-removebg-preview.png" className="h-[50px]" alt="Flowbite Logo" />
          <span
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MadAssistant</span>
        </NavLink>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button type="button" data-dropdown-toggle="language-dropdown-menu"
                  className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff"
                    strokeWidth="300" />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              <g fill="#fff">
                <g id="d">
                  <g id="c">
                    <g id="e">
                      <g id="b">
                        <path id="a"
                              d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                        <use xlinkHref="#a" y="420" />
                        <use xlinkHref="#a" y="840" />
                        <use xlinkHref="#a" y="1260" />
                      </g>
                      <use xlinkHref="#a" y="1680" />
                    </g>
                    <use xlinkHref="#b" x="247" y="210" />
                  </g>
                  <use xlinkHref="#c" x="494" />
                </g>
                <use xlinkHref="#d" x="988" />
                <use xlinkHref="#c" x="1976" />
                <use xlinkHref="#e" x="2470" />
              </g>
            </svg>
            English (US)
          </button>
          {/*Dropdown*/}
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700"
            id="language-dropdown-menu">
            <ul className="py-2 font-medium" role="none">
              <li>
                <Language img={UkFlag} lg={"English (UK)"} />
              </li>
              <li>
                <Language img={FrenchFlag} lg={"Francais"} />
              </li>
            </ul>
          </div>
          <button data-collapse-toggle="navbar-language" type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-language" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:justify-center"
          id="navbar-language">
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 w-full">
            <li>
              <NavLink to="/"
                       className={`block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent  hover:bg-gray-100 md:p-0 md:dark:text-blue-500 md:hover:bg-transparent `}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"
                       className=" block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact"
                       className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
    ;
};