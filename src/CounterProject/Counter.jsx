import { useState } from "react"
import {AiOutlinePlusCircle , AiOutlineMinusCircle} from "react-icons/ai"

const Counter = () => {
    const[count,setCount]=useState(0)
    const increaseHandler=()=>{
setCount(count+1)
    }

    const decreaseHandler=()=>{
       setCount(count-1) 
    }
    const resetHandler=()=>{
        setCount(0) 
     }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-blue-300 font-medium text-2xl">Increment and Decrement </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-md text-[25px]">
      <button onClick={increaseHandler} className="border-r-2 text-center w-20 border-gray-700 text-5xl"><AiOutlinePlusCircle /></button>
      <div className="font-bold gap-10 text-4xl">{count}</div>
      <button onClick={decreaseHandler}  className="border-l-2 text-center w-20 border-gray-700 text-5xl"><AiOutlineMinusCircle /></button>
      </div>
     
      <button className="border border-red-700 px-5 py-2 rounded-md" onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default Counter
