import {FaQuoteLeft ,FaQuoteRight} from "react-icons/fa"

const Card = (props) => {
    let review = props.review;
  return (
    <div className="flex flex-col md:relative">
        <div className="absolute top-[-7rem] z-20 mx-auto">
            <img src={review.image} className="aspect-square rounded-full w-[140px] h-[140px] z-30"/>
            <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] -z-20 left-[10px]"></div>
        </div>
        <div className="text-center mt-7 text-bold text-2xl font-tilt">
            <p>{review.name}</p>
        </div>
        <div>
            <p>{review.job}</p>
        </div>
        <div className="text-violet-500 mx-auto mt-6">
            <FaQuoteLeft />
        </div>
        <div>
            {review.text}
        </div>
        <div className="text-violet-500 mx-auto mt-6">
            <FaQuoteRight />
        </div>
        

      
    </div>
  )
}

export default Card