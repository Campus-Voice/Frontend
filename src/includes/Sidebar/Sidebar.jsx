import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { AiOutlineRise } from "react-icons/ai";
import { IoSchoolSharp } from "react-icons/io5";
import abvp from "/Assets/Images/ABVP.jpg";
import nsui from "/Assets/Images/NSUI.jpg";
import cyss from "/Assets/Images/CYSS.jpg";
import soi from "/Assets/Images/SOI.png";
import sopu from "/Assets/Images/SOPU.jpg";
import "./scrollbar.css"

function MenuElement({ text, link, component }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `${isActive ? "bg-opacity-30 hover:bg-opacity-30" : "bg-opacity-0 hover:bg-opacity-10"} 
        flex space-x-2 items-center px-4 py-3 bg-white rounded-full transition-all duration-200`
      }
    >
      <span className='text-2xl text-themeTwo'>
        {component}
      </span>
      <span>{text}</span>
    </NavLink>
  );
}

function Sidebar() {

  // Array of followings
  const followings = [{
    logo: abvp,
    name: "ABVP",
    members: 890,
    link: "community/pu/abvp"
  },
    {
      logo: nsui,
      name: "NSUI",
      members: 1270,
      link: "community/pu/nsui"
    },
    {
      logo: cyss,
      name: "CYSS",
      members: 1330,
      link: "community/pu/cyss"
    },
    {
      logo: soi,
      name: "SOI",
      members: 790,
      link: "community/pu/soi"
    },
    {
      logo: sopu,
      name: "SOPU",
      members: 660,
      link: "community/pu/sopu"
    }];

  return (
    <aside className='bg-black sticky px-5 top-16 z-50 text-white divide-gray-400 divide-opacity-80 divide-y-2 font-Roboto overflow-y-auto' style={{ height: "calc(100vh - 64px)" }}>
      <article className='menu flex flex-col py-4'>
        <MenuElement link="" text="Home" component={<IoMdHome />} />
        <MenuElement link="colleges" text="Colleges" component={<IoSchoolSharp />} />
        <MenuElement link="popular" text="Popular" component={<AiOutlineRise />} />
      </article>
      <article className='my-communities flex flex-col py-4'>
        <h2 className='flex justify-between items-center font-Oswald text-xl text-themeTwo mb-4'>
          My Communities
          <span className='bg-themeTwo rounded-full px-5 py-1 text-center text-base text-white'>
            {followings.length}
          </span>
        </h2>
        {followings.map((following, index) => (
          <NavLink
            key={index} 
            to={following.link}
            className={({ isActive }) =>
              `${isActive ? "bg-opacity-30 hover:bg-opacity-30" : "bg-opacity-0 hover:bg-opacity-10"} 
              flex space-x-2 items-center px-4 py-3 bg-white rounded-full transition-all duration-200`
            }
          >
            <div className="logo w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${following.logo})` }}></div>
            <div className="text">
              <div className="name font-Oswald">
                {following.name}
              </div>
              <div className="members font-extralight">
                {following.members} members
              </div>
            </div>
          </NavLink>
        ))}
      </article>
      <article className='my-communities flex flex-col py-4'>
        <h2 className='flex justify-between items-center font-Oswald text-xl text-themeTwo mb-4'>
          My Communities
          <span className='bg-themeTwo rounded-full px-5 py-1 text-center text-base text-white'>
            {followings.length}
          </span>
        </h2>
        {followings.map((following, index) => (
          <NavLink
            key={index} 
            to={following.link}
            className={({ isActive }) =>
              `${isActive ? "bg-opacity-30 hover:bg-opacity-30" : "bg-opacity-0 hover:bg-opacity-10"} 
              flex space-x-2 items-center px-4 py-3 bg-white rounded-full transition-all duration-200`
            }
          >
            <div className="logo w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${following.logo})` }}></div>
            <div className="text">
              <div className="name font-Oswald">
                {following.name}
              </div>
              <div className="members font-extralight">
                {following.members} members
              </div>
            </div>
          </NavLink>
        ))}
      </article>
    </aside>
  );
}

export default Sidebar;
