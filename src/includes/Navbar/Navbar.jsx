import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function NavElement({ component, link }) {
  return (
    <NavLink to={link} className="hover:bg-opacity-30 bg-white bg-opacity-0 transition-opacity p-2 rounded-full">
      {component}
    </NavLink>
  )
}
function Navbar() {
  const [inputValue, setInputValue] = useState("")
  function handleSearchChange(e) {
    setInputValue(e.target.value)
  }
  function clearChange() {
    setInputValue("")
  }
  return (
    <nav className='bg-themeFive text-themeTwo flex justify-between px-10 py-3 items-center border-b border-gray-400 text-xl sticky top-0 z-50 h-16'>
      <div className="logo">
        Logo
      </div>
      <div className="searchbar space-x-4 bg-white bg-opacity-30 rounded-full px-4 w-[clamp(50px,30vw,100rem)] flex items-center justify-start text-white hover:bg-opacity-40 transition-opacity focus-within:bg-opacity-10">
        <label htmlFor="search"><IoIosSearch /></label>
        <input type="search" name="search" id="search" placeholder='Search' value={inputValue} className='bg-transparent outline-none flex-1 py-2 text-base' onChange={handleSearchChange} autoComplete='off' />
        {inputValue && <button onClick={clearChange} className='p-1 transition-opacity bg-opacity-0 hover:bg-opacity-40 rounded-full bg-white'><ImCancelCircle /></button>}
      </div>
      <div className="user font-Bebas flex space-x-4">
        <NavElement link='/messages' component={<AiOutlineMessage />} />
        <NavElement link='/notifications' component={<IoMdNotifications />} />
        <NavElement link='/profile' component={<FaUser />} />
      </div>
    </nav>
  )
}

export default Navbar