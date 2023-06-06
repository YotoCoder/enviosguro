import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 z-[1000] lg:py-1 lg:pt-2 z-1000 drop-shadow-xl sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about">¿QUIENES SOMOS?</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                SERVICIOS
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a className="" href="#procedimiento">Remesas a venezuela</a>
                </li>
                <li>
                  <a className="" href="#procedimiento">Remesas a otros paises </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">CONTACTO</a>
            </li>
          </ul>
        </div>
        <div >
            {/* <a className="btn btn-ghost normal-case text-xl">Envios Guro SAC</a> */}
            <a href="#" className="">
            <img src="/images/logo.png" className=" btn btn-ghost normal-case"  />
            </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex lg:flex-col">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-bold" href="#about" >¿QUIÉNES SOMOS?</a>
          </li>
          <li tabIndex={0} className="">
            <a className="font-bold">
              SERVICIOS
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-white">
              <li>
                <a href="#procedimiento">Remesas a venezuela</a>
              </li>
              <li>
                <a href="#procedimiento">Remesas a otros paises </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="font-bold" href="#contact">CONTACTO</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn w-full md:w-1/2" href="#procedimiento">¿CÓMO ENVÍO UNA REMESA?</Link>
      </div>
    </div>
  );
};

export default Navbar;
