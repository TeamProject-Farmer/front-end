import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import VerticalLine from '@components/Shop/Common/VerticalLine';
import photo from '@assets/images/shop/photoIcon.svg';
import downArrow from '@assets/images/shop/downArrow1.svg';
import SingleReview from './SingleReview';
import Pagination from './Pagination';
import TotalStarGauge from '@components/Shop/Common/gauge/TotalStarGauge';
import EachStarGauge from '@components/Shop/Common/gauge/EachStarGauge';
import { getReview, getReviewStar } from 'src/apis/shop/review';
import { useSelector } from 'react-redux';
import { idSelector } from 'src/types/shop/types';
import { SingleReviewProps } from 'src/types/shop/types';

const Review = () => {
  const productId = useSelector(idSelector);
  const [reviewContent, setReviewContent] = useState([]);
  const [reviewStar, setReviewStar] = useState({});
  const [reviewTotalStar, setReviewTotalStar] = useState<number>();
  const [reviewStarArray, setReviewStarArray] = useState<number[]>([]);
  const [totalElement, setTotalElement] = useState(0);
  const [sortOption, setSortOption] = useState('best');
  const [totalIndex, setTotalIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [reviewClick, setReviewClick] = useState<boolean>(false);
  const [starOption, setStarOption] = useState<number | null>(null);
  const [popStarOption, setPopStarOption] = useState<boolean>(false);

  const handleReviewData = async () => {
    //like 버튼 눌렀을 때 바로바로 데이터가 안들어오는 것 같다.
    const response = await getReview(
      productId,
      currentIndex,
      sortOption,
      starOption,
    );
    setReviewContent(response.content);
    setTotalElement(response.totalElements);
    //임의로 이렇게 처리해뒀는데 추후 totalPages 부분을 수정해야 근본적 문제가 해결 될 것 같습니다..!
    if(0 < response.numberOfElements && response.numberOfElements< 3) {
      setTotalIndex(1);
    }else setTotalIndex(response.totalPages);
  };
  
  const handleReviewStar = async () => {
    try {
      const response = await getReviewStar(productId);
      setReviewStar(response);
      setReviewTotalStar(response.averageStarRating);
      setReviewStarArray([
        response.fiveStar,
        response.fourStar,
        response.threeStar,
        response.twoStar,
        response.oneStar,
      ]);
    } catch (err) {
      setErrorMessage(
        err.response.data.message ==
          '해당 상품에 대한 리뷰가 존재하지 않습니다.',
      );
    }
  };
  useEffect(() => {
    handleReviewData();
  }, [productId, currentIndex, reviewClick, sortOption, starOption]);
  useEffect(() => {
    handleReviewStar();
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
          <div>{errorMessage ? 0 : reviewTotalStar}</div>
        </div>
        <VerticalLine height={100.5} />
        <div>
          {errorMessage ? (
            <Styled.NoData>No Review</Styled.NoData>
          ) : (
            <EachStarGauge arr={reviewStarArray}></EachStarGauge>
          )}
        </div>
      </Styled.TotalLike>
      <Styled.ReviewTitle>
        <div>
          <Styled.BestSort
            onClick={() => setSortOption('best')}
            className="best"
            sortOption={sortOption}
          >
            베스트순
          </Styled.BestSort>
          <Styled.RecentSort
            onClick={() => setSortOption('recent')}
            className="recent"
            sortOption={sortOption}
          >
            최신순
          </Styled.RecentSort>
          <VerticalLine height={22} />
          <Styled.PhotoReviewBtn>
            <Styled.PhotoIcon />
            <div>사진리뷰</div>
          </Styled.PhotoReviewBtn>
        </div>
        <Styled.StarOptionWrapper  onClick={()=>setPopStarOption(!popStarOption)}>
          별점
          <Styled.DownArrow />
          <Styled.StarOptions popStarOption={popStarOption}>
            <Styled.EachStarOption onClick={()=>{setStarOption(null);setPopStarOption(false);}}>전체</Styled.EachStarOption>
            <Styled.EachStarOption onClick={()=>{setStarOption(5);setPopStarOption(false);}}>5점</Styled.EachStarOption>
            <Styled.EachStarOption onClick={()=>{setStarOption(4);setPopStarOption(false); }}>4점</Styled.EachStarOption>
            <Styled.EachStarOption onClick={()=>{setStarOption(3);setPopStarOption(false);}}>3점</Styled.EachStarOption>
            <Styled.EachStarOption onClick={()=>{setStarOption(2);setPopStarOption(false);}}>2점</Styled.EachStarOption>
            <Styled.EachStarOption onClick={()=>{setStarOption(1);setPopStarOption(false);}}>1점</Styled.EachStarOption>
          </Styled.StarOptions>
        </Styled.StarOptionWrapper>
      </Styled.ReviewTitle>
      {errorMessage ? (
        <Styled.ErrorMessage>
          해당 상품에 대한 리뷰가 존재하지 않습니다.
        </Styled.ErrorMessage>
      ) : (
        <>
          {reviewContent?.map((item: SingleReviewProps, index) => (
            <div onClick={() => setReviewClick(!reviewClick)} key={index}>
              <SingleReview dataList={item} />
            </div>
          ))}
        </>
      )}
      <Pagination
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        totalIndex={totalIndex}
      />
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
    cursor: pointer;
    & > div {
      display: flex;
    }
    & > div > div {
      margin-right: 11px;
    }
  `,
  BestSort: styled.div<{ sortOption: string }>`
    color: ${props => (props.sortOption == 'best' ? '#59B941' : '')};
  `,
  RecentSort: styled.div<{ sortOption: string }>`
    color: ${props => (props.sortOption == 'recent' ? '#59B941' : '')};
  `,
  StarOptionWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 63px;
    height: 34px;
    border-radius: 5px;
    background-color: #ecf9e9;
    color: ${theme.colors.green1};
    position: relative;
  `,
  StarOptions: styled.div<{popStarOption: boolean}>`
    height: fit-content;
    width: 63px;
    border-radius: 5px;
    background-color: #fafbf9;
    color: ${theme.colors.green1};
    border: 1px solid #ccdcc9;
    position: absolute;
    top: 40px;
    left: 0;
    display: ${props => props.popStarOption ? 'flex' : 'none'};
    flex-direction: column;
  `,
  EachStarOption: styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #ecf9e9;
    }
  `,
  PhotoReviewBtn: styled.div`
    display: flex;
    & > div {
      margin-left: 5px;
    }
  `,
  PhotoIcon: styled(photo)``,
  NoData: styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: ${theme.colors.lightGray};
  `,
  ErrorMessage: styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    font-size: 25px;
    font-weight: 600;
    color: ${theme.colors.lightGray};
  `,
  PaginationBox: styled.div`
    margin-top: 33px;
  `,
};

export default Review;
