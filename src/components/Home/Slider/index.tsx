import { useState, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import SliderContent from './SliderContent';
import Indicator from './Indicator';
import { useQuery } from 'react-query';
import { getMainBanner } from 'src/apis/home/home';

const Slider = () => {
  const { data: banner, isLoading } = useQuery('banner', getMainBanner);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    if (isLoading) return;
    const sliderInterval = setInterval(() => {
      setActiveIndex(prevIndex =>
        prevIndex === banner.length ? 1 : prevIndex + 1,
      );
    }, 3000);
    return () => clearInterval(sliderInterval);
  }, [activeIndex]);

  if (isLoading) return;
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
