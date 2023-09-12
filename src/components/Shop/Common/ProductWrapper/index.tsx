import styled from '@emotion/styled';
import theme from '@styles/theme';
import SideAd from '../SideAd';
import OrderBar from '../OrderBar';
import Product from '@components/Common/Product';
import Pagination from '@components/Shop/DetailPage/ContentWrapper/Pagination';
import { productSortOptions } from 'src/utils/shop/sortOption';
import { handleHeight } from 'src/utils/shop/handleHeight';
import { ProductAPI, ProductWrapperProps } from 'src/types/shop/types';

const ProductWrapper = (props: ProductWrapperProps) => {
  const {
    productList,
    setProductOption,
    productOption,
    currentIndex,
    setCurrentIndex,
    totalIndex,
    isExceptional,
    pageElements,
  } = props;

  return (
    <Styled.Wrapper>
      <OrderBar
        optionList={productSortOptions}
        setProductOption={setProductOption}
        productOption={productOption}
      />
      <Styled.OrderItemWrapper height={handleHeight(pageElements)}>
        <SideAd top={0} />
        {productList?.map((item: ProductAPI) => (
          <Styled.OrderItem key={item.productId}>
            <Product
              productId={item.productId}
              thumbnailImg={item.imgUrl}
              name={item.productName}
              discountRate={item.discountRate}
              price={item.price}
              averageStarRating={item.averageStarRating}
              reviewCount={item.reviewCount}
            ></Product>
          </Styled.OrderItem>
        ))}
        <Pagination
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          totalIndex={totalIndex}
          isExceptional={isExceptional}
        />
      </Styled.OrderItemWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div``,
  OrderItemWrapper: styled.div<{ height: number }>`
    position: relative;
    width: ${theme.size.mainWidth};
    /* height: 2032px; */
    height: ${props => (props.height ? `${props.height}px` : '2032px')};
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 70px auto;
  `,
  OrderItem: styled.div`
    margin-bottom: 20.47px;
    margin-right: 20.27px;
    &:nth-child(4n + 1) {
      margin-right: 0;
    }
  `,
};
export default ProductWrapper;
