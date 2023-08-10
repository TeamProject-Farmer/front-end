import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import OrderBar from '../Common/OrderBar';
import SideAd from '../Common/SideAd';
import Category from '../Common/Category';
import Product from '@components/Common/Product';
import { categprySelector } from 'src/types/shop/types';
import { getProductList } from 'src/apis/shop/product';
import MDPick from './MDPick';
import ProductWrapper from '../Common/ProductWrapper/ProductWrapper';

const ShopDetail = () => {
  const categoryId = useSelector(categprySelector);
  const [productList, setProductList] = useState([]);
  const [productOption, setProductOption] = useState<string>('NEWS');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>();

  const handleProductList = async () => {
    const response = await getProductList(
      productOption,
      categoryId.id,
      currentIndex,
    );
    setProductList(response.content);
    setTotalPages(response.totalPages);
  };
  useEffect(() => {
    handleProductList();
  }, [productOption, categoryId, currentIndex]);
  useEffect(() => {
    setCurrentIndex(0);
    if(currentIndex == 0) handleProductList();
  }, [ productOption])
  return (
    <Styled.Wrapper>
      <Category />
      <Styled.Title>{categoryId.name}</Styled.Title>
      <Styled.ContentWrapper>
        <MDPick />
        <ProductWrapper
          productList={productList}
          setProductOption={setProductOption}
          productOption={productOption}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          totalIndex={totalPages}
          isExceptional={true}
        />
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
};
export default ShopDetail;
