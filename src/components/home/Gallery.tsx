import Product from "../Product"
import products from "../../data/products.json"

const Gallery = () => {
  return (
    <div className="gallery">
        <h2>OUR PRODUCTS</h2>
        <div className="products">
          {products.map((product, index) => (
            <div key={index} className="product">
              <Product {...product} />
            </div>
          ))}
        </div>
    </div>
  )
}
export default Gallery