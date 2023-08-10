import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import OrderBar from '../Common/OrderBar';
import SideAd from '../Common/SideAd';
// import Category from '@components/Common/Category';
import Category from '../Common/Category';
import Product from '@components/Common/Product';
import { categprySelector } from 'src/types/shop/types';
import { productSortOptions } from 'src/types/shop/types';
import { getProductList } from 'src/apis/shop/product';
import { getProductCategory } from 'src/apis/common/category';
import { setProductId } from 'store/reducers/productIdSlice';
import MDPick from './MDPick';
import Pagination from '../DetailPage/ContentWrapper/Pagination';

const ShopDetail = () => {
  const categoryId = useSelector(categprySelector);
  const [productList, setProductList] = useState([]);
  const [productOption, setProductOption] = useState<string>('NEWS');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>();

  const handleProductList = async () => {
    const response = await getProductList(
      productOption,
      categoryId.id,
      currentIndex,
    );
    setProductList(response.content);
    setTotalPages(response.totalPages);
  };
  useEffect(() => {
    handleProductList();
  }, [productOption, categoryId, currentIndex]);
  useEffect(() => {
    setCurrentIndex(0);
    if(currentIndex == 0) handleProductList();
  }, [ productOption])
  console.log('shopdetail--------categoryId');
  console.log(categoryId);
  console.log(productList);
  return (
    <Styled.Wrapper>
      <Category />
      <Styled.Title>{categoryId.name}</Styled.Title>
      <Styled.ContentWrapper>
        <MDPick />
        <OrderBar
          optionList={productSortOptions}
          setProductOption={setProductOption}
          productOption={productOption}
        />
        <Styled.OrderItemWrapper>
          <SideAd top={0} />
          {productList &&
            productList.map(i => (
              <div key={i.productId}>
                <Link href={`/shop/${categoryId.name}/detail/${i.productId}`}>
                  <Product
                    id={i.productId}
                    thumbnailImg={i.imgUrl}
                    name={i.productName}
                    discountRate={i.discountRate}
                    price={i.price}
                    averageStarRating={i.averageStarRating}
                    reviewCount={i.reviewCount}
                  />
                </Link>
              </div>
            ))}
          <Pagination
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            totalIndex={totalPages}
            isExceptional={true}
          />
        </Styled.OrderItemWrapper>
        {/* <ProductWrapper
          productList={productList}
          setProductOption={setProductOption}
          productOption={productOption}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          totalIndex={totalPages}
          isExceptional={true}
        /> */}
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
  OrderItemWrapper: styled.div`
    position: relative;
    width: ${theme.size.mainWidth};
    height: 2032px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 70px 0;
    & > div > a > div {
      margin-bottom: 20.47px;
      margin-right: 20.27px;
    }
    & > div:nth-child(4n + 1) > a > div {
      margin-right: 0;
    }
  `,
};
export default ShopDetail;
