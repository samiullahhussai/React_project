import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
  const filterData =list.filter(data=>data.category==="Free")
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='px-16 mt-4'>
    <p className='font-bold'>Free Offered Courses</p>
    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p>
    
    <div className="slider-container space-x-4 ">
      <Slider {...settings}>
        {filterData.map(item=><Cards item={item} key={item.id}/> )}
      </Slider>
      </div>
    </div>
    </>
  )
}

export default Freebook