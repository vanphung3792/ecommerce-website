import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link
      className="
        text-3xl
        font-serif
        text-accent
        font-extralight
      "
      to="/">
        <span className="font-bold text-5xl">Plant</span>ies.
      </Link>
  )
}
export default Logo