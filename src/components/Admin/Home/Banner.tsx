import Styled from './styles';
import ButtonWrapper from '../common/InnerBox/ButtonWrapper';
import MiddleButton from '../common/MiddleButton';

const Banner = () => {
  return (
    <Styled.BannerWrapper>
      <Styled.BannerContainer>
        <Styled.TempImgBox />
        <Styled.TempImgBox />
        <Styled.TempImgBox />
      </Styled.BannerContainer>
      <ButtonWrapper>
        <MiddleButton text="배너 편집" />
      </ButtonWrapper>
    </Styled.BannerWrapper>
  );
};

export default Banner;
