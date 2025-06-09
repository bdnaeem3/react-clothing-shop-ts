const baseStyles = 'cursor-pointer';

const variantStyles = {
    primary: 'bg-[#d73977] text-white rounded px-[20px] py-[7px] hover:bg-[#e10e60]',
    info: 'text-[#757575] text-sm',
    link: 'text-[#007bff] text-base leading-6 hover:text-[#0056b3]',
};

const Button = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    disabled = false,
    className = '',
}) => {

    console.log('variantStyles[variant]', variantStyles[variant]);
    

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles[variant] ? variantStyles[variant] : variantStyles['primary']}`}
        >
            {children}
        </button>
    );
};

export default Button;