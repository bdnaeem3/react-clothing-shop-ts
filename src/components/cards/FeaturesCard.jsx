const FeaturesCard = ({ className = "", data = {
    "id": 1,
    "img": "/public/fast-delivery.png",
    "title": "Fast Delivery",
    "desc": "Delivery within 48 hours"
}, ...rest }) => {
    return (
        <div
            className={`flex items-center border-[2px] border-[#d73977] p-[10px] rounded-[5px] min-h-[105px] ${className}`}
            {...rest}
        >
            <img src={data.img} alt="" className="!max-w-[48px] mr-[5px]" />
            <div>
                <h3 className="text-[16px] font-bold">
                    {data.title}
                </h3>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}

export default FeaturesCard
