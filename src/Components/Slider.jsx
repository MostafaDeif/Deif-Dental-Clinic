// Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Card from './Card';

const SliderComp = () => {
  const cards = [
    { id: 1, title: 'Card 1', content: 'This is the first card.' },
    { id: 2, title: 'Card 2', content: 'This is the second card.' },
    { id: 3, title: 'Card 3', content: 'This is the third card.' },
  ];

  return (
    <Swiper spaceBetween={50} slidesPerView={1} navigation loop>
      {cards.map(card => (
        <SwiperSlide key={card.id}>
          <Card title={card.title} content={card.content} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
