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
    margin-top: 181px;
  `,
  Descrip: styled.p`
    font-size: 15px;
    color: #717171;
  `,
  Plants: styled(Slider)`
    width: 100%;
    margin-top: 85px;
    position: relative;

    .slick-track {
      padding: 20px;
      display: flex;
      align-items: center;
    }
    .slick-arrow {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      border: 1px solid #285430;
    }
    .slick-prev {
      position: relative;
      top: 712px;
      left: 900px;
      ::before {
        content: url('./assets/images/home/bestPlantPrevBtn.svg');
        font-size: 40px;
        position: absolute;
        top: 0;
        left: 0;
        display: 'block';
        color: #285430;
      }
    }
    .slick-next {
      position: relative;
      top: 90px;
      left: 1000px;
      ::before {
        content: url('./assets/images/home/bestPlantNextBtn.svg');
        font-size: 40px;
        position: absolute;
        top: 0;
        right: 0;
        display: 'block';
        color: #285430;
      }
    }
  `,
};

export default Styled;
