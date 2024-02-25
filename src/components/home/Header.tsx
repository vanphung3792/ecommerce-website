import planPot from '../../assets/images/plantPot.png'
import Button from '../Button'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-text'>
        <h1>Feel Free</h1>
        <h1><span className='text-secondary'>Plant</span> a New Tree</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod, ullam accusamus magnam eaque ad magni animi aspernatur impedit n</p>
        <Button label='DISCOVER' onClick={() => {}} />
      </div>
      <div className='header-image'>
        <img src={planPot} alt="plant pot" />
      </div>
    </div>
  )
}
export default Header