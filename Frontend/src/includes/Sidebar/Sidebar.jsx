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
import DT from "/Assets/Images/DevyanshThakur.jpeg";
import JS from "/Assets/Images/Jatinder-Singh.avif";
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
  class NavElements {
    constructor(image, name, followers, link) {
      this.image = image;
      this.name = name;
      this.followers = followers;
      this.link = link;
    }
  }
  // Array of followings
  const followings = [
    new NavElements(abvp, 'ABVP', 890, 'community/pu/abvp'),
    new NavElements(nsui, 'NSUI', 1270, 'community/pu/nsui'),
    new NavElements(cyss, 'CYSS', 1330, 'community/pu/cyss'),
    new NavElements(soi, 'SOI', 790, 'community/pu/soi'),
    new NavElements(sopu, 'SOPU', 660, 'community/pu/sopu')
  ];
  // Array of personalities
  const personalities = [
    new NavElements(DT, 'Divyansh Thakur', 435, 'community/pu/DivyanshThakur'),
    new NavElements(JS,"Jatinder Singh" ,632,"community/pu/JS"),
  ];
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
            <div className="logo w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${following.image})` }}></div>
            <div className="text">
              <div className="name font-Oswald">
                {following.name}
              </div>
              <div className="members font-extralight">
                {following.followers} members
              </div>
            </div>
          </NavLink>
        ))}
      </article>
      <article className='my-individuals flex flex-col py-4'>
        <h2 className='flex justify-between items-center font-Oswald text-xl text-themeTwo mb-4'>
          Followings
          <span className='bg-themeTwo rounded-full px-5 py-1 text-center text-base text-white'>
            {personalities.length}
          </span>
        </h2>
        {personalities.map((following, index) => (
          <NavLink
            key={index}
            to={following.link}
            className={({ isActive }) =>
              `${isActive ? "bg-opacity-30 hover:bg-opacity-30" : "bg-opacity-0 hover:bg-opacity-10"} 
              flex space-x-2 items-center px-4 py-3 bg-white rounded-full transition-all duration-200`
            }
          >
            <div className="logo w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${following.image})` }}></div>
            <div className="text">
              <div className="name font-Oswald">
                {following.name}
              </div>
              <div className="members font-extralight">
                {following.followers} members
              </div>
            </div>
          </NavLink>
        ))}
      </article>
    </aside>
  );
}
export default Sidebar;
