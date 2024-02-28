import { IoCartOutline } from "react-icons/io5"

import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav>
        <Logo />
        <div className="nav-links">
          <NavLink className="nav-link active" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/blog">Blog</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </div>
        <button className="shopping-cart"><IoCartOutline className="icon" /></button>
    </nav>
  )
}
export default Navbar