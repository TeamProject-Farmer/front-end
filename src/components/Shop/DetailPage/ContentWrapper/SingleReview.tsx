import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import VerticalLine from '@components/Shop/Common/VerticalLine';
import tempStar1 from '@assets/images/shop/tempStars1.svg';
import tempStar2 from '@assets/images/shop/tempStars2.svg';

interface Props {
  id: number | string;
  src: string;
}
const SingleReview = (props: Props) => {
  const { id, src } = props;
  return (
    <Styled.SingleReview key={id}>
      <div>유저이름</div>
      <div>
        <Styled.ReviewSvg1 />
        <div>2023.04.17</div>
        <div>·</div>
        <div>파머 구매</div>
      </div>
      <Styled.ShoppingOption>
        <VerticalLine height={35} />
        <div>
          <div>공기정화식물 01</div>
          <div>선택 01</div>
        </div>
      </Styled.ShoppingOption>
      <Styled.ReviewImage>
        <Image alt="reviewImage" src={src} width={112} height={112}></Image>
      </Styled.ReviewImage>
      <div>리뷰 내용이 들어감</div>
      <Styled.RecomendBtn>도움이 돼요</Styled.RecomendBtn>
    </Styled.SingleReview>
  );
};

const Styled = {
  SingleReview: styled.div`
    border-bottom: 1px solid ${theme.colors.green1};
    /* 사이즈가 좀 다르게 나온 것 같아서 다시 확인해 봐야할 것 같음 디자인 상은 400px*/
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
    margin-top: 19px;
    margin-bottom: 26px;
    border-radius: 5px;
  `,
  RecomendBtn: styled.button`
    margin-top: 23px;
    margin-bottom: 17px;
    width: 112px;
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
