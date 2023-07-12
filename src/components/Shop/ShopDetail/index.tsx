import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Item from '../Common/Item';
import OrderBar from '../Common/OrderBar';
import SideAd from '../Common/SideAd';
import Category from '../Common/Category';
import { current } from '@reduxjs/toolkit';

const ShopDetail = () => {
  const router = useRouter();
  const menu = router.query.category;
  let category: string;
  if (menu) {
    category = menu.toString();
  }
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

  //이 부분 지원님 코드랑 겹치는 부분이 있어서 나중에 외부파일에서 한꺼번에 관리하면 좋을 것 같습니다!
  const tempOptions: string[] = [
    '신상품순',
    '리뷰많은순',
    '낮은가격순',
    '높은가격순',
  ];
  const currentPage = {
    fleshy: '다육이',
    cactus: '선인장',
    phalaenopsis: '호접란',
    scindapsus: '스킨답서스',
    palm: '야자목',
    petProduction: '키움용품',
  };
  return (
    <Styled.Wrapper>
      {/* home header 호출하니 이미지 호출이 안되는 문제가 있어서 임시로 비워둡니다! */}
      <Category />
      <Styled.Title>{currentPage[category]}</Styled.Title>
      <Styled.ContentWrapper>
        <Styled.PickWrapper>
          <Styled.PickTitle>MD's PICK</Styled.PickTitle>
          <Styled.PickItemWrapper>
            {TempList.map(i => (
              <Link href={`/shop/${currentPage[category]}/detail/1`}>
                <Item
                  image={i.image}
                  contentTitle={i.contentTitle}
                  totalPrice={i.totalPrice}
                  reviewScore={i.reviewScore}
                  totalReview={i.totalReview}
                  imageSize={215}
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
              </Link>
            ))}
          </Styled.PickItemWrapper>
        </Styled.PickWrapper>
        <OrderBar optionList={tempOptions} />
        <Styled.OrderItemWrapper>
          <SideAd top={0} />
          {/* 추후 api 연동 */}
          {TempList.map(i => (
            <Link href={`/shop/${currentPage[category]}/detail/1`}>
              <Item
                image={i.image}
                contentTitle={i.contentTitle}
                totalPrice={i.totalPrice}
                pricePercent={i.pricePercent}
                reviewScore={i.reviewScore}
                totalReview={i.totalReview}
                imageSize={232.5}
                totalWidth={252.7}
                totalHeight={333.3}
                titleSize={16}
                exceptPercent={false}
                priceSize={16}
                reviewSize={12}
                paddingTop={6}
                contentPadding={1}
                isSpecialPrice={true}
              ></Item>
            </Link>
          ))}
        </Styled.OrderItemWrapper>
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
    display: flex;
    justify-content: space-between;
  `,
  OrderItemWrapper: styled.div`
    position: relative;
    width: ${theme.size.mainWidth};
    height: 1562px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 70px 0;
    & > a > div {
      margin-bottom: 74px;
      margin-right: 63px;
    }
    & > a:nth-child(4n + 1) > div {
      margin-right: 0;
    }
  `,
};
export default ShopDetail;
