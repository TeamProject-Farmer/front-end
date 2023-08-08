import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
// import Category from '@components/Common/Category';
import Category from '../Common/Category';
import Panel from './Panel';
import PreviewPhoto from './PreviewPhoto';
import OrderBar from '@components/Shop/Common/OrderBar';
import ContentWrapper from './ContentWrapper';
import { getDetail } from 'src/apis/shop/product';
import { getReview, getReviewStar } from 'src/apis/shop/review';
import { detailLinkOptions } from 'src/types/shop/types';
import { CateId } from 'src/types/shop/types';
import { getProductCategory } from 'src/apis/common/category';
import { useDispatch, useSelector } from 'react-redux';
import { setProductId } from 'store/reducers/productIdSlice';
import { idSelector } from 'src/types/shop/types';

const DetailPage = () => {
  const dispatch = useDispatch();
  const productId = useSelector(idSelector);
  let totalReview: number = 0;
  const [detailList, setDetailList] = useState({  });
  const [categoryId, setCategoryId] = useState<number>(1);
  const [categoryList, setCategoryList] = useState([]);
  
  const handleDetailData = async () => {
    const response = await getDetail(productId);
    setDetailList(response);
  };
  const handleDispatch = () => {
    dispatch(setProductId(productId));
  }
  const handleCategoryList = async () => {
    const response = await getProductCategory();
    setCategoryList(response);
  };
  // useEffect(() => {
  //   category && setCategoryId((CateId[category]))
  //   console.log(categoryId)
  // }, [category])

  useEffect(() => {
    handleDetailData();
    handleDispatch();
  }, []);



  return (
    <Styled.Wrapper>
      <Category/>
      <Panel />
      <PreviewPhoto />
      <OrderBar
        optionList={detailLinkOptions}
        width={theme.size.shopDetailWrapper}
      />
      <ContentWrapper/>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
  `,
};

export default DetailPage;
