import styled from '@emotion/styled';
import theme from '@styles/theme';
import Item from '@components/Shop/Common/Item';
import leftArrow from '@assets/images/shop/similarLArrow.svg';
import rightArrow from '@assets/images/shop/similarRArrow.svg';

const SimilarProducts = () => {
  const TempList = [
    {
      id: 1,
      image: '이미지',
      contentTitle: '상품명',
      pricePercent: 20,
      totalPrice: '10,000',
      reviewScore: 4.8,
      totalReview: '1,105',
    },
    {
      id: 2,
      image: '이미지',
      contentTitle: '상품명',
      pricePercent: 20,
      totalPrice: '10,000',
      reviewScore: 4.8,
      totalReview: '1,105',
    },
    {
      id: 3,
      image: '이미지',
      contentTitle: '상품명',
      pricePercent: 20,
      totalPrice: '10,000',
      reviewScore: 4.8,
      totalReview: '1,105',
    },
  ];
  return (
    <Styled.Wrapper>
      <Styled.Title>비슷한 상품</Styled.Title>
      <Styled.ItemWrapper>
        {TempList.map(i => (
          <Item
            number={i.id}
            image={i.image}
            contentTitle={i.contentTitle}
            pricePercent={i.pricePercent}
            totalPrice={i.totalPrice}
            reviewScore={i.reviewScore}
            totalReview={i.totalReview}
            isSpecialPrice={true}
            totalWidth={220}
            totalHeight={313}
          ></Item>
        ))}
      </Styled.ItemWrapper>
      <Styled.ButtonWrapper>
        <button>
          <Styled.Left />
        </button>
        <button>
          <Styled.Right />
        </button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  `,
  Title: styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 18.63px;
  `,
  ItemWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  `,
  ButtonWrapper: styled.div`
    width: 89px;
    height: 39px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    & > button {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 1px solid ${theme.colors.green1};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  Right: styled(leftArrow)``,
  Left: styled(rightArrow)``,
};

export default SimilarProducts;
