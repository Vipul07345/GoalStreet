import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            imageUrl: "https://i.postimg.cc/Y9Q4g2Qc/images-3.jpg",
            
        },
        {
            imageUrl: "https://i.postimg.cc/8c1C6R1W/images-4.jpg",
           
        },
        {
            imageUrl: "https://i.postimg.cc/8CMkXKcM/images-5.jpg",
          
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 9000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="image-slider-container">
            <div
                className="image-slider-wrapper"
                style={{
                    transform: `translateX(${-currentSlide * 100}%)`,
                    transition: 'transform 0.9s ease-in-out'
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="image-slide" style={{ width: '100%' }}>
                        <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
