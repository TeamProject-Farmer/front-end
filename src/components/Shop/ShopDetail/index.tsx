import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { current } from '@reduxjs/toolkit';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import OrderBar from '../Common/OrderBar';
import SideAd from '../Common/SideAd';
import Category from '@components/Common/Category';
import Product from '@components/Common/Product';
import {
  OrderOptions,
  CurrentPage,
} from '../type';
import { getProductList } from 'src/apis/shop/product';
import { getProductCategory } from 'src/apis/common/category';
import MDPick from './MDPick';

const ShopDetail = () => {
  const router = useRouter();
  const menu = router.query.category;
  let category: string;
  if (menu) {
    category = menu.toString();
  }
  const [productList, setProductList] = useState([]);
  const [categoryId, setCategoryId] = useState<number>();
  const [productOption, setProductOption] = useState<string>('NEWS');
  const [totalPages, setTotalPages] = useState<number>();
  const [categoryList, setCategoryList] = useState([]);
  
  
  const handleProductList = async () => {
    const response = await getProductList(productOption, 5);
    setProductList(response.content);
    setTotalPages(response.totalPages);
    console.log(productList);
  };
  console.log(productList);
  const handleCategoryList = async () => {
    const response = await getProductCategory();
    setCategoryList(response);
  };
  useEffect(() => {
    handleProductList();
  }, [productOption])
  useEffect(() => {
    handleCategoryList();
  }, [])

  return (
    <Styled.Wrapper>
      <Category  category={categoryList}/>
      <Styled.Title>{CurrentPage[category]}</Styled.Title>
      <Styled.ContentWrapper>
        <MDPick />
        <OrderBar optionList={OrderOptions} setProductOption={setProductOption} productOption={productOption}/>
        <Styled.OrderItemWrapper>
          <SideAd top={0} />
          {productList && productList.map(i => (
            <Link href={`/shop/${CurrentPage[category]}/detail/${i.productId}`}>
              <Product
                key={i.productId}
                thumbnailImg={i.imgUrl}
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
  OrderItemWrapper: styled.div`
    position: relative;
    width: ${theme.size.mainWidth};
    height: 2032px;
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
