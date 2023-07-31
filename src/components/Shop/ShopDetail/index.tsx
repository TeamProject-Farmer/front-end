import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { current } from '@reduxjs/toolkit';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import OrderBar from '../Common/OrderBar';
import SideAd from '../Common/SideAd';
import Category from '../Common/Category';
import Product from '@components/Common/Product';
import {
  OrderOptions,
  CurrentPage,
} from '../type';
import { getProductList, getMDPickList } from 'src/apis/shop/product';

const ShopDetail = () => {
  const router = useRouter();
  const menu = router.query.category;
  let category: string;
  if (menu) {
    category = menu.toString();
  }
  const [productList, setProductList] = useState([]);
  const [MDPickList, setMDPickList] = useState([]);
  const [categoryId, setCategoryId] = useState<number>();
  const [productOption, setProductOption] = useState<string>('NEWS');
  const [totalPages, setTotalPages] = useState<number>();

  const handleProductList = async () => {
    const response = await getProductList(productOption, 5);
    setProductList(response.content);
    setTotalPages(response.totalPages);
  };
  const handleMDPickList = async () => {
    const response = await getMDPickList();
    setMDPickList(response);
  };
  useEffect(() => {
    handleProductList();
    handleMDPickList();
  }, [productOption])

  return (
    <Styled.Wrapper>
      <Category />
      <Styled.Title>{CurrentPage[category]}</Styled.Title>
      <Styled.ContentWrapper>
        <Styled.PickWrapper>
          <Styled.PickTitle>MD's PICK</Styled.PickTitle>
          <Styled.PickItemWrapper>
            {MDPickList && MDPickList.map(i => (
              <Link href={`/shop/${CurrentPage[category]}/detail/${i.productID}`}>
                <Product
                  key={i.productId}
                  thumbnailImg='이미지'
                  name={i.productName}
                  discountRate={i.discountRate}
                  price={i.price}
                  averageStarRating={i.averageStarRating}
                  reviewCount={i.reviewCount}
                ></Product>
              </Link>
            ))}
          </Styled.PickItemWrapper>
        </Styled.PickWrapper>
        <OrderBar optionList={OrderOptions} setProductOption={setProductOption} productOption={productOption}/>
        <Styled.OrderItemWrapper>
          <SideAd top={0} />
          {/* 추후 api 연동 */}
          {productList && productList.map(i => (
            <Link href={`/shop/${CurrentPage[category]}/detail/${i.productId}`}>
              <Product
                key={i.productId}
                thumbnailImg='이미지'
                name={i.productName}
                discountRate={i.discountRate}
                price={i.price}
                averageStarRating={i.averageStarRating}
                reviewCount={i.reviewCount}
              ></Product>
            </Link>
          ))}
          
        </Styled.OrderItemWrapper>
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
    color: ${theme.colors.black};
    text-align: center;
  `,
  Title: styled.div`
    height: 130px;
    width: 100%;
    font-size: 30px;
    font-weight: 700;
    background-color: #ecf9e9;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 110px;
    align-items: center;
  `,
  PickWrapper: styled.div`
    margin-top: 88px;
    margin-bottom: 65px;
    display: flex;
    flex-direction: column;
    width: ${theme.size.mainWidth};
  `,
  PickTitle: styled.div`
    text-align: left;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 17.76px;
  `,
  PickItemWrapper: styled.div`
    margin: 0 auto;
    width: ${theme.size.mainWidth};
    height: fit-content;
    display: flex;
    justify-content: space-between;
  `,
  OrderItemWrapper: styled.div`
    position: relative;
    width: ${theme.size.mainWidth};
    height: 1062px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 70px 0;
    & > a > div {
      margin-bottom: 20.47px;
      margin-right: 20.27px;
    }
    & > a:nth-child(4n + 1) > div {
      margin-right: 0;
    }
  `,
};
export default ShopDetail;
