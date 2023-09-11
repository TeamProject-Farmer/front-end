import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import VerticalLine from '@components/Shop/Common/VerticalLine';
import TotalStarGauge from '@components/Shop/Common/gauge/TotalStarGauge';
import { postReviewLike } from 'src/apis/shop/review';
import { SingleReviewProps } from 'src/types/shop/types';
type Props= {
  dataList: SingleReviewProps
}
const SingleReview = ({ dataList }: Props) => {
  const {
    content,
    createdDate,
    fiveStarRating,
    imgUrl,
    likeCount,
    memberNickname,
    optionName,
    productName,
    reviewId
  } = dataList;
  const handleReviewLike = async (reviewId: number) => {
    const response = await postReviewLike(reviewId);
  };
  
  return (
    <Styled.SingleReview>
      <div></div>
      <div>
        <TotalStarGauge star={fiveStarRating} size={16}/>
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
          className='imageStyle'
          src={imgUrl}
          width={112}
          height={112}
        ></Image>
      </Styled.ReviewImage>
      <div>{content}</div>
      <Styled.RecomendBtn onClick={()=>handleReviewLike(reviewId)}>도움이 돼요 &nbsp; {likeCount}</Styled.RecomendBtn>
    </Styled.SingleReview>
  );
};

const Styled = {
  SingleReview: styled.div`
    border-bottom: 1px solid ${theme.colors.green1};
    /* height: 400px; */
    height: fit-content;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 500;
    padding: 17px 0;
    & > div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  `,
  ReviewDate: styled.div`
    margin-left: 7px;
  `,
  ShoppingOption: styled.div`
    margin-top: 21px;
    display: flex;
    gap: 9px;
    font-size: 14px;
    font-weight: 500;
  `,
  ReviewImage: styled.div`
    /* margin-top: 19px; */
    margin-top: 10px;
    margin-bottom: 26px;
    border-radius: 5px;
    overflow: hidden;
    .imageStyle {
      width: 112px;
      height: 112px;
      object-fit: cover;
      border-radius: 5px;
    }
  `,
  RecomendBtn: styled.button`
    margin-top: 23px;
    margin-bottom: 17px;
    width: 130px;
    height: 31px;
    border-radius: 5px;
    border: none;
    background-color: #ecf9e9;
    color: ${theme.colors.green1};
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
export default SingleReview;
