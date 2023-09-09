import Link from 'next/link';
import Image from 'next/image';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import Category from '@components/Common/Category';
import { ShopIndexStyled as Styled } from '@components/Shop/styles';


const ShopPage: NextPageWithLayout = () => {
  const event1: string = '/assets/images/shop/eventBanner1.svg';
  // const event2: string = '/assets/images/shop/eventBanner2.svg';

  return (
    <Styled.Wrapper>
      <Category />
      <Styled.EventWrapper>
        <Link href="/mypage/myplants">
        <Styled.SmallEvent>
          <Image src={event1} alt="event1" width={1194} height={226} />
        </Styled.SmallEvent>
        </Link>
        <Link href="/shop/bysize/s">
          <Styled.NormalEvent>사이즈별</Styled.NormalEvent>
        </Link>
        <Link href="/shop/event/1">
          <Styled.NormalEvent>이벤트 페이지</Styled.NormalEvent>
        </Link>
      </Styled.EventWrapper>
    </Styled.Wrapper>
  );
}

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ShopPage;