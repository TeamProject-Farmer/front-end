import { useState } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { sizeSortOptions, productSortOptions } from 'src/types/shop/types';
import ProductWrapper from '../Common/ProductWrapper/ProductWrapper';
import OrderBar from '../Common/OrderBar';
import SizeBar from '../Common/SizeBar';
import { getShopBySize } from 'src/apis/shop/product';
import { ShortTempProduct } from '../type';

const BySize = () => {
  const [sizetOption, setSizeOption] = useState<string>('S');
  const [productOption, setProductOption] = useState<string>('NEWS');
  const [productList, setProductList] = useState([]);

  return (
    <Styled.Wrapper>
      <SizeBar optionList={sizeSortOptions} setProductOption={setSizeOption} productOption={sizetOption} />
      <Styled.ContentWrapper>
        <ProductWrapper productList={ShortTempProduct}/>
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
