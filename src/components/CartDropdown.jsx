import { Button } from "../components"

const CartDropdown = props => {
    const { items = [], className = "", onCheckoutClick, ...rest } = props

    return (
        <div
            className={`absolute top-0 right-0 will-change-transform w-[350px] bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)] z-[1000] border border-[rgba(0,0,0,0.15)] float-left min-w-[10rem] py-2 px-0 mt-[0.125rem] text-base text-[#212529] text-left ${className}`}
            style={{
                transform: `translate3d(18px, 64px, 0px)`
            }}
            x-placement="bottom-end"
            {...rest}
        >
            {
                items.map(item => {
                    return (
                        <div
                            className="flex items-center p-[10px] border-b border-b-[#f1f1f1]"
                            key={item?.id}
                        >
                            <img src={item.img} alt="" className="max-h-[100px] min-h-[25px]" />
                            <div className="margin: 0 10px;">
                                <a href={item.url} className="p-0 !text-[#2b2e32] block">
                                    {item?.title}
                                </a>
                                <p>{item.quantity} x {item.price} = {item.price * item.quantity}</p>
                            </div>
                        </div>
                    )
                })
            }

            <div className="flex items-center justify-center my-[10px]">
                <Button onClick={onCheckoutClick}>
                    Checkout
                </Button>
            </div>
        </div>
    )
}

export default CartDropdown;