import Product from "../Product"
import products from "../../data/products.json"

const Gallery = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-8
        mt-32
      "
    >
        <h2>OUR PRODUCTS</h2>
        <div
          className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-8
            mt-8
            w-[80%]
          "
        >
          {products.map((product, index) => (
            <div key={index}
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-4
                w-[15%]
                p-4
                bg-light/20
                shadow-lg
              "
            >
              <Product {...product} />
            </div>
          ))}
        </div>
    </div>
  )
}
export default Gallery