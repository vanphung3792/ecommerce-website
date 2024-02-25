const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-body">
        {/* Left */}
        <div className="footer-left">
          <div className="logo">Planty.</div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit fuga a tempora inventore minus voluptas voluptatem incidunt.</p>
        </div>
        {/* Right */}
        <div className="footer-right">
          <div className="footer-services">
            <h3>Services</h3>
            <ul>
              <a href="/">Planting</a>
              <a href="/">Gardening</a>
              <a href="/">Landscaping</a>
            </ul>
          </div>
          <div className="footer-categories">
            <h3>Products</h3>
            <ul>
              <a href="/">Interior</a>
              <a href="/">Extorior</a>
              <a href="/">Office</a>
            </ul>
          </div>
          {/* Contact */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <ul>
              <p>123 Main Street, Ottawa, ON, K2P 5L8</p>
              <p>123-456-7890</p>
              <p>planty@example.com</p>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="footer-rights">© Planty, {currentYear}. All rights reserved</p>
      </div>
    </footer>
  )
}
export default Footer