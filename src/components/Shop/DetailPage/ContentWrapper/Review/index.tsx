import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { setTimeout } from 'timers';
import { getReview, getReviewStar } from 'src/apis/shop/review';
import { SingleReviewProps } from 'src/types/shop/types';
import VerticalLine from '@components/Shop/Common/SmallParts/VerticalLine';
import TotalStarGauge from '@components/Shop/Common/GaugeBox/TotalStarGauge';
import EachStarGauge from '@components/Shop/Common/GaugeBox/EachStarGauge';
import SingleReview from './SingleReview';
import StarOption from './StarOption';
import Pagination from '@components/Shop/Common/Pagination';
import { ReviewStyled as Styled } from './styles';

const Review = () => {
  const router = useRouter();
  const productId = Number(router.query?.detail) || 1;
  const [reviewStarArray, setReviewStarArray] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState('best');
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [starGauge, setStarGauge] = useState();
  const [reviewClick, setReviewClick] = useState<boolean>(false);
  const [starOption, setStarOption] = useState<number | null>(null);
  const [popStarOption, setPopStarOption] = useState<boolean>(false);

  const { data: reviewData, refetch } = useQuery({
    queryKey: ['reviewData', productId, currentIndex, sortOption, starOption],
    queryFn: () =>
      getReview({
        productId,
        currentIndex,
        sortOption,
        starOption,
      }),
    keepPreviousData: true,
    retry: 0,
  });

  const {
    data: starData,
    isLoading,
    isError: isNoStar,
  } = useQuery({
    queryKey: ['reveiwStarData', productId],
    queryFn: () => getReviewStar(productId),
    onSuccess: response => {
      setReviewStarArray([
        response.fiveStar,
        response.fourStar,
        response.threeStar,
        response.twoStar,
        response.oneStar,
      ]);
    },
    keepPreviousData: true,
    retry: 0,
  });

  useEffect(() => {
    setTimeout(() => refetch(), 10);
  }, [reviewClick]);
  useEffect(() => {
    setCurrentIndex(1);
  }, [starOption]);
  useEffect(() => {
    setStarGauge(isNoStar ? 0 : starData?.averageStarRating);
  }, [isNoStar]);

  if (isLoading) return;
  else {
    return (
      <Styled.Wrapper>
        <Styled.Title>
          <div>리뷰</div>
          <div>{reviewData.totalElements}</div>
        </Styled.Title>
        <Styled.OptionBox>
          전체
          <Styled.DownArrow />
        </Styled.OptionBox>
        <Styled.TotalLike>
          <div>
            <TotalStarGauge star={starGauge} />
            <div>{starGauge}</div>
          </div>
          <VerticalLine height={100.5} />
          <div>
            {isNoStar ? (
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
          <StarOption
            setPopStarOption={setPopStarOption}
            popStarOption={popStarOption}
            setStarOption={setStarOption}
            starOption={starOption}
          />
        </Styled.ReviewTitle>
        {isNoStar ? (
          <Styled.ErrorMessage>
            해당 상품에 대한 리뷰가 존재하지 않습니다.
          </Styled.ErrorMessage>
        ) : (
          <>
            {reviewData.content?.map((item: SingleReviewProps, index) => (
              <div onClick={() => setReviewClick(!reviewClick)} key={index}>
                <SingleReview dataList={item} />
              </div>
            ))}
          </>
        )}
        <Pagination
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          totalIndex={reviewData.totalPages}
        />
      </Styled.Wrapper>
    );
  }
};



export default Review;
