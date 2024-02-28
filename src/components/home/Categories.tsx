import { Link } from 'react-router-dom'
import officePlant from '../../assets/images/cactus.png'
import indoorPlant from '../../assets/images/indoorPlant.png'
import outdoorPlant from '../../assets/images/outdoorPlant.png'

const Categories = () => {
  return (
    <div className="categories">
        <h1>SHOP BY CATEGORIES</h1>
        <div className="category">
          <Link to={'/'} className='outdoor-plants row-span-2 bg-green-900/10'>
            <h2>OUTDOOR PLANTS</h2>
            <img src={outdoorPlant} alt="outdoor plant" />
          </Link>
          <Link to={'/'} className='indoor-plants bg-violet-900/10'>
            <h2>INDOOR PLANTS</h2>
            <img src={indoorPlant} alt="indoor plant" />
          </Link>
          <Link to={'/'} className='office-plants bg-orange-900/10'>
            <h2>OFFICE PLANTS</h2>
            <img src={officePlant} alt="office plant" />
          </Link>
        </div>
    </div>
  )
}
export default Categories