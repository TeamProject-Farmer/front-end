import Styled from './styles';
import FooterButtonWrapper from '../../Common/FooterButtonWrapper';
import MiddleButton from '../../Common/MiddleButton';

const Banner = () => {
  return (
    <Styled.BannerWrapper>
      <Styled.BannerContainer>
        <Styled.TempImgBox />
        <Styled.TempImgBox />
        <Styled.TempImgBox />
      </Styled.BannerContainer>
      <FooterButtonWrapper>
        <MiddleButton text="배너 편집" />
      </FooterButtonWrapper>
    </Styled.BannerWrapper>
  );
};

export default Banner;
