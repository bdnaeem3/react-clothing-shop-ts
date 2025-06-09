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
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${variantStyles[variant] ?? variantStyles['primary']} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
