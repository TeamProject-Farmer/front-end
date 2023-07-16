import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from '@styles/theme';
import SideAd from '../Common/SideAd';
import Category from '../Common/Category';
import Product from '@components/Common/Product';
import { TempProduct, CurrentPage } from '../type';

const EventDetail = () => {
  const router = useRouter();
  const menu = router.query.category;
  let category: string;
  if (menu) {
    category = menu.toString();
  }
  return (
    <Styled.Wrapper>
      <Category />
      <Styled.VerticalLine />
      {/* 데이터가 어떻게 넘어오냐에 따라 다를 것 같음 */}
      <Styled.ContentWrapper>
        <SideAd />
        <Styled.ImageWrapper />
        <Styled.ItemWrapper>
          {/* 추후 api 연동 */}
          {TempProduct.map(i => (
            <Link href={`/shop/${CurrentPage[category]}/detail/1`}>
              <Product
                key={i.id}
                image={i.image}
                title={i.contentTitle}
                discount={i.percent}
                price={i.totalPrice}
                star={i.reviewScore}
                review={i.totalReview}
                specialPrice={true}
                freeShipping={true}
              ></Product>
              <Product
                key={i.id}
                image={i.image}
                title={i.contentTitle}
                discount={i.percent}
                price={i.totalPrice}
                star={i.reviewScore}
                review={i.totalReview}
                specialPrice={true}
                freeShipping={true}
              ></Product>
            </Link>
          ))}
        </Styled.ItemWrapper>
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
  `,
  VerticalLine: styled.div`
    width: 98.9vw;
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
    height: 2615px;
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
    align-content: flex-start;
    & > a > div {
      margin-right: 22.56px;
      margin-bottom: 21.76px;
    }
    & > a:nth-child(4n) > div {
      margin-right: 0;
    }
  `,
  BlankItem: styled.div`
    width: 280px;
    height: 410px;
    background-color: #ecf9e9;
    margin-bottom: 24px;
  `,
};
export default EventDetail;
