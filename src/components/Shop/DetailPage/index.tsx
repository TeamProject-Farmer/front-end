import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Category from '../Common/Category';
import Panel from './Panel';
import PreviewPhoto from './PreviewPhoto';
import OrderBar from '@components/Shop/Common/OrderBar';
import ContentWrapper from './ContentWrapper';
import { getDetail } from 'src/apis/shop/product';
import { getReview, getReviewStar } from 'src/apis/shop/review';
import { detailLinkOptions } from 'src/types/shop/types';

const DetailPage = () => {
  const router = useRouter();
  const menu = router.query.detail;
  let productId: number;
  if (menu) {
    productId = Number(menu);
  }

  console.log('productId');
  console.log(productId);

  let totalReview: number = 0;
  const [detailList, setDetailList] = useState({ name: 'temp' });
  const [reviewList, setReviewList] = useState();
  const [reviewStar, setReviewStar] = useState({});
  const [reviewStarArray, setReviewStarArray] = useState([]);

  const handleDetailData = async () => {
    const response = await getDetail(productId);
    setDetailList(response);
  };
  const handleReviewData = async () => {
    const response = await getReview(productId);
    const responseReview = await getReviewStar(productId);
    setReviewList(response);
    setReviewStar(responseReview);
    setReviewStarArray([
      responseReview.fiveStar,
      responseReview.fourStar,
      responseReview.threeStar,
      responseReview.twoStar,
      responseReview.oneStar
    ]);
  };

  // const handleReviewStara = async () => {
  //   const responseReview = await getReviewStar(productId);
  //   setReviewStar(responseReview);
  // };

  useEffect(() => {
    handleDetailData();
    handleReviewData();
  }, []);

  console.log('detailList');
  console.log(reviewStar);
  return (
    <Styled.Wrapper>
      <Category />
      <Panel productName={detailList.name} totalStar={5} />
      <PreviewPhoto productId={productId} />
      <OrderBar
        optionList={detailLinkOptions}
        width={theme.size.shopDetailWrapper}
      />
      <ContentWrapper reviewStarArray={reviewStarArray}/>
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
