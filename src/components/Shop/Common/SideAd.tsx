import styled from '@emotion/styled';
import theme from '@styles/theme';
import close from '@assets/images/shop/closeIcon.svg';
interface Props {
  top?: number;
}
const SideAd = (props: Props) => {
  const { top } = props;
  return (
    <Styled.Wrapper>
      <Styled.SideAd top={top}>
        <Styled.CloseIcon></Styled.CloseIcon>
        <Styled.Content>식물 키우기<br />많이 힘드시죠? <br /><br />내 반려 식물을<br />등록하고<br />관리해보세요.</Styled.Content>
        <Styled.footer>CLICK</Styled.footer>
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
    width: fit-content;
    height: inherit;
    top: 0;
  `,
  SideAd: styled.div<Props>`
    //일단 임의로 fixed로 설정해둠 나중에 위치 관련해서 수정 필요할 것 같음
    margin-top: 20px;
    position: sticky;
    /* 만약 위치를 고정해도 된다면 굳이 props로 받지 않아도 될 것 같음 */
    top: ${props => (props.top ? `${props.top}px` : '134px')};
    border-radius: 18px;
    //디자인 상 width는 114px인데 다 안들어가서 임의로 161px로 늘림
    width: 161px;
    height: 279px;
    border-radius: 19px;
    background-color: ${theme.colors.green3};
    box-shadow: 5px 4px 5px 2px rgba(110, 142, 106, 0.23);
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
  `,
  CloseIcon: styled(close)`
    position: absolute;
    top: -21px;
  `,
  Content: styled.div`
    color: ${theme.colors.white};
    //원래 폰트 사이즈는 18px인데 들어가지 않아서 사이즈를 임의로 줄임
    font-size: 17px;
    font-weight: 500;
    width: 120px;
    height: 244px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  footer: styled.div`
    border-radius: 0 0 19px 19px;
    border-top: 1px dashed #627d36;
    width: 100%;
    height: 35px;
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #627d36;
  `,
};
export default SideAd;
