import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Shopcontext } from "../context/Shopcontext";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const { search, showsearch, setshowsearch, cartCount } = useContext(Shopcontext);

  return (
    <div className="items-center flex justify-between py-6  font-medium">
      <Link><img className="w-32" src={assets.logo} alt="Logo" /></Link>
      <ul className="sm:flex hidden gap-5 md:text-base text-xs text-gray-800">
        <NavLink
          to="/"
          className={(e) =>
            e.isActive
              ? "text-red-500  flex flex-col items-center gap-1"
              : "flex"
          }>
          <p className="font-[600]">HOME</p>
          <hr className="w-[60%] h-[1.5px]  border-none bg-gray-900" />
        </NavLink>
        <NavLink
          to="/collection"
          className={(e) =>
            e.isActive
              ? "text-red-500 flex flex-col items-center gap-1"
              : "flex "
          }>
          <p className="font-[600]">COLLECTION</p>
          <hr className="w-[60%] h-[1.5px]  border-none bg-gray-900" />
        </NavLink>
        <NavLink
          to="/about"
          className={(e) =>
            e.isActive
              ? "text-red-500 flex flex-col items-center gap-1"
              : "flex "
          }>
          <p className="font-[600]">ABOUT</p>
          <hr className="w-[60%] h-[1.5px] border-none bg-gray-900" />
        </NavLink>
        <NavLink
          to="/contact"
          className={(e) =>
            e.isActive
              ? "text-red-500 flex  flex-col items-center gap-1"
              : "flex "
          }>
          <p className="font-[600]">CONTACT</p>
          <hr className="w-[60%] h-[1.5px] border-none bg-gray-900" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={() => setshowsearch(prev => !prev)} className="w-4 cursor-pointer" src={assets.search_icon} alt="" />
        <div className="group relative ">
          <Link><img className="w-4 cursor-pointer" src={assets.profile_icon} alt="" /></Link>
          <div className="relative group">
            <div className="hidden absolute dropdown-menu right-0 pt-5 group-hover:block">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-grey-900">
                <Link to={"/"} className="cursor-pointer hover:text-slate-500">My Profile</Link>
                <Link to={"/orders"} className="cursor-pointer hover:text-slate-500">Orders</Link>
                <Link to={"/Login"} className="cursor-pointer hover:text-slate-500">Logout</Link>
              </div>
            </div>
          </div>
        </div>

        <Link className="cursor-pointer flex relative" to={"/cart"}>
          <img className="w-5" src={assets.cart_icon} alt="" />
          <div className="absolute text-xs w-[1rem] text-center right-[-10%] bottom-[-20%]  rounded-full bg-black text-white ">
            {cartCount()}
          </div>
        </Link>

        {/* Fix here: Wrap setvisible in a function for onClick */}
        <img onClick={() => setvisible(prev => !prev)} className="w-6 cursor-pointer sm:hidden flex" src={assets.menu_icon} alt="IMGpart1" />
      </div>

      {/* sidebar component for menu button */}
      <div className={`absolute top-0 right-0 bottom-0 flex sm:hidden overflow-hidden bg-white transition-all duration-500 ${visible ? "w-full" : "w-0"} `}>
        <div className="flex flex-col w-full text-gray-600 ">
          <div onClick={() => setvisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="w-2 rotate-180" src={assets.dropdown_icon} alt="" />
            <p className="text-lg text-gray-600">Back</p>
          </div>
          <NavLink onClick={() => setvisible(false)} to={"/"} className={(e) => e.isActive ? "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white" : "border pl-6 py-2 "}>HOME</NavLink>
          <NavLink onClick={() => setvisible(false)} to={"/collection"} className={(e) => e.isActive ? "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white" : "border pl-6 py-2 "}>COLLECTION</NavLink>
          <NavLink onClick={() => setvisible(false)} to={"/about"} className={(e) => e.isActive ? "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white" : "border pl-6 py-2 "}>ABOUT</NavLink>
          <NavLink onClick={() => setvisible(false)} to={"/contact"} className={(e) => e.isActive ? "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white" : "border pl-6 py-2 "}>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
