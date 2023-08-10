import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import SizeBar from '../Common/SizeBar';
import ProductWrapper from '../Common/ProductWrapper/ProductWrapper';
import { getShopBySize } from 'src/apis/shop/product';
import { sizeSortOptions } from 'src/types/shop/types';

const BySize = () => {
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
  }, [currentIndex]);
  useEffect(() => {
    setCurrentIndex(0);
    if(currentIndex == 0) handleDetailData();
  }, [sizeOption, orderType])
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
