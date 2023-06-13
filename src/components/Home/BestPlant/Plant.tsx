import styled from '@emotion/styled'
import Icon from '../common/Icon'
import theme from '@styles/theme'

const Plant = ({title, discount, price, star, review, specialPrice, freeShipping}) => {
  return (
    <Styled.Wrapper>
      <Styled.ImgBox>
        <Styled.LikeBtn>
          <Icon src='like' width={29} height={25}/>
        </Styled.LikeBtn>
      </Styled.ImgBox>
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.PriceBox>
          <Styled.Discount>{discount}</Styled.Discount>
          <Styled.Price>{price}</Styled.Price>
        </Styled.PriceBox>
        <Styled.ReviewBox>
          <Styled.Star><Icon src='star' width={16} height={15}/>{star}</Styled.Star>
          <Styled.Review>리뷰 {review}</Styled.Review>
        </Styled.ReviewBox>
        <Styled.EventBox>
          <Styled.SpecialPrice>특가상품</Styled.SpecialPrice>
          <Styled.FreeShipping>무료배송</Styled.FreeShipping>
        </Styled.EventBox>
        <Styled.Title/>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default Plant

const Styled = {
  Wrapper: styled.div`
    width: 272px;
    border: 1px solid #000;
  `,
  ImgBox: styled.div`
    position: relative;
    height: 271px;
    background-color: ${theme.colors.lightGray};
  `,
  LikeBtn: styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.5px;
    padding: 13px;
  `,
  Title: styled.p`
    font-size: 16px;
  `,
  PriceBox: styled.div`
    display: flex;
    gap: 10px;
  `,
  Discount: styled.p`
    color: #5F8D4E;
    font-size: 16px;
    font-weight: 700;
  `,
  Price: styled.p`
    font-size: 16px;
    font-weight: 600;
  `,
  ReviewBox: styled.div`
    display: flex;
    gap: 10px;
  `,
  Star: styled.p`
    display: flex;
    font-size: 12px;
    font-weight: 600;
  `,
  Review: styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #ABABAB;
  `,
  EventBox: styled.div`
    display: flex;
    gap: 5px;
    margin-top: 3px;
  `,
  SpecialPrice: styled.p`
    background-color: #A4BE7B;
    border-radius: 4px;
    padding: 3px 5px;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  FreeShipping: styled.p`
    background-color: ${theme.colors.lightGray};
    border-radius: 4px;
    padding: 3px 5px;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  `
}
