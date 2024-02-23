import { IoCartOutline } from "react-icons/io5"

import { Outlet, NavLink } from "react-router-dom"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="logo">CER<strong>AVASE</strong></div>
        <div className="nav-links">
          <NavLink className="nav-link active" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/blog">Blog</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </div>
        <div className="shopping-cart"><IoCartOutline className="icon" /></div>
      </nav>

      {/* Outlet */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </>    
  )
}
export default Layout