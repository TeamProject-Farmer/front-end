import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { categprySelector, ProductListProps } from 'src/types/shop/types';
import { getProductList } from 'src/apis/shop/product';
import Category from '../Common/Category';
import MDPick from './MDPick';
import ProductWrapper from '../Common/ProductWrapper/ProductWrapper';

const ShopDetail = () => {
  const category = useSelector(categprySelector);
  const cateName = useRouter().query.category?.toString() || '';
  const [productList, setProductList] = useState<ProductListProps[]>([]);
  const [productOption, setProductOption] = useState<string>('NEWS');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>();
  let categoryId:number = category.id;

  const handleProductList = async () => {
    const response = await getProductList({
      productOption,
      categoryId,
      currentIndex}
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
      <Styled.Title>{cateName}</Styled.Title>
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
    min-width: ${theme.size.shopDetailMinWidth};
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
