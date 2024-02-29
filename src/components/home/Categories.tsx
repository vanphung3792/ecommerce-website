import { Link } from 'react-router-dom'
import officePlant from '../../assets/images/cactus.png'
import indoorPlant from '../../assets/images/indoorPlant.png'
import outdoorPlant from '../../assets/images/outdoorPlant.png'

const Categories = () => {
  return (
    <div className="categories">
        <h2>SHOP BY CATEGORIES</h2>
        <div className="category">
          <Link to={'/'} className='outdoor-plants row-span-2 bg-green-900/10'>
            <h3>OUTDOOR PLANTS</h3>
            <img src={outdoorPlant} alt="outdoor plant" />
          </Link>
          <Link to={'/'} className='indoor-plants bg-violet-900/10'>
            <h3>INDOOR PLANTS</h3>
            <img src={indoorPlant} alt="indoor plant" />
          </Link>
          <Link to={'/'} className='office-plants bg-orange-900/10'>
            <h3>OFFICE PLANTS</h3>
            <img src={officePlant} alt="office plant" />
          </Link>
        </div>
    </div>
  )
}
export default Categories