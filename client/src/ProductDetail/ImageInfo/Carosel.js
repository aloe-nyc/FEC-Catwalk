//http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles
import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/Vsc';
import { IconContext } from 'react-icons';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails';
import ZoomImg from './ZoomImg';
import CaroselImg from './CaroselImg';
import StyleSelector from '../StylesInfo/StyleSelector';

let Carosel = (props) => {

  const [currentImg, setImg] = useState(0);
  let length = props.allImages.length - 1;


  if (!Array.isArray(props.allImages) || length === 0) {
    return null;
  }

  const rightClick = () => {
    currentImg === length ? setImg(0) : setImg(currentImg + 1);
  };

  const leftClick = () => {
    currentImg === 0 ? setImg(length) : setImg(currentImg - 1);
  };

  const setcurrentImg = (index) => {
    setImg(index);
  };

  const setCoords = (x, y) => {
    console.log(x, y);
  };

  return (
    <div className="carosel">
      <IconContext.Provider
        value={{ color: 'hsl(200, 2%, 65%)', size: '7%', className: 'arrows' }}
      >
        <VscArrowSmallLeft
          key="lArrow"
          className="left arrow"
          onClick={leftClick}
        />
        <div className="image">
          <Thumbnails images={props.allImages} setcurrentImg={setcurrentImg}/>
          <CaroselImg image={props.allImages[currentImg].url} />
        </div>
        <VscArrowSmallRight
          key="rArrow"
          className="right arrow"
          onClick={rightClick}
        />
      </IconContext.Provider>
    </div>
  );
};

export default Carosel;
