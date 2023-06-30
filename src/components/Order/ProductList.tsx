import styled from '@emotion/styled'
import { OrderedProduct } from 'src/types/order/types'

const ProductList = ({productList}) => {
  return (
    <Styled.Wrapper>
    {
      productList &&
      productList.map((ele) => {
        const {id, title, count, price} = ele;
        return (
          <Styled.ProductWrapper key={id}>
            <Styled.ImgBox/>
            <Styled.ContentBox>
              <Styled.FontBlack>상품명 : {title}</Styled.FontBlack>
              <Styled.FontGray>수량 : {count}</Styled.FontGray>
              <Styled.FontBlack>{price}</Styled.FontBlack>
            </Styled.ContentBox>
          </Styled.ProductWrapper>
        )
      })
    }
  </Styled.Wrapper>
  )
}

export default ProductList

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ProductWrapper: styled.div`
    width: 847px;
    height: 130px;
    border-radius: 8px;
    background-color: #F0F0F0;
    display: flex;
    gap: 20px;
    padding: 20px;
  `,
  ImgBox: styled.div`
    width: 90px;
    height: 90px;
    background-color: #D9D9D9;
  `,
  ContentBox: styled.div`
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
}
