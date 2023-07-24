import styled from '@emotion/styled';
import theme from '@styles/theme';
import SizeBar from '../Common/SizeBar';
import OrderBar from '../Common/OrderBar';
import ProductWrapper from '../Common/ProductWrapper';
import { SizeOptions, OrderOptions } from '../type';

const BySize = () => {
  return (
    <Styled.Wrapper>
      <SizeBar optionList={SizeOptions} />
      <OrderBar optionList={OrderOptions} />
      <Styled.ContentWrapper>
        <ProductWrapper />
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
