import { useState } from 'react';
import { sculptureList } from '../constant/data';

const GallaryUpdate = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < sculptureList.length - 1;
  
    function handleNextClick() {
      if (hasNext) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }
  
    function handleMoreClick() {
      setShowMore(!showMore);
    }
  
    let sculpture = sculptureList[index];
  return (
    <>
    <button onClick={handleNextClick} className='px-5 py-2 bg-rose-500 text-white'>
      Next
    </button>
    <h2>
      <i>{sculpture.name} </i>
      by {sculpture.artist}
    </h2>
    <h3>
      ({index + 1} of {sculptureList.length})
    </h3>
    <button onClick={handleMoreClick} className='px-5 py-2 bg-green-500 text-white relative'>
      {showMore ? 'Hide' : 'Show'} details
    </button>
    {showMore && <p>{sculpture.description}</p>}
    <img
      src={sculpture.url}
      alt={sculpture.alt} className='w-14 relative'
    />
  </>
  )
}

export default GallaryUpdate