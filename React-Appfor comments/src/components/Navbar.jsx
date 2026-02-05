import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = ({user}) => {
    return (
        <>
            <a href="/"><p className=" logo absolute z-20 flex items-center justify-center top-7 left-10 text-[35px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl w-[300px]">CODE_TO_SEEKS </p></a>
            <header className="w-full flex justify-center mt-6 md:mt-12 lg:mt-20">
                {/* navbar pill */}
                <nav className="bg-black text-white rounded-[20px] z-10 px-12 py-4 h-17 flex items-center justify-center w-[700px] nav relative ">
                    <ul className="flex gap-20 text-[20px]">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-yellow-400 w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl" : ""
                                }
                            >   
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "text-yellow-400 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "text-yellow-400 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl" : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? "text-yellow-400 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
