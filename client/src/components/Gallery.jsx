import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Gallery.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';
import Image4 from '../assets/4.png';
import Image5 from '../assets/5.png';
import Image6 from '../assets/6.png';
import Image7 from '../assets/7.png';

const carouselImages = [
  { url: Image1, alt: 'Image 1' },
  { url: Image2, alt: 'Image 2' },
  { url: Image3, alt: 'Image 3' },
  { url: Image4, alt: 'Image 4' },
  { url: Image5, alt: 'Image 5' },
  { url: Image6, alt: 'Image 6' },
  { url: Image7, alt: 'Image 7' },
];

const galleryImages = [
  {
    src: 'https://www.laurewanders.com/wp-content/uploads/2023/02/Backpacking-in-Bangladesh-00009.jpg', 
    path: '/beach',
    alt: 'Description of Image 1',
    title: 'Beautiful Beach',
  },
  {
    src: 'https://www.amazingtoursbd.com/tour_image/nilgiri-mountains-at-bandarban-bangladesh.jpg',
    alt: 'Description of Image 2',
    title: 'Mountain View',
  },
  {
    src: 'https://as1.ftcdn.net/v2/jpg/01/36/15/54/1000_F_136155451_ISJ84GtxZLuHpGOiMJZGThNZCDdJo7vw.jpg',
    alt: 'Description of Image 3',
    title: 'Village View',
  },
  {
    src: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSXn67XOChI6tVfTPJikLD2DIVB20WF4JOhOwzEjbNPujMshdl56tNdcxWCjihh92IL',
    alt: 'Description of Image 1',
    title: 'Beautiful Forest',
  },
  {
    src: 'https://www.travelandleisure.com/thmb/UoX9NMWBsIywlYCJWMkdO0IGklE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/anse-marcel-beach_STMARTIN0123-2fd21dab444546f399f2b14582208f82.jpg',
    alt: 'Description of Image 2',
    title: 'Island',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/1._%E0%A6%B2%E0%A6%BE%E0%A6%B2%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%95%E0%A7%87%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE.jpg/1200px-1._%E0%A6%B2%E0%A6%BE%E0%A6%B2%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%95%E0%A7%87%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE.jpg',
    alt: 'Description of Image 3',
    title: 'Fort',
  },
  {
    src: 'https://www.laurewanders.com/wp-content/uploads/2023/02/Backpacking-in-Bangladesh-00009.jpg',
    alt: 'Description of Image 1',
    title: 'Beautiful Beach',
  },
  {
    src: 'https://www.amazingtoursbd.com/tour_image/nilgiri-mountains-at-bandarban-bangladesh.jpg',
    alt: 'Description of Image 2',
    title: 'Mountain View',
  },
  {
    src: 'https://as1.ftcdn.net/v2/jpg/01/36/15/54/1000_F_136155451_ISJ84GtxZLuHpGOiMJZGThNZCDdJo7vw.jpg',
    alt: 'Description of Image 3',
    title: 'Village View',
  },
];

const MergedCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="carousel-container">
        <Carousel
          autoPlay={isHovered}
          infiniteLoop
          interval={3000}
          showStatus={false}
          showThumbs={false}
          className="carousel"
          transitionTime={1000}
          emulateTouch
          swipeable
          useKeyboardArrows
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <LazyLoadImage
                src={image.url}
                alt={image.alt}
                effect="blur"
                className="carousel-image"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <h2 className="gallery-heading">Explore Top Places all over Bangladesh</h2>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              effect="blur"
              className="gallery-image"
            />
            <div className="gallery-item-info">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MergedCarousel;
