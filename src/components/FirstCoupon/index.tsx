import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Category from '@components/Shop/Common/Category';
import SideAd from '@components/Shop/Common/SideAd';

const FirstCoupon = () => {
  return (
    <Styled.Wrapper>
      <Category />
      <Styled.ContentWrapper>
        <SideAd top={100} left={270} />
        <Image src='/assets/images/shop/firstCouponImg.svg' alt='download-coupon' width={1000} height={3097}/>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: ${theme.size.shopDetailMinWidth};
    width: 100vw;
    max-width: 99.7%;
  `,
  ContentWrapper: styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3350px;
    padding: 110px;
    border-top: 2px solid #585858;
  `,
};

export default FirstCoupon;
