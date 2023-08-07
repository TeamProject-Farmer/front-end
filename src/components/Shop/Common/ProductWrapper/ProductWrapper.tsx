import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import SideAd from '../SideAd';
import OrderBar from '../OrderBar';
import Product from '@components/Common/Product';
import { productSortOptions } from 'src/types/shop/types';
import { ProductAPI } from 'src/types/shop/types';

interface Props {
  productList: any;
}
const ProductWrapper = (props: Props) => {
  const { productList } = props;
  const router = useRouter();
  const menu = router.query.category;
  let category: string;
  if (menu) {
    category = menu.toString();
  }
  const [productOption, setProductOption] = useState<string>('NEWS');
  const [totalPages, setTotalPages] = useState<number>();

  return (
    <Styled.Wrapper>
      <OrderBar
        optionList={productSortOptions}
        setProductOption={setProductOption}
        productOption={productOption}
      />
      <Styled.OrderItemWrapper>
        <SideAd top={0} />
        {productList?.map((item: ProductAPI) => (
          <Link href={`/shop/${category}/detail/${item.productId}`}>
            <Product
              key={item.productId}
              thumbnailImg={item.imgUrl}
              name={item.productName}
              discountRate={item.discountRate}
              price={item.price}
              averageStarRating={item.averageStarRating}
              reviewCount={item.reviewCount}
            ></Product>
          </Link>
        ))}
      </Styled.OrderItemWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper : styled.div`
   
  `,
  OrderItemWrapper: styled.div`
    position: relative;
    width: ${theme.size.mainWidth};
    height: 2032px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 70px auto;
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
