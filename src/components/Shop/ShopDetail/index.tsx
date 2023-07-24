import { useRouter } from 'next/router';
import Link from 'next/link';
import { current } from '@reduxjs/toolkit';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import OrderBar from '../Common/OrderBar';
import SideAd from '../Common/SideAd';
import Category from '../Common/Category';
import Product from '@components/Common/Product';
import { TempProduct, OrderOptions, CurrentPage, ShortTempProduct } from '../type';

const ShopDetail = () => {
  const router = useRouter();
  const menu = router.query.category;
  let category: string;
  if (menu) {
    category = menu.toString();
  }
  return (
    <Styled.Wrapper>
      <Category />
      <Styled.Title>{CurrentPage[category]}</Styled.Title>
      <Styled.ContentWrapper>
        <Styled.PickWrapper>
          <Styled.PickTitle>MD's PICK</Styled.PickTitle>
          <Styled.PickItemWrapper>
            {ShortTempProduct.map(i => (
              <Link href={`/shop/${CurrentPage[category]}/detail/1`}>
                <Product key={i.id} thumbnailImg={i.image} name={i.contentTitle} discountRate={i.percent} price={i.totalPrice} averageStarRating={i.reviewScore} reviewCount={i.totalReview}></Product>
              </Link>
            ))}
          </Styled.PickItemWrapper>
        </Styled.PickWrapper>
        <OrderBar optionList={OrderOptions}/>
        <Styled.OrderItemWrapper>
          <SideAd top={0} />
          {/* 추후 api 연동 */}
          {TempProduct.map(i => (
            <Link href={`/shop/${CurrentPage[category]}/detail/1`}>
              <Product key={i.id} thumbnailImg={i.image} name={i.contentTitle} discountRate={i.percent} price={i.totalPrice} averageStarRating={i.reviewScore} reviewCount={i.totalReview}></Product>
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
    height: 1062px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 70px 0;
    & > a > div {
      margin-bottom: 20.47px;
      margin-right: 20.27px;
    }
    & > a:nth-child(4n + 1) > div {
      margin-right: 0;
    }
  `,
};
export default ShopDetail;
