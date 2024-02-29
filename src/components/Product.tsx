import plant from '../assets/images/cactus.png'

type ProductProps = {
  id: number
  name: string
  imgUrl: string
  price: number
}

const Product = ({ id, name, imgUrl, price } : ProductProps) => {
  return (
    <div>
        <img src={imgUrl} alt={name} />
        <h6>{name}</h6>
        <p>{`$${price}`}</p>
    </div>
  )
}
export default Product