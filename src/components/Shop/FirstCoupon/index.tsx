import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Category from '@components/Common/Category';
import SideAd from '@components/Shop/Common/SideAd';
import arrow from '@assets/images/shop/arrow79.svg';

const FirstCoupon = () => {
  return (
    <Styled.Wrapper>
      <Category />
      <Styled.ContentWrapper>
        <SideAd top={170} left={400} />
        <Styled.ImageBox>
          <Image
            src="/assets/images/shop/firstCouponImg.svg"
            alt="download-coupon"
            width={1000}
            height={3097}
          />
          <Styled.Button onClick={()=>alert('신규 가입 쿠폰이 발급되었습니다.')}>
            다운받기
            <Styled.Arrow />
          </Styled.Button>
        </Styled.ImageBox>
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
  ImageBox: styled.div`
    position: relative;
  `,
  Button: styled.button`
    position: absolute;
    top: 1262px;
    left: 255px;
    border: none;
    border-radius: 10px;
    width: 490px;
    height: 130px;
    background-color: ${theme.colors.green1};
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
  `,
  Arrow: styled(arrow)``,
};

export default FirstCoupon;
