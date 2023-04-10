import './NewsContainer.css';
import News from './News/News';
import { newsData } from '../../assets/data';
import React, { useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../../assets/sliderConfiguration';
import { arrowLeft, arrowRight } from '../../assets/images/SVGs'

const NewsContainer = () => {
    const carouselRef = useRef(null);

    const next = () => {
      carouselRef.current.next();
    };

    const prev = () => {
      carouselRef.current.previous()
    }

    return (
      <div className="news-component">
        <div className="news-container">
            <div className="news-container-header">
              <h2>news</h2>
              <div className="news-container-header-buttons">
                <div onClick={prev}>{arrowLeft}</div>
                <div onClick={next}>{arrowRight}</div>
              </div>
            </div>
          <Carousel ref={carouselRef} renderButtonGroupOutside={true}  responsive={responsive} 
            itemClass="news-container-list-item"
            containerClass="news-container-list"
            partialVisible
          >
            {newsData.map((news, index) => (
              <div  key={index}>
                <News newsData={news} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };

export default NewsContainer;

