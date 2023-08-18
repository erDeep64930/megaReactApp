
import Testimonial from './Testimonial';
import { reviews } from '../constant/data';


const TestimonialCard = () => {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-700'>
         <div className='text-center'>
            <h1 className='text-3xl font-bold'>Our Testimonials</h1>
            <div className='bg-violet-400 h-[4px] w-[1/5] mt-2'></div>
            <Testimonial reviews={reviews}/>
         </div>
    </div>
  )
}

export default TestimonialCard