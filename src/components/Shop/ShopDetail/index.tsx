import styled from '@emotion/styled';
import theme from '@styles/theme';
import Item from '../Common/Item';
import SideAd from '../Common/SideAd';

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
          <SideAd top={450}/>
          <Styled.PickTitle>MD's PICK</Styled.PickTitle>
          <Styled.PickItemWrapper>
            {TempList.map(i => (
              <Item
                image={i.image}
                contentTitle={i.contentTitle}
                totalPrice={i.totalPrice}
                reviewScore={i.reviewScore}
                totalReview={i.totalReview}
                imageSize ={215}
                totalWidth={216}
                totalHeight={311}
                titleSize={16}
                exceptPercent={true}
                priceSize={16}
                reviewSize={12}
                isSpecialPrice={false}
                paddingTop={6}
                contentPadding={1}
              ></Item>
            ))}
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
        <Styled.OrderItemWrapper>
          {/* 추후 api 연동 */}
        {TempList.map(i => (
              <Item
                image={i.image}
                contentTitle={i.contentTitle}
                totalPrice={i.totalPrice}
                pricePercent={i.pricePercent}
                reviewScore={i.reviewScore}
                totalReview={i.totalReview}
                imageSize ={232.5}
                totalWidth={249.17}
                totalHeight={333.3}
                titleSize={16}
                exceptPercent={false}
                priceSize={16}
                reviewSize={12}
                paddingTop={6}
                contentPadding={1}
                isSpecialPrice={true}
              ></Item>
            ))}
        </Styled.OrderItemWrapper>
      </Styled.ContentWrapper>
      <div>footer 불러올 예정</div>
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
    align-items: center;
    
  `,
  PickWrapper: styled.div`
    position: relative;
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

  OrderWrapper: styled.div`
    width: 99vw;
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
  OrderItemWrapper: styled.div`
    width: ${theme.size.mainWidth};
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 70px 0;
    & > div {
      margin-bottom: 74px;
    }
  `,
};
export default ShopDetail;
