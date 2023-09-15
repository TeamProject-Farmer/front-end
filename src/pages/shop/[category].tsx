import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import { CateId } from 'src/utils/shop/sortOption';
import { getProductList } from 'src/apis/shop/product';
import { scrollToTop } from 'src/utils/register/scrollUp';
import Category from '@components/Common/Category';
import MDPick from '@components/Shop/ShopDetail/MDPick';
import ProductWrapper from '@components/Shop/Common/ProductWrapper';
import { ShopPageStyled as Styled } from '@components/Shop/styles';

const CategoryPage: NextPageWithLayout = () => {
  const categoryName = useRouter().query.category?.toString() || '';
  const categoryId = CateId[categoryName];
  const [productOption, setProductOption] = useState<string>('NEWS');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { data, isLoading } = useQuery({
    queryKey: ['evetProductList', productOption, categoryId, currentIndex],
    queryFn: () =>
      getProductList({
        productOption,
        categoryId,
        currentIndex,
    }),
    keepPreviousData: true,
  });

  useEffect(() => {
    scrollToTop(1030);
  }, [categoryId, currentIndex]);

  useEffect(() => {
    scrollToTop(1030);
    setCurrentIndex(0);
  }, [productOption]);

  if (isLoading) return;
  return (
    <Styled.Wrapper>
      <Category />
      <Styled.Title>{categoryName}</Styled.Title>
      <Styled.ContentWrapper>
        <MDPick />
        <ProductWrapper
          productList={data.content}
          setProductOption={setProductOption}
          productOption={productOption}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          totalIndex={data.totalPages}
          isExceptional={true}
          pageElements={data.numberOfElements}
        />
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;