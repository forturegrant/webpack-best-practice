import React, { useState, useImperativeHandle, useRef, forwardRef, useEffect, useMemo } from 'react';
import classNames from 'classnames';

import './style.scss';

function convertPxToVw(pxValue: number) {
  const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return pxValue / screenWidth * 100;
}

interface ISwiper {
  children?: React.ReactNode;
  slideSize?: number;
  trackOffset?: number;
  indicator?: (total: number, current: number) => React.ReactNode;
  className?: string;
  autoplayInterval?: number;
  autoplay?: boolean;
}

interface ISwiperItem {
  children?: React.ReactNode;
}

const Swiper = forwardRef(({ children, slideSize, trackOffset, indicator, className, autoplayInterval, autoplay = false }: ISwiper, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimate, setIsAnimate] = useState(true);
  const [translateX, setTranslateX] = useState(-(activeIndex + 2) * slideSize + trackOffset);
  const timer = useRef(null);
  const backToHeadTimer = useRef(null);
  const startX = useRef(0);
  const moveX = useRef(0);
  const originX = useRef(0);
  const distanceX = useRef(0);
  const childrenArray = React.Children.toArray(children) as React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  const realLength = childrenArray.length;

  const newChildren = useMemo(() => {
    return [
      React.cloneElement(childrenArray[realLength - 2]),
      React.cloneElement(childrenArray[realLength - 1]),
      ...childrenArray,
      React.cloneElement(childrenArray[0]),
      React.cloneElement(childrenArray[1]),
    ].map(child => React.cloneElement(child, { style: { '--slide-size': slideSize + 'vw' } }))
  }, [childrenArray, realLength])

  const swipeTo = (current: number) => {
    setActiveIndex(current)
  }

  const cls = classNames('swiper-container', {
    'animate': isAnimate
  })

  useImperativeHandle(ref, () => ({
    swipeTo,
  }));

  useEffect(() => {
    if (autoplay) {
      timer.current = setTimeout(() => {
        setIsAnimate(true);
        setActiveIndex((activeIndex) => activeIndex + 1);
      }, autoplayInterval)
    }
    if (activeIndex > newChildren.length - 5) {
      clearTimeout(timer.current);
      backToHeadTimer.current = setTimeout(() => {
        setIsAnimate(false);
        setActiveIndex(0);
      }, 200)
    }
    if (activeIndex < 0) {
      backToHeadTimer.current = setTimeout(() => {
        setIsAnimate(false);
        setActiveIndex(realLength - 1);
      }, 200)
    }
    return (() => {
      clearTimeout(timer.current);
      clearTimeout(backToHeadTimer.current);
    })

  }, [activeIndex])

  useEffect(() => {
    if (!isAnimate) {
      setTimeout(() => {
        setIsAnimate(true)
      }, 200);
    }
  }, [isAnimate])

  useEffect(() => {
    setTranslateX(-(activeIndex + 2) * slideSize + trackOffset);
  }, [activeIndex, slideSize, trackOffset])

  const handleTouchStart = (event: React.TouchEvent) => {
    originX.current = event.touches[0].pageX;
    startX.current = event.touches[0].pageX;
    clearTimeout(timer.current);
  }

  const handleTouchMove = (event: React.TouchEvent) => {
    // event.preventDefault();
    distanceX.current = event.touches[0].pageX - originX.current;
    moveX.current = event.touches[0].pageX - startX.current;
    startX.current = event.touches[0].pageX;
    setTranslateX(translateX + convertPxToVw(moveX.current));
  }

  const handleTouchEnd = () => {
    if (distanceX.current > 0) {
      if (convertPxToVw(Math.abs(distanceX.current)) > slideSize * 0.33) {
        swipeTo(activeIndex - 1);
      } else {
        setTranslateX(-(activeIndex + 2) * slideSize + trackOffset);
      }
    } else {
      if (convertPxToVw(Math.abs(distanceX.current)) > slideSize * 0.33) {
        swipeTo(activeIndex + 1);
      } else {
        setTranslateX(-(activeIndex + 2) * slideSize + trackOffset);
      }
    }

    startX.current = 0;
    moveX.current = 0;
    originX.current = 0;
    distanceX.current = 0;
  }

  return <div className={className}>
    <div
      className={cls}
      style={{
        width: newChildren.length * 100 + 'vw', transform: `translate3d(${translateX}vw, 0px, 0px)`,
      }}
      onTouchStart={(event) => handleTouchStart(event)}
      onTouchMove={(event) => handleTouchMove(event)}
      onTouchEnd={() => handleTouchEnd()}
    >
      {newChildren}
    </div>
    {indicator(childrenArray.length, activeIndex)}
  </div >
})

const SwiperItem = (props: ISwiperItem) => {
  return <div className="swiper-item" {...props}>
    {props.children}
  </div >
}

Swiper.Item = SwiperItem;

export default Swiper;



<NewSwiper
  slideSize={93}
  trackOffset={3.5}
  className="banner-swiper"
  ref={ref}
  indicator={(total, current) => <CustomIndicator current={current} ref={ref} img={shopLogos} />}
  autoplay
  autoplayInterval={2000}
>
  {
    newEventModule?.map((item) => (
      <NewSwiper.Item key={item.id}>
        {renderBannerItem(item)}
      </NewSwiper.Item>
    ))
  }
</NewSwiper>