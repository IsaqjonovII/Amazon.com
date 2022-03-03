import React, { useState, useEffect } from 'react';
import { images } from '../../static/carousel_data';
import { FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import './Banner.css'

const Banner = () => {
    const [imageNumber, setImageNumber] = useState(0);
    useEffect(() => {
        if(imageNumber === images.length){
            setImageNumber(0)
        }
        else if(imageNumber === -1){
            setImageNumber(3)
        }
    }, [imageNumber])
  return <div className='banner'>
      <button onClick={() => setImageNumber(num => num - 1)}><FiChevronLeft/></button>
      <img className='banner__images' src={images[imageNumber]} alt="" />
      <button onClick={() => setImageNumber(num => num + 1)} ><FiChevronRight/></button>
  </div>;
};

export default Banner;
