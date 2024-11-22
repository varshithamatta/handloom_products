import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import handloom from './Screenshot 2024-10-29 113106.png'

const items = [
    <div className="item" data-value="1">
        <img 
            src={handloom} 
            className="w-full h-90 object-center"
            alt="Slide 1"
        />
    </div>,
    <div className="item" data-value="2">
    <img 
            src="https://www.abhishti.com/cdn/shop/files/banner-1.2jpg.jpg?v=1702628723&width=2400" 
            className="w-full h-85 object-cover object-center"
            alt="Slide 2"
        />
    </div>,
    <div className="item" data-value="3">
        <img 
            src="https://cdn.shopify.com/s/files/1/0502/3753/8461/files/Pret_Web_Banner_1920x860-min_2048x.jpg?v=1663146702" 
            className="w-full h-81 object-center"
            alt="Slide 2"
        />
    </div>,
    <div className="item" data-value="4">
         <img 
            src="https://www.rustorange.com/cdn/shop/files/66_1000x.jpg?v=1692170451" 
            className="w-full h-85 object-center"
            alt="Slide 2"
        />
    </div>,
]

const HomeCarousel = () => (
    <AliceCarousel
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
    disableButtonsControls
        mouseTracking
        items={items}
        controlsStrategy="alternate"
    />
);

export default HomeCarousel;