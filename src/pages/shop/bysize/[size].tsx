import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import { getShopBySize } from 'src/apis/shop/product';
import { sizeSortOptions } from 'src/utils/shop/sortOption';
import { scrollToTop } from 'src/utils/register/scrollUp';
import { BySizeStyled as Styled } from '@components/Shop/styles';
import SizeBar from '@components/Shop/Common/OptionBars/SizeBar';
import ProductWrapper from '@components/Shop/Common/ProductWrapper';

const BySizePage: NextPageWithLayout = () => {
  const size = useRouter().query.size?.toString().toUpperCase() || '';
  const [sizeOption, setSizeOption] = useState<string>('S');
  const [orderType, setOrderType] = useState<string>('NEWS');
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: bySizeData, isLoading } = useQuery({
    queryKey: ['shopBySize', currentIndex, sizeOption, orderType],
    queryFn: () => getShopBySize({
      sizeOption,
      orderType,
      currentIndex,
    }),
    keepPreviousData: true,
  });

  useEffect(() => {
    scrollToTop();
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
    if (size) setSizeOption(size);
  }, [orderType, size]);

  if (isLoading) return;
  return (
    <Styled.Wrapper>
      <SizeBar
        optionList={sizeSortOptions}
        setProductOption={setSizeOption}
        productOption={sizeOption}
      />
      <Styled.ContentWrapper>
        <ProductWrapper
          productList={bySizeData.content}
          setProductOption={setOrderType}
          productOption={orderType}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          totalIndex={bySizeData.totalPages}
          isExceptional={true}
        />
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
}

BySizePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BySizePage;