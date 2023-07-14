import React, { useState, useEffect } from 'react';

const images = [
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Image%201',
  'https://via.placeholder.com/800x400/00ff00/ffffff?text=Image%202',
  'https://via.placeholder.com/800x400/0000ff/ffffff?text=Image%203',
  'https://via.placeholder.com/800x400/ffff00/ffffff?text=Image%204',
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  // 在组件挂载时初始化状态
  useEffect(() => {
    setActiveIndex(0);
    setTranslateX(0);
  }, []);

  // 在activeIndex状态发生变化时更新translateX状态
  useEffect(() => {
    setTranslateX(-activeIndex * 100);
  }, [activeIndex]);

  // 在translateX状态发生变化时更新CSS样式
  useEffect(() => {
    const container = document.querySelector('.carousel-container');
    container.style.transform = `translateX(${translateX}%)`;
  }, [translateX]);

  // 在轮播图切换时更新activeIndex状态
  const handleTransitionEnd = () => {
    const container = document.querySelector('.carousel-container');
    const firstSlide = container.firstElementChild;
    const lastSlide = container.lastElementChild;

    if (activeIndex === images.length && container.classList.contains('transition')) {
      setActiveIndex(0);
      setTranslateX(0);
    } else if (activeIndex < 0 && container.classList.contains('transition')) {
      setActiveIndex(images.length - 1);
      setTranslateX(-images.length * 100);
    }

    if (firstSlide.classList.contains('clone')) {
      container.classList.remove('transition');
      setActiveIndex(0);
    }

    if (lastSlide.classList.contains('clone')) {
      container.classList.remove('transition');
      setActiveIndex(images.length - 1);
    }
  };

  // 生成幻灯片的HTML代码
  const slidesHtml = images.map((image, index) => (
    <div key={index} className="carousel-slide">
      <img src={image} alt={`Image ${index + 1}`} />
    </div>
  ));

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container transition" onTransitionEnd={handleTransitionEnd}>
        <div className="carousel-slides">{slidesHtml}</div>
        <div className="carousel-slides clone">{slidesHtml}</div>
      </div>
    </div>
  );
}

export default Carousel;
