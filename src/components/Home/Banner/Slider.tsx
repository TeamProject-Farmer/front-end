import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import SliderContent from './SliderContent'
import Indicator from './Indicator'

const sliderContent = [
  {bg: 'red', title: 'farmer'},
  {bg: 'pink', title: 'event01'},
  {bg: 'skyblue', title: 'event02'}
] 

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  const prevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(sliderContent.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const nextSlide = () => {
    if (activeIndex === sliderContent.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === sliderContent.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Styled.Wrapper>
      <SliderContent sliderContent={sliderContent} activeIndex={activeIndex}/>
      <Indicator 
        activeIndex={activeIndex}
        sliderContent={sliderContent}
        onclick={(clickedIndex) => setActiveIndex(clickedIndex)}
      />
    </Styled.Wrapper>
  )
}

export default Slider

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    height: 876px;
    background-color: black;
  `
}
