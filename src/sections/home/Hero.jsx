import { useEffect, useState } from "react"

// components
import { Container, FeaturesCard } from "../../components";

// data
import heroImages from "../../data/heroImages.json"
import features from "../../data/features.json"

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(prev => {
                if (prev === heroImages.data.length - 1) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 3000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [])

    return (
        <section className="mt-[20px]">
            <Container>
                <div className="mb-[30px] pb-[30px] border-b-2 border-b-[#eaeaea]">
                    <div className="grid grid-cols-3 gap-[20px]">
                        <div className="col-span-2">
                            <img src={heroImages.data[activeSlide].img} alt="" className="h-[420px]" />
                        </div>

                        <div className="col-span-1">
                            <div className="grid grid-cols-2 gap-[20px] justify-between">
                                <button className="group col-span-2 flex items-center justify-center p-[40px] text-[1.7rem] bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)] transition-all duration-[150ms] ease-linear cursor-pointer">
                                    <img src="/public/quick-finder.svg" alt="" />
                                    <p className="mx-[30px]">Quick Finder</p>
                                    <img src="/public/arrow-right.svg" alt="" className="group-hover:ml-[20px] transition-all duration-[150ms] ease-linear" />
                                </button>

                                {
                                    features.data.map(item => {
                                        return <FeaturesCard key={item.id} data={item} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero
