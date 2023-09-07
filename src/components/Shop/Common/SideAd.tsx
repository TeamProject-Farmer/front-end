import styled from '@emotion/styled';
import theme from '@styles/theme';
import { useState } from 'react';
import close from '@assets/images/shop/closeIcon.svg';
interface Props {
  top?: number;
  left?:number;
}
const SideAd = (props: Props) => {
  const { top, left } = props;
  const [close, setClose] = useState<boolean>(false);

  return (
    <Styled.Wrapper close={close} left={left} top={top}>
      <Styled.SideAd top={top}>
        <Styled.CloseIcon  onClick={()=>setClose(!close)}/>
        <Styled.Content>식물 키우기<br />많이 힘드시죠? <br /><br />내 반려 식물을<br />등록하고<br />관리해보세요.</Styled.Content>
        <Styled.footer>CLICK</Styled.footer>
      </Styled.SideAd>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div<{close: boolean, left:number, top: number}>`
    position: absolute;
    /* left: -210px; */
    left: ${props => props.left ? `${props.left}px` : '-225px'};
    margin-right: 36px;
    margin-left: 15px;
    width: fit-content;
    height: inherit;
    top: ${props => (props.top ? `${props.top}px` : '0px')};
    display: ${props => props.close ? 'none' : ''};
  `,
  SideAd: styled.div<{top: number}>`
    margin-top: 20px;
    position: sticky;
    top: ${props => (props.top ? `${props.top}px` : '134px')};
    border-radius: 18px;
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
