import Arrow from "./Arrow"
import Cart from "./Cart"
import Facebook from "./Facebook"
import Heart from "./Heart"
import Instagram from "./Instagram"
import Phone from "./Phone"
import Search from "./Search"

const Icon = props => {
    const { name, ...rest } = props

    switch (name) {
        case 'arrow':
            return <Arrow {...rest} />
        case 'cart':
            return <Cart {...rest} />
        case 'facebook':
            return <Facebook {...rest} />
        case 'heart':
            return <Heart {...rest} />
        case 'instagram':
            return <Instagram {...rest} />
        case 'phone':
            return <Phone {...rest} />
        case 'search':
            return <Search {...rest} />
        default:
            return
    }
}

export default Icon