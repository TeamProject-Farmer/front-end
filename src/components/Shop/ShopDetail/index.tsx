import styled from '@emotion/styled';
import theme from '@styles/theme';
import Item from '../Common/Item';
import SideAd from '../Common/SideAd';
import Arrow from '@assets/images/shop/rightArrow.svg';

const ShopDetail = () => {
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
  ];
  return (
    <Styled.Wrapper>
      <div>header 불러올 예정</div>
      <div>카테고리</div>
      <Styled.Title>키움용품</Styled.Title>
      <Styled.ContentWrapper>
        <Styled.PickWrapper>
          <Styled.PickTitle>MD's PICK</Styled.PickTitle>
          <Styled.PickItemWrapper>
            {TempList.map(i => (
              <Item
                number={i.id}
                image={i.image}
                contentTitle={i.contentTitle}
                pricePercent={i.pricePercent}
                totalPrice={i.totalPrice}
                reviewScore={i.reviewScore}
                totalReview={i.totalReview}
              ></Item>
            ))}
            <Styled.PickItemButton />
          </Styled.PickItemWrapper>
        </Styled.PickWrapper>
        <Styled.OrderWrapper>
          <div>
            <div>신상품순</div>
            <div>리뷰많은순</div>
            <div>낮은가격순</div>
            <div>높은가격순</div>
          </div>
        </Styled.OrderWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.black};
    text-align: center;
    font-family: Inter;
    font-style: normal;
    line-height: normal;
  `,
  Title: styled.div`
    height: 130px;
    width: 100%;
    font-size: 30px;
    font-weight: 700;
    background-color: #ecf9e9;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 110px;
    position: relative;
    align-items: center;
  `,
  PickWrapper: styled.div`
    margin-top: 88px;
    margin-bottom: 65px;
    display: flex;
    flex-direction: column;
    width: ${theme.size.mainWidth};
  `,
  PickTitle: styled.div`
    text-align: left;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 17.76px;
  `,
  PickItemWrapper: styled.div`
    margin: 0 auto;
    width: ${theme.size.mainWidth};
    height: fit-content;
    position: relative;
    display: flex;
    justify-content: space-between;
  `,
  PickItemButton: styled(Arrow)`
    position: absolute;
    top: 40%;
    right: -40px;
  `,
  OrderWrapper: styled.div`
    width: 100vw;
    max-width: 100%;
    height: 60px;
    /* 디자인처럼 색이 잘 보이려면 3px로 바꿔야할 것 같음 */
    border-top: 2px solid ${theme.colors.green1};
    border-bottom: 2px solid ${theme.colors.green1};
    & > div {
      width: ${theme.size.mainWidth};
      height: inherit;
      display: flex;
      align-items: center;
      margin: 0 auto;
      & > div {
        padding-right: 113px;
        font-size: 16px;
        font-weight: 500;
      }
    }
  `,
};
export default ShopDetail;
