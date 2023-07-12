import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const Shop = () => {
  const Add1: string = '식물 키우기 어려우시죠?';
  const Add2: string = '내 반려식물을 등록하고 관리해보세요.';
  return (
    <Styled.Wrapper>
      <Styled.EventWrapper>
        <Styled.NormalEvent>사이즈별</Styled.NormalEvent>
        <Styled.SmallEvent>
          <div>
            <span>{Add1}</span>
            <span>{Add2}</span>
          </div>
        </Styled.SmallEvent>
        <Link href="/shop/event/1">
          <Styled.NormalEvent>이벤트 페이지</Styled.NormalEvent>
        </Link>
      </Styled.EventWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
  `,
  EventWrapper: styled.div`
    width: 100%;
    height: 1351px;
    padding: 45px 363px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${theme.colors.black};
  `,
  SmallEvent: styled.div`
    height: 226px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: #d9d9d9;
    margin: 25px 0;
    & > div {
      display: flex;
      flex-direction: column;
      text-align: left;
      & > span {
        color: #000;
        font-size: 25px;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      & > span:last-child {
        font-weight: 700;
      }
    }
  `,
  NormalEvent: styled.div`
    height: 330px;
    font-size: 64px;
    font-weight: 700;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: #d9d9d9;
    margin: 25px 0;
  `,
};

export default Shop;
