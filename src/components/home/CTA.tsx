import Button from "../Button"
import ctaImage from "../../assets/images/ctaImg.png"

const CTA = () => {
  return (
    <div
      className="
        relative
        bg-light/30
        px-32
        py-16
        mx-[12.5%]
        mt-48
      "
    >
      <div
        className="
          flex
          flex-col
          justify-center
          items-start
        "
      >
        <h2>YOU DESERVE THE BEST</h2>
        <p className="text-gray-500 font-light mt-4">Subcribe & get <strong className="text-accent font-bold">10% discount</strong></p>
        <Button label="Subscribe" onClick={() => {}} />
      </div>
      <img 
          className="
          absolute
          w-[45%]
          bottom-1
          right-1
        "
        src={ctaImage} alt="plant pot" />
    </div>
  )
}
export default CTA