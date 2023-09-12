import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { getShopBySize } from 'src/apis/shop/product';
import { sizeSortOptions } from 'src/utils/shop/sortOption';
import { scrollToTop } from 'src/utils/register/scrollUp';
import SizeBar from '../Common/SizeBar';
import ProductWrapper from '../Common/ProductWrapper';


const BySize = () => {
  const size = useRouter().query.size?.toString().toUpperCase() || '';
  const [sizeOption, setSizeOption] = useState<string>('S');
  const [orderType, setOrderType] = useState<string>('NEWS');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productList, setProductList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const handleDetailData = async () => {
    const response = await getShopBySize({
      sizeOption,
      orderType,
      currentIndex,
    });
    setProductList(response.content);
    setTotalPages(response.totalPages);
  };
  useEffect(() => {
    handleDetailData();
    scrollToTop();
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
    if (size) setSizeOption(size);
    if (currentIndex == 0) handleDetailData();
  }, [sizeOption, orderType, size]);

  return (
    <Styled.Wrapper>
      <SizeBar
        optionList={sizeSortOptions}
        setProductOption={setSizeOption}
        productOption={sizeOption}
      />
      <Styled.ContentWrapper>
        <ProductWrapper
          productList={productList}
          setProductOption={setOrderType}
          productOption={orderType}
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
    width: 100%;
    min-width: ${theme.size.shopDetailMinWidth};
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
  `,
};
export default BySize;
