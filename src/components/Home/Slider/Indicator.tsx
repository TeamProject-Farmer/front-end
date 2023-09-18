import styled from '@emotion/styled';
import theme from '@styles/theme';
import { Banner } from 'src/types/home/types';

const Indicator = ({ activeIndex, sliderContents, onclick }) => {
  return (
    <Style.Indicator>
      {sliderContents?.map((content: Banner) => (
        <Style.List
          key={content.id}
          selected={content.id === activeIndex ? true : false}
          onClick={() => onclick(content.id)}
        >
          {content.name}
        </Style.List>
      ))}
    </Style.Indicator>
  );
};

export default Indicator;

const Style = {
  Indicator: styled.ul`
    position: absolute;
    left: 705px;
    bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 154px;
  `,
  List: styled.li<{ selected: boolean }>`
    cursor: pointer;
    position: relative;
    font-size: 20px;
    font-weight: ${({ selected }) => (selected ? '700' : '400')};
    color: ${({ selected }) => (selected ? '#FFB800' : '#fff')};
    :not(:last-child)::before {
      content: '';
      position: absolute;
      display: block;
      background-color: #fff;
      width: 125px;
      height: 2px;
      top: 50%;
      left: 120%;
    }
  `,
};
