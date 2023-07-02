import styled from '@emotion/styled';
import sideAdImage from '@assets/images/shop/sideAdImage.svg';

const SideAd = () => {
  return (
    <Styled.Wrapper>
      <Styled.SideAd></Styled.SideAd>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    position: absolute;
    left: -210px;
    margin-right: 36px;
    margin-left: 15px;
  `,
  SideAd: styled(sideAdImage)`
    //일단 임의로 fixed로 설정해둠
    position: fixed;
    top: 110px;
    border-radius: 18px;
    width: 160px;
    height: 300px;
  `,
};
export default SideAd;
