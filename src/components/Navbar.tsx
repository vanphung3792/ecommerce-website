import { IoCartOutline } from "react-icons/io5"

import { NavLink } from "react-router-dom"
import Logo from "./Logo"

const Navbar = () => {

  return (
    <nav
      className="
        flex
        flex-row
        items-center
        justify-between
        w-full
        h-[60px]
        px-[5%]
        fixed
        z-50
        bg-white/50
        shadow-md
      "
    >
        <Logo />
        <div
          className="
            flex
            flex-row
            text-lg
            gap-8
            divide-x-2
            divide-secondary/50
          "
        >
          <NavLink className="nav-link active" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/blog">Blog</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </div>
        <button
          className="
            border-[1px]
            border-gray-700
            text-gray-700
            rounded-full
            p-2 
          "
        >
          <IoCartOutline className="icon" />
        </button>
    </nav>
  )
}
export default Navbar