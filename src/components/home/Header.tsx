import planPot from '../../assets/images/plantPot.png'
import Button from '../Button'

const Header = () => {

  const h1 = `
    text-6xl
    font-serif
    text-accent
  `
  return (
    <div
      className='
        min-h-screen
        grid
        grid-cols-4
        justify-center
      '
    >
      <div
        className='
          header-text
          col-span-3
          flex
          flex-col
          justify-center
          items-start
          pl-[20%]
          pt-[10%]
        '
      >
        <h1 className={h1}>Feel Free</h1>
        <h1 className={h1}>
          <span className='text-secondary'>
            Plant
          </span>
          a New Tree
        </h1>
        <p
          className='
            text-gray-500
            text-sm
            mt-8
            w-[65%]
          '
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod, ullam accusamus magnam eaque ad magni animi aspernatur impedit n
        </p>
        <Button label='DISCOVER' onClick={() => {}} />
      </div>
      <div
        className='
          bg-secondary/50
          relative
        '
      >
        <img
          className='
            absolute
            scale-125
            bottom-[8%]
            right-[65%]
          '
          src={planPot}
          alt="plant pot" />
      </div>
    </div>
  )
}
export default Header