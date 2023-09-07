import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Category from '@components/Common/Category';

const Shop = () => {
  const event1: string = '/assets/images/shop/eventBanner1.svg';
  const event2: string = '/assets/images/shop/eventBanner2.svg';
  return (
    <Styled.Wrapper>
      <Category />
      <Styled.EventWrapper>
        <Styled.SmallEvent>
          <Image src={event1} alt="event1" width={1194} height={226} />
        </Styled.SmallEvent>
        <Link href="/shop/bysize/s">
          <Styled.NormalEvent>사이즈별</Styled.NormalEvent>
        </Link>
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
    min-width: ${theme.size.shopDetailMinWidth};
    height: fit-content;
  `,
  EventWrapper: styled.div`
    width: 100%;
    height: 1189px;
    padding: 45px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.white};
  `,
  SmallEvent: styled.div`
    height: 226px;
    width: 1194px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: #d9d9d9;
    margin: 25px 0;
    overflow: hidden;
  `,
  NormalEvent: styled.div`
    height: 330px;
    font-size: 64px;
    font-weight: 700;
    width: 1194px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: #d9d9d9;
    margin: 25px 0;
  `,
};

export default Shop;
