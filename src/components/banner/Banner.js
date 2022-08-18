import React, { useState } from 'react';
import c from './Banner.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRef } from 'react';
import { useEffect } from 'react';

const Banner = () => {
  const [imageCount, setImageCount] = useState(0);
  const imageCon = useRef();
  const images = [
    "https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
  ]

  useEffect(() => {
    imageCon.current.scrollLeft = imageCount * imageCon.current.offsetWidth
  }, [imageCount])
  useEffect(() => {
      setTimeout(() => {
          if(imageCount < images.length){
              setImageCount(imageCount =>imageCount + 1)
          }
          else{
              setImageCount(0)
          }
      }, 5000)
  },[imageCount , images.length])

  console.log(imageCount)
  return (
    <div className={c.banner}>
      <button className={c.left_btn} onClick={() => {
       if (imageCount === 0) {
        setImageCount(images.length - 1)
        }
        else {
            setImageCount(imageCount => imageCount - 1)
        }
      }}><FiChevronLeft/></button>
      <div ref={imageCon} className={c.image__coontainer}>
      {
        images.map(item => 
          <img src={item} alt=""/>  
        )
      }
      </div>
      <button className={c.right_btn} onClick={() => {
        if (imageCount === images.length - 1) {
          setImageCount(0)
      }
      else {
          setImageCount(imageCount => imageCount + 1)
      }        
      }}><FiChevronRight/></button>
      <div className={c.dots}>
          {
              images.map((dot , index ) => 
              <div onClick={() => setImageCount(index)} style={index === imageCount ? {background : "dodgerblue", transform : "scale(1.3)"}: null} className={c.point}></div>
              )
          }
      </div>
    </div>
  )
}

export default Banner