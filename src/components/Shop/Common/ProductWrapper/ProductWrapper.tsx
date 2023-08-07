import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import SideAd from '../SideAd';
import OrderBar from '../OrderBar';
import Product from '@components/Common/Product';
import { productSortOptions } from 'src/types/shop/types';

const ProductWrapper = (productList: any) => {
  const router = useRouter();
  const menu = router.query.category;
  let category: string;
  if (menu) {
    category = menu.toString();
  }
  const [productOption, setProductOption] = useState<string>('NEWS');
  const [totalPages, setTotalPages] = useState<number>();

  return (
    <>
    <OrderBar optionList={productSortOptions} setProductOption={setProductOption} productOption={productOption}/>
        <Styled.OrderItemWrapper>
          <SideAd top={0} />
          {productList && productList.map(i => (
            <Link href={`/shop/${category}/detail/${i.productId}`}>
              <Product
                key={i.productId}
                thumbnailImg={i.imgUrl}
                name={i.productName}
                discountRate={i.discountRate}
                price={i.price}
                averageStarRating={i.averageStarRating}
                reviewCount={i.reviewCount}
              ></Product>
            </Link>
          ))}
        </Styled.OrderItemWrapper>
    </>
  );
};

const Styled = {
  OrderItemWrapper: styled.div`
    position: relative;
    width: ${theme.size.mainWidth};
    height: 2032px;
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
