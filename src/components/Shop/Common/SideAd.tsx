import styled from '@emotion/styled';
import sideAdImage from '@assets/images/shop/sideAdImage.svg';
import close from '@assets/images/shop/closeIcon.svg';
interface Props {
  top?: number;
}
const SideAd = (props:Props) => {
  const {top} = props;
  return (
    <Styled.Wrapper>
      <Styled.SideAd top={top}>
        <Styled.CloseIcon></Styled.CloseIcon>
        <Styled.SideAdImage></Styled.SideAdImage>
      </Styled.SideAd>
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
  SideAd: styled.div<Props>`
    //일단 임의로 fixed로 설정해둠
    position: fixed;
    top: ${props => (props.top ? `${props.top}px` : '134px')};
    border-radius: 18px;
    width: 160px;
    height: 300px;
    display: flex;
    justify-content: center;
  `,
  SideAdImage: styled(sideAdImage)`
    width: inherit;
    height: inherit;
    border-radius: 18px;
  `,
  CloseIcon: styled(close)`
    position: absolute;
    top: 18px;
  `,
};
export default SideAd;
