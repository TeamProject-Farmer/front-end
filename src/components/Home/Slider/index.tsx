import { useState, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import SliderContent from './SliderContent';
import Indicator from './Indicator';

const Slider = ({ banner }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveIndex(prevIndex =>
        prevIndex === banner.length ? 1 : prevIndex + 1,
      );
    }, 3000);
    return () => clearInterval(sliderInterval);
  }, [activeIndex]);

  return (
    <Styled.Wrapper>
      <SliderContent sliderContents={banner} activeIndex={activeIndex} />
      <Indicator
        activeIndex={activeIndex}
        sliderContents={banner}
        onclick={(clickedIndex: number) => setActiveIndex(clickedIndex)}
      />
    </Styled.Wrapper>
  );
};

export default Slider;

const Styled = {
  Wrapper: styled.div`
    position: relative;
    width: 1920px;
    height: 801px;
  `,
};
