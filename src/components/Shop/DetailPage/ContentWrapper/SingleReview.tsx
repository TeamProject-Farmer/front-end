import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import VerticalLine from '@components/Shop/Common/VerticalLine';
import tempStar1 from '@assets/images/shop/tempStars1.svg';
// import TotalStarGauge from '@components/Shop/Common/gauge/TotalStarGauge';
import tempStar2 from '@assets/images/shop/tempStars2.svg';
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
  } = dataList;

  return (
    <Styled.SingleReview>
      <div></div>
      <div>
        {/* 이 부분에 별점 들어갈 예정 */}
        <Styled.ReviewSvg1 />
        {/* <TotalStarGauge star={fiveStarRating}/> */}
        <div>{createdDate.slice(0, 10)}</div>
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
          src={imgUrl}
          width={112}
          height={112}
        ></Image>
      </Styled.ReviewImage>
      <div>{content}</div>
      <Styled.RecomendBtn>도움이 돼요 &nbsp; {likeCount}</Styled.RecomendBtn>
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
    & > div > svg {
      margin-right: 2px;
    }
  `,
  ReviewSvg1: styled(tempStar1)``,
  ReviewSvg2: styled(tempStar2)``,
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
