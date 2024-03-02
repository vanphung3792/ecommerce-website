import { Link } from 'react-router-dom'
import officePlant from '../../assets/images/cactus.png'
import indoorPlant from '../../assets/images/indoorPlant.png'
import outdoorPlant from '../../assets/images/outdoorPlant.png'

const Categories = () => {

  const link = `
    flex
    flex-row
    justify-between
    items-center
    gap-2
    px-8
    pt-4
    font-serif
    text-lg
    text-accent
  `
  const img = `
    w-[85%]
    object-contain
  `
  return (
    <div
      className='
        flex
        flex-col
        items-center
        gap-16
        mt-32
      '
    >
        <h2>SHOP BY CATEGORIES</h2>
        <div
          className='
            grid
            grid-cols-2
            gap-4
            w-[50%]
          '
        >
          <Link to={'/'} className={`${link} row-span-2 bg-green-900/10`}>
            <h3>OUTDOOR PLANTS</h3>
            <img className={img} src={outdoorPlant} alt="outdoor plant" />
          </Link>
          <Link to={'/'} className={`${link} bg-violet-900/10`}>
            <h3>INDOOR PLANTS</h3>
            <img className={img} src={indoorPlant} alt="indoor plant" />
          </Link>
          <Link to={'/'} className={`${link} bg-orange-900/10`}>
            <h3>OFFICE PLANTS</h3>
            <img className={img} src={officePlant} alt="office plant" />
          </Link>
        </div>
    </div>
  )
}
export default Categories