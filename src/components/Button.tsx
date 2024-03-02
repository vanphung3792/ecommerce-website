type ButtonProps = {
    label: string;
    onClick: () => void;
    secondary?: boolean;
}

const Button = ({ label, onClick, secondary }: ButtonProps) => {
  return (
    <button
        className={`
          px-4
          py-2
          mt-8
          rounded-sm
          font-semibold
          transition
          duration-300
          ease-in-out
          ${secondary ? 'bg-white border-[1px] border-accent text-accent' : 'bg-accent text-white'}
        `} 
        onClick={onClick} >
        {label}
    </button>
  )
}

export default Button