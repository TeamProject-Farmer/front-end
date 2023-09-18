import Image from 'next/image';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from '@pages/_app';
import Layout from '@pages/layout';
import Category from '@components/Common/Category';
import SideAd from '@components/Shop/Common/SideAd';
import checkIsMember from 'src/utils/shop/checkIsMember';
import { FirstCouponStyled as Styled } from '@components/Shop/styles';

const BySizePage: NextPageWithLayout = () => {
  const { coupon } = checkIsMember();

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
          <Styled.Button onClick={coupon}>
            다운받기
            <Styled.Arrow />
          </Styled.Button>
        </Styled.ImageBox>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

BySizePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BySizePage;
