import styled from '@emotion/styled';
import theme from '@styles/theme';
import Item from '../Common/Item';
import SideAd from '../Common/SideAd';

const EventDetail = () => {
  //임시로 넣은 리스트입니다.
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
    {
      id: 4,
      image: '이미지',
      contentTitle: '상품명',
      pricePercent: 20,
      totalPrice: '10,000',
      reviewScore: 4.8,
      totalReview: '1,105',
    },
    {
      id: 5,
      image: '이미지',
      contentTitle: '상품명',
      pricePercent: 20,
      totalPrice: '10,000',
      reviewScore: 4.8,
      totalReview: '1,105',
    },
    {
      id: 6,
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
      <div>header 갖고 올 예정</div>
      <Styled.VerticalLine />
      {/* 데이터가 어떻게 넘어오냐에 따라 다를 것 같음 */}
      <Styled.ContentWrapper>
        <SideAd />
        <Styled.ImageWrapper />
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
            ></Item>
          ))}
          {/* 어떤 조건으로 생기는지에 따라 다를 것 같음 */}
          <Styled.BlankItem />
          <Styled.BlankItem />
        </Styled.ItemWrapper>
      </Styled.ContentWrapper>
      <div>footer 갖고 올 예정</div>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  VerticalLine: styled.div`
    width: 100vw;
    max-width: 100%;
    height: 2px;
    background-color: #585858;
  `,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: ${theme.size.mainWidth};
    margin-top: 110px;
    position: relative;
  `,
  ImageWrapper: styled.div`
    width: inherit;
    height: 1500px;
    background-color: ${theme.colors.lightGray};
    margin-bottom: 72px;
  `,
  ItemWrapper: styled.div`
    width: inherit;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  BlankItem: styled.div`
    width: 280px;
    height: 410px;
    background-color: #ecf9e9;
    margin-bottom: 24px;
  `,
};
export default EventDetail;