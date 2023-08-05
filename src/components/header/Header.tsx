import React from "react";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      <div className="bg-[#5CB6FF]">
        <nav>
          <div className="justify-between px-4 pt-2   lg:max-w-7xl md:items-center md:flex md:px-1 shadow-sm ">
            <div >
              <div className="flex items-center justify-between ">
                <h1 className="pl-10 text-[40px] font-bold text-white">
                  TV ARIAS
                </h1>
                <div className="md:hidden">
                  <button
                    className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 animate-fade-left  md:space-y-0">
                  {user ? (
                    <li className=" md:flex    md:items-center  md:gap-10">
                      <div className="md:flex flex justify-center  md:items-center">
                        <img
                          src={user.image}
                          alt="Perfil"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="ml-2">{user.name}</span>
                      </div>
                      <div className="flex mt-10 md:mt-0 items-center justify-center">
                        <button onClick={handleLogout}>Cerrar Sesión</button>
                      </div>
                    </li>
                  ) : (
                    <li onClick={handleLogout}></li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
