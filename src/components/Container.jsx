const Container = ({ children, className = "", ...rest }) => {
    return (
        <div
            className={`w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[90%] ${className}`}
            {...rest}
        >
            {children}
        </div>
    )
}

export default Container
