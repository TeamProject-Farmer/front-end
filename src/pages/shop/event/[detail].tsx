import { ReactElement } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { NextPageWithLayout } from '@pages/_app';
import Layout from '@pages/layout';
import SideAd from '@components/Shop/Common/SideAd';
import Category from '@components/Common/Category';
import Product from '@components/Common/Product';
import { getEventProduct } from 'src/apis/shop/product';
import { EventStyled as Styled } from '@components/Shop/styles';

const EventDetailPage: NextPageWithLayout = () => {
  const { data: evetProductList, isLoading } = useQuery({
    queryKey: ['evetProductList'],
    queryFn: () => getEventProduct(),
  });

  if (isLoading) return;
  return (
    <Styled.Wrapper>
      <Category />
      <Styled.VerticalLine />
      <Styled.ContentWrapper>
        <SideAd />
        <Styled.ImageWrapper />
        <Styled.ItemWrapper>
          {evetProductList?.map(i => (
            <div key={i.productId}>
              <Product
                productId={i.productId}
                thumbnailImg={i.imgUrl}
                name={i.productName}
                discountRate={i.discountRate}
                price={i.price}
                averageStarRating={i.averageStarRating}
                reviewCount={i.reviewCount}
              ></Product>
            </div>
          ))}
        </Styled.ItemWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

EventDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default EventDetailPage;
