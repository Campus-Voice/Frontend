import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import inso from "/Assets/Images/INSO.jpeg";
import AISA from "/Assets/Images/AISA.jpg";
import GGSU from "/Assets/Images/GGSU.jpg";
import images from "/Assets/Images/images.jpeg";
import NSO from "/Assets/Images/NSO.jpeg";
import PUSU from "/Assets/Images/PUSU.jpg";
import "./scrollbar.css"

function Recommendations() {
    // Array of followings
    const followings = [{
        logo: inso,
        name: "INSO",
        members: 680,
        link: "community/pu/inso"
    },
    {
        logo: AISA,
        name: "AISA",
        members: 380,
        link: "community/pu/aisa"
    },
    {
        logo: GGSU,
        name: "GGSU",
        members: 580,
        link: "community/pu/ggsu"
    },
    {
        logo: images,
        name: "HPSU",
        members: 840,
        link: "community/pu/hpsu"
    },
    {
        logo: PUSU,
        name: "PUSU",
        members: 580,
        link: "community/pu/pusu"
    },];

    return (
        <aside className='bg-black sticky px-5 top-16 z-50 text-white divide-gray-400 divide-opacity-80 divide-y-2 font-Roboto overflow-y-auto' style={{ height: "calc(100vh - 64px)" }}>
            <article className='my-communities flex flex-col py-4'>
                <h2 className='font-Oswald text-xl text-themeTwo mb-4'>
                    Explore them
                </h2>
                {followings.map((following, index) => (
                    <NavLink
                        key={index}
                        to={following.link}
                        className={({ isActive }) =>
                            `${isActive ? "bg-opacity-30 hover:bg-opacity-30" : "bg-opacity-0 hover:bg-opacity-10"} 
              flex items-center justify-between px-4 py-2 bg-white rounded-full transition-all duration-200`
                        }
                    >
                        <div className="party flex space-x-2">
                            <div className="logo w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${following.logo})` }}></div>
                            <div className="text">
                                <div className="name font-Oswald">
                                    {following.name}
                                </div>
                                <div className="members font-extralight">
                                    {following.members} members
                                </div>
                            </div>
                        </div>
                        <div className="join font-bold text-xl bg-white bg-opacity-0 hover:bg-opacity-30 transition-all duration-200 p-1 rounded-full">
                            <IoIosAddCircleOutline />
                        </div>
                    </NavLink>
                ))}
            </article>
        </aside>
    )
}

export default Recommendations
