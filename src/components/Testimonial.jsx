
import { useState } from 'react';
import Card from './Card';
import {FiChevronLeft ,FiChevronRight} from "react-icons/fi"
import { reviews } from './../constant/data';

const Testimonial = (props) => {

    let reviews = props.reviews;

    const [index,setIndex]=useState(0)
    const leftClickHandler =()=>{
       
if(index-1<0){
    setIndex(reviews.length-1);

}else{
    setIndex(index-1)
}
        
    }
    const rightClickHandler =()=>{
        if(index+1>=reviews.length){
            setIndex(0);
        
        }else{
            setIndex(index+1)
        }
    }
    const surprizeClickHandler =()=>{
      let randomIndex = Math.floor(Math.random()*reviews.length);
      setIndex(randomIndex);
    }
   
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center transition-all duration-200'>
        <Card review ={reviews[index]}/>
    
        <div className="flex text-3xl mt-5 gap-3 text-violet-600 font-bold text-center mx-auto ">
            <button className="cursor-pointer hover:text-violet-800" onClick={leftClickHandler}> <FiChevronLeft /></button>
            <button className="cursor-pointer hover:text-violet-800"> <FiChevronRight onClick={rightClickHandler}/></button>
        </div>

       <div>
        <button onClick={surprizeClickHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprize me</button>
       </div>
    </div>
  )
}

export default Testimonial