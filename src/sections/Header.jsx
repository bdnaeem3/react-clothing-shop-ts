import { useEffect, useState, useRef } from "react"
import { NavLink } from "react-router";

import { Button, CartDropdown, Container, Logo } from "../components"
import Icon from "../icons"

import cartItems from "../data/cartItems.json"

const Header = () => {
    const cartRef = useRef(null)
    const buttonRef = useRef(null)
    const [cartOpen, setCartOpen] = useState(false)

    const cartOpenHandler = () => {
        setCartOpen(prev => !prev)
    }

    const handleClickOutside = (e) => {
        if (!cartRef.current) {
            return
        }

        if (!cartRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
            setCartOpen(false)
        }
    };

    // Add event listener on mount and cleanup on unmount
    useEffect(() => {
        if (!cartOpen) {
            return
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [cartOpen]);

    return (
        <section id="header" className="bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]">
            <Container>
                <div className="relative py-[10px]">
                    <div className='flex justify-between items-center'>
                        <Logo />

                        <nav className="main-menu">
                            <ul className="flex">
                                <li className="relative ml-[50px]">
                                    <NavLink
                                        to="/products"
                                        className={`!text-[#2b2e32] block py-[20px] ${({ isActive }) => isActive ? "active" : ""}`}
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li className="ml-[50px]">
                                    <a className="!text-[#2b2e32] block py-[20px] flex items-center" href="filter.html">
                                        Categories
                                    </a>
                                </li>
                                <li className="relative ml-[50px]">
                                    <a className="!text-[#2b2e32] block py-[20px]" href="login.html">User Area</a>
                                </li>
                                <li className="relative ml-[50px]">
                                    <button
                                        type="button"
                                        className="py-[20px] cursor-pointer"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                        onClick={cartOpenHandler}
                                        ref={buttonRef}
                                    >
                                        <Icon name="cart" height="18" width="16" />
                                        <span className="absolute bg-[#d8407b] text-white w-[16px] h-[16px] leading-[16px] text-center rounded-full text-[0.625rem] font-bold top-[15px] right-[-10px]">
                                            {cartItems?.data?.length}
                                        </span>
                                    </button>
                                    {
                                        cartOpen &&
                                        <CartDropdown
                                            ref={cartRef}
                                            items={cartItems.data}
                                        />
                                    }
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Header