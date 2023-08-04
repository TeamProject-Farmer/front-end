import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    height: 953px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Descrip: styled.p`
    font-size: 15px;
    color: #717171;
  `,
  Plants: styled(Slider)`
    /* position: relative; */
    width: 100%;
    height: 800px;
    background-color: pink;
    display: flex;
    /* align-items: flex-end; */
    margin: 50px 0;

    .slick-track {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    }
    .slick-arrow {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: red;
    }
    .slick-prev {
      position: absolute;
      bottom: 0px;
    }
  `,
};

export default Styled;
