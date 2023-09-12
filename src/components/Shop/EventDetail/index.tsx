import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import theme from '@styles/theme';
import SideAd from '../Common/SideAd';
import Category from '@components/Common/Category';
import Product from '@components/Common/Product';
import { getEventProduct } from 'src/apis/shop/product';

const EventDetail = () => {
  const [productList, setProductList] = useState([]);

  const handleEventProductList = async () => {
    const response = await getEventProduct();
    setProductList(response);
  };
  useEffect(() => {
    handleEventProductList();
  }, []);
  return (
    <Styled.Wrapper>
      <Category />
      <Styled.VerticalLine />
      <Styled.ContentWrapper>
        <SideAd />
        <Styled.ImageWrapper />
        <Styled.ItemWrapper>
          {productList &&
            productList.map(i => (
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

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: ${theme.size.shopDetailMinWidth};
  `,
  VerticalLine: styled.div`
    width: 98.9vw;
    max-width: 100%;
    height: 2px;
    background-color: #585858;
  `,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: ${theme.size.mainWidth};
    margin-top: 110px;
    position: relative;
    height: 2615px;
  `,
  ImageWrapper: styled.div`
    width: inherit;
    height: 1500px;
    background-color: ${theme.colors.lightGray};
    margin-bottom: 72px;
  `,
  ItemWrapper: styled.div`
    width: inherit;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    & > div > a > div {
      margin-right: 22.56px;
      margin-bottom: 21.76px;
    }
    & > div:nth-of-type(4n) > a > div {
      margin-right: 0;
    }
  `,
  BlankItem: styled.div`
    width: 280px;
    height: 410px;
    background-color: #ecf9e9;
    margin-bottom: 24px;
  `,
};
export default EventDetail;
