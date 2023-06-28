import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import SliderContent from './SliderContent'
import Indicator from './Indicator'

const sliderContents = [
  {id: 0, title: 'farmer'},
  {id: 1, title: 'Event 01'},
  {id: 2, title: 'Event 02'}
] 

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveIndex( prevIndex => (
        prevIndex === sliderContents.length - 1 ? 0 : prevIndex + 1
      ))
    }, 3000);
    return () => clearInterval(sliderInterval);
  }, [activeIndex]);

  return (
    <Styled.Wrapper>
      <SliderContent sliderContents={sliderContents} activeIndex={activeIndex}/>
      <Indicator 
        activeIndex={activeIndex}
        sliderContents={sliderContents}
        onclick={(clickedIndex) => setActiveIndex(clickedIndex)}
      />
    </Styled.Wrapper>
  )
}

export default Slider

const Styled = {
  Wrapper: styled.div`
    position: relative;
    width: 1920px;
    height: 876px;
  `
}