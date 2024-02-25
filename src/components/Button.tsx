type ButtonProps = {
    label: string;
    onClick: () => void;
    secondary?: boolean;
}

const Button = ({ label, onClick, secondary }: ButtonProps) => {
  return (
    <button
        className={`
            btn
            ${secondary ? 'btn-secondary' : ''}
        `} 
        onClick={onClick} >
        {label}
    </button>
  )
}

export default Button