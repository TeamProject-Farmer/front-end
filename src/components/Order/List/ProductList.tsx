import styled from '@emotion/styled';
import theme from '@styles/theme';
import { OrderItem } from '../../../types/order/types';

const ProductList = ({ productList }) => {
  return (
    <Styled.Wrapper>
      {productList &&
        productList?.map((ele: OrderItem) => {
          const {
            productId,
            productName,
            count,
            productPrice,
            imgUrl,
            totalPrice,
          } = ele;
          return (
            <Styled.ProductWrapper key={productId}>
              <Styled.ImgBox src={imgUrl} alt={productName} />
              <Styled.ContentWrapper>
                <Styled.FontBlack>상품명 : {productName}</Styled.FontBlack>
                <Styled.FontGray>수량 : {count}</Styled.FontGray>
                <Styled.FontBlack>
                  {totalPrice ? totalPrice : productPrice}
                </Styled.FontBlack>
              </Styled.ContentWrapper>
            </Styled.ProductWrapper>
          );
        })}
    </Styled.Wrapper>
  );
};

export default ProductList;

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ProductWrapper: styled.div`
    width: 500px;
    height: 130px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.green1};
    display: flex;
    gap: 20px;
    padding: 20px;
  `,
  ImgBox: styled.img`
    width: 90px;
    height: 90px;
    background-color: #d9d9d9;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
  `,
  FontBlack: styled.div`
    font-size: 16px;
  `,
  FontGray: styled.div`
    font-size: 16px;
    color: #606367;
  `,
};
