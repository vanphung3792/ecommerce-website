import { Link } from "react-router-dom"
import Logo from "./Logo"

const Footer = () => {

  const currentYear = new Date().getFullYear()
  return (
    <footer className="mt-16">
      <div
        className="
          bg-light/50
          px-[5%]
          py-8
          grid
          grid-cols-2
          gap-8
          text-sm
          text-gray-500
          pb-[100px]
        "
      >

        {/* Left */}
        <div
          className="
            flex
            flex-col
            gap-4
            w-[70%]
          "
        >
          <Logo />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit fuga a tempora inventore minus voluptas voluptatem incidunt.</p>
        </div>

        {/* Right */}
        <div
          className="
            flex
            flex-row
            justify-between
            gap-8
            w-[85%]
          "
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-bold text-accent">Services</h3>
            <ul className="flex flex-col">
              <Link to="/planting">Planting</Link>
              <Link to="/gardening">Gardening</Link>
              <Link to="/lanscaping">Landscaping</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-bold text-accent">Products</h3>
            <ul className="flex flex-col">
              <Link to="/planting">Interior</Link>
              <Link to="/gardening">Extorior</Link>
              <Link to="/lanscaping">Office</Link>
            </ul>
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-bold text-accent">Contact</h3>
            <ul className="flex flex-col">
              <p>123 Main Street, Ottawa, ON, K2P 5L8</p>
              <p>123-456-7890</p>
              <p>planties@example.com</p>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-sm tracking-widest text-gray-500 py-4">
          © Planties, {currentYear}. All rights reserved
        </p>
      </div>
    </footer>
  )
}
export default Footer