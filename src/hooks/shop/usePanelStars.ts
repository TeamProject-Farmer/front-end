import { useState, useEffect } from 'react';
import { getReview, getReviewStar } from 'src/apis/shop/review';
import { useQuery } from '@tanstack/react-query';

const usePanelStars = (productId?: number) => {

  const [totalStar, setTotalStar] = useState<number>();
  const [starRating, setStarRating] = useState<number>();

  //리뷰 갯수 출력 api
  const { data: reviewData } = useQuery({
    queryKey: ['getReview', productId],
    queryFn: () =>
      getReview({
        productId,
        currentIndex: 1,
        sortOption: null,
        starOption: null,
      }),
    onSuccess: data => setTotalStar(data.totalElements),
    retry: 0,
    refetchOnWindowFocus: true,
  });

  //리뷰 평점 출력 api
  //getReviewStar에서 에러가 나는 것은 코드를 잘못짠게 아니라 갯수가 없으면 error로 뜨게 api에서 데이터가 들어옵니다!
  //추후 갯수가 없을 때 에러가 아니라 0개가 뜨게 수정되면 onSuccess, onError 부분 수정될 예정입니다
  const { data: reviewStar} = useQuery({
    queryKey: ['getReviewStar', productId],
    queryFn: () => getReviewStar(productId),
    onSuccess: data => setStarRating(data.averageStarRating),
    onError: err => setStarRating(0),
    retry: 0,
    refetchOnWindowFocus: true,
  });

  return { totalStar, starRating};
};

export default usePanelStars;
