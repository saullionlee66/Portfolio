import React, {useState} from 'react';
import './CSS/Carousel.css'
import {images} from './Helpers/CarouselData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Carousel() {
    const [currentImg, setCurrentImg] = useState(0);
    const handlePrev = () => {
        currentImg > 0 ? setCurrentImg(currentImg - 1) : setCurrentImg(images.length - 1)
    }
    const handleNext = () => {
        currentImg === images.length - 1 ? setCurrentImg(0) : setCurrentImg(currentImg + 1)
    }
    return (
        <div className="carousel-wrapper">
            <div className="carousel" >
                <div className="inner" style={{backgroundImage:`url(${images[currentImg].url})`}} >
                    <div className="left" onClick={handlePrev}>
                        <ArrowBackIosIcon fontSize="large"/></div>
                    <div className="center">
                        <div className="info">
                            <h1>{images[currentImg].title}</h1>
                            <h2>{images[currentImg].subtitle}</h2>
                        </div>
                    </div>
                <div className="right" onClick={handleNext}><ArrowForwardIosIcon fontSize="large"/></div>
            </div>
        </div>

        </div>

    )
}

export default Carousel
