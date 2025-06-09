
// theme
import { Button, Container } from '../../components'
import Icon from "../../icons"

const TopBar = props => {
    const { className = "", ...rest } = props

    return (
        <section id="top-bar" className={`bg-[#f5f5f5] py-[5px] ${className}`} {...rest}>
            <Container>
                <div className='flex justify-between items-center'>
                    <ul className='flex'>
                        <li>
                            <Button variant='info'>
                                <Icon name="facebook" className="w-[0.875em] inline-block text-inherit h-[1em] align-[-0.125em] mr-[6px]" />
                                Facebook
                            </Button>
                        </li>

                        <li className="ml-[1rem]">
                            <Button variant='info'>
                                <Icon name="instagram" className="w-[0.875em] inline-block text-inherit h-[1em] align-[-0.125em] mr-[6px]" />
                                Instagram
                            </Button>
                        </li>
                    </ul>

                    <ul className='flex'>
                        <li>
                            <Button variant='info'>
                                <Icon name="phone" className="w-[0.875em] inline-block text-inherit h-[1em] align-[-0.125em] mr-[6px]" />
                                01790-003132
                            </Button>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default TopBar