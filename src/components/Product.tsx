type ProductProps = {
  id: number
  name: string
  imgUrl: string
  price: number
}

const Product = ({ id, name, imgUrl, price } : ProductProps) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
      "
    >
        <img src={imgUrl} alt={name} />
        <h6 className="text-gray-500 text-sm font-extrabold mt-4">{name}</h6>
        <p className="text-accent font-light tracking-widest mt-1">{`$${price}`}</p>
    </div>
  )
}
export default Product