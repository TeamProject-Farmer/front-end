import Image from 'next/image';
import VerticalLine from '@components/Shop/Common/SmallParts/VerticalLine';
import TotalStarGauge from '@components/Shop/Common/GaugeBox/TotalStarGauge';
import { postReviewLike } from 'src/apis/shop/review';
import { SingleReviewProps } from 'src/types/shop/types';
import { SingleReviewStyled as Styled } from './styles';

const SingleReview = ({ dataList }: { dataList: SingleReviewProps }) => {
  const {
    content,
    createdDate,
    fiveStarRating,
    imgUrl,
    likeCount,
    memberNickname,
    optionName,
    productName,
    reviewId,
  } = dataList;
  const handleReviewLike = async (reviewId: number) => {
    const response = await postReviewLike(reviewId);
  };

  return (
    <Styled.SingleReview>
      <div></div>
      <div>
        <TotalStarGauge star={fiveStarRating} size={16} />
        <Styled.ReviewDate>{createdDate.slice(0, 10)}</Styled.ReviewDate>
        <div>·</div>
        <div>{memberNickname} 구매</div>
      </div>
      <Styled.ShoppingOption>
        <VerticalLine height={35} />
        <div>
          <div>{productName}</div>
          <div>{optionName}</div>
        </div>
      </Styled.ShoppingOption>
      <Styled.ReviewImage>
        <Image
          alt="reviewImage"
          className="imageStyle"
          src={imgUrl}
          width={112}
          height={112}
        ></Image>
      </Styled.ReviewImage>
      <div>{content}</div>
      <Styled.RecomendBtn onClick={() => handleReviewLike(reviewId)}>
        도움이 돼요 &nbsp; {likeCount}
      </Styled.RecomendBtn>
    </Styled.SingleReview>
  );
};

export default SingleReview;
