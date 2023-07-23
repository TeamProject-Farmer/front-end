import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import SideAd from '../Common/SideAd';
import Product from '@components/Common/Product';
import { TempProduct, CurrentPage } from '../type';

const ProductWrapper = () => {
  const router = useRouter();
  const menu = router.query.category;
  let category: string;
  if (menu) {
    category = menu.toString();
  }

  return (
    <Styled.Wrapper>
      <SideAd top={0} />
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
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
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
export default ProductWrapper;