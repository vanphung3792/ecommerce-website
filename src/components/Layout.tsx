
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Outlet */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>    
  )
}
export default Layout