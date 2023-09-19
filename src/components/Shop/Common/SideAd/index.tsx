import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import backImg from '@assets/images/shop/sideAdImg.svg';

interface Props {
  top?: number;
  left?: number;
}
const SideAd = (props: Props) => {
  const { top, left } = props;
  const [close, setClose] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Styled.Wrapper close={close} left={left} top={top}>
      <Styled.SideAd top={top}>
        <Styled.Close onClick={() => setClose(!close)} />
        <Styled.BackImg />
        <Styled.footer onClick={() => router.push('/mypage/myplants')} />
      </Styled.SideAd>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div<{ close: boolean; left: number; top: number }>`
    position: absolute;
    left: ${props => (props.left ? `${props.left}px` : '-225px')};
    margin-right: 36px;
    margin-left: 15px;
    width: fit-content;
    height: inherit;
    top: ${props => (props.top ? `${props.top}px` : '0px')};
    display: ${props => (props.close ? 'none' : '')};
  `,
  SideAd: styled.div<{ top: number }>`
    margin-top: 20px;
    position: sticky;
    top: ${props => (props.top ? `${props.top}px` : '134px')};
    border-radius: 18px;
    width: 160px;
    height: 300px;
    border-radius: 19px;
    overflow: hidden;
    box-shadow: 5px 4px 5px 2px rgba(110, 142, 106, 0.23);
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
  `,
  BackImg: styled(backImg)`
    width: 160px;
    height: 300px;
  `,
  Close: styled.div`
    width: 35px;
    height: 35px;
    background-color: inherit;
    position: absolute;
    right: 0;
    top: 0px;
  `,
  footer: styled.div`
    border-radius: 0 0 19px 19px;
    width: 100%;
    height: 35px;
    position: absolute;
    bottom: 0px;
    display: flex;
  `,
};
export default SideAd;
