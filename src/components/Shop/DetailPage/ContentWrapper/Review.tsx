import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import VerticalLine from '@components/Shop/Common/VerticalLine';
import photo from '@assets/images/shop/photoIcon.svg';
import downArrow from '@assets/images/shop/downArrow1.svg';
import SingleReview from './SingleReview';
import TotalStarGauge from '@components/Shop/Common/gauge/TotalStarGauge';
import EachStarGauge from '@components/Shop/Common/gauge/EachStarGauge';
import { getReview, getReviewStar } from 'src/apis/shop/review';
import { useSelector } from 'react-redux';
import { idSelector } from 'src/types/shop/types';
import { SingleReviewProps } from 'src/types/shop/types';

const Review = () => {
  const productId = useSelector(idSelector);
  const [reviewList, setReviewList] = useState<SingleReviewProps[]>([]);
  const [reviewContent, setReviewContent] = useState([]);
  const [reviewStar, setReviewStar] = useState({});
  const [reviewTotalStar, setReviewTotalStar] = useState<number>();
  const [reviewStarArray, setReviewStarArray] = useState<number[]>([]);
  const [totalElement, setTotalElement] = useState(0);
  const [sortOption, setSortOption] = useState('best');

  const handleReviewData = async () => {
    const response = await getReview(productId, sortOption);
    const responseReview = await getReviewStar(productId);
    setReviewList(response);
    setReviewStar(responseReview);
    setReviewTotalStar(responseReview.averageStarRating);
    setReviewStarArray([
      responseReview.fiveStar,
      responseReview.fourStar,
      responseReview.threeStar,
      responseReview.twoStar,
      responseReview.oneStar,
    ]);
    setReviewContent(response.content);
    setTotalElement(response.totalElements);
  };
  console.log('reviewPage productId: '+productId)
  console.log('reviewPage reviewList')
  console.log(reviewList)
  useEffect(() => {
    handleReviewData();
  }, [productId]);

  return (
    <Styled.Wrapper>
      <Styled.Title>
        <div>리뷰</div>
        <div>{totalElement}</div>
      </Styled.Title>
      <Styled.OptionBox>
        전체
        <Styled.DownArrow />
      </Styled.OptionBox>
      <Styled.TotalLike>
        <div>
          <TotalStarGauge star={reviewTotalStar} />
          <div>{reviewTotalStar}</div>
        </div>
        <VerticalLine height={100.5} />
        <div>
          <EachStarGauge arr={reviewStarArray}></EachStarGauge>
        </div>
      </Styled.TotalLike>
      <Styled.ReviewTitle>
        <div>
          <div>베스트순</div>
          <div>최신순</div>
          <VerticalLine height={22} />
          <Styled.PhotoReviewBtn>
            <Styled.PhotoIcon />
            <div>사진리뷰</div>
          </Styled.PhotoReviewBtn>
        </div>
        <div>
          별점
          <Styled.DownArrow />
        </div>
      </Styled.ReviewTitle>
      {reviewContent?.map((item: SingleReviewProps) => (
        <SingleReview key={item.createdDate} dataList={item} />
      ))}
      <Styled.PaginationBox></Styled.PaginationBox>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    width: ${theme.size.shopDetailWidth};
    margin-bottom: 86px;
  `,
  Title: styled.div`
    color: #000;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    & > div:last-child {
      color: #47ac3a;
      margin-left: 6px;
    }
  `,
  OptionBox: styled.div`
    height: 39px;
    border-radius: 5px;
    background-color: #ecf9e9;
    padding: 0 16px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    position: relative;
    & > svg {
      position: absolute;
      right: 17px;
    }
  `,
  DownArrow: styled(downArrow)``,
  TotalLike: styled.div`
    border-radius: 5px;
    border: 1px solid #000;
    height: 148px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 54px;
    padding-right: 71px;
    margin-bottom: 27px;
    & > div:first-child {
      color: #424242;
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      display: flex;
      align-items: center;
    }
    & > div:first-child > div:last-child {
      margin-left: 17.5px;
    }
    & > :nth-child(2) {
      width: 1px;
      height: 100.5px;
      background-color: #747474;
    }
    & > div:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & > div:last-child > div {
      width: 240px;
    }
  `,
  ReviewTitle: styled.div`
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${theme.colors.green1};
    border-bottom: 1px solid ${theme.colors.green1};
    font-size: 14px;
    font-weight: 700;
    & > div:last-child {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 63px;
      height: 34px;
      border-radius: 5px;
      background-color: #ecf9e9;
      color: ${theme.colors.green1};
    }
    & > div {
      display: flex;
    }
    & > div > div {
      margin-right: 11px;
    }
  `,
  PhotoReviewBtn: styled.div`
    display: flex;
    & > div {
      margin-left: 5px;
    }
  `,
  PhotoIcon: styled(photo)``,
  PaginationBox: styled.div`
    margin-top: 33px;
  `,
};

export default Review;
