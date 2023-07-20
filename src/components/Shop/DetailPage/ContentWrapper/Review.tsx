import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import VerticalLine from '@components/Shop/Common/VerticalLine';
import photo from '@assets/images/shop/photoIcon.svg';
import downArrow from '@assets/images/shop/downArrow1.svg';
import SingleReview from './SingleReview';
import TotalStarGauge from '@components/Shop/Common/gauge/TotalStarGauge';

const Review = () => {
  const tempList = [
    { id: 0, src: '/assets/images/shop/tempImage6.svg' },
    { id: 1, src: '/assets/images/shop/tempImage7.svg' },
    { id: 2, src: '/assets/images/shop/tempImage8.svg' },
  ];
  return (
    <Styled.Wrapper>
      <Styled.Title>
        <div>리뷰</div>
        <div>766</div>
      </Styled.Title>
      <Styled.OptionBox>
        전체
        <Styled.DownArrow />
      </Styled.OptionBox>
      <Styled.TotalLike>
        <div>
          
          <TotalStarGauge star={4.7}/>
          <div>4.7</div>
        </div>
        <VerticalLine height={100.5} />
        <div>
          {/* 데이터가 어떻게 넘어올지 모르겠어서 우선은 이미지로 넣어뒀습니다! */}
          <Image
            alt="temp"
            src="/assets/images/shop/tempTotal.jpg"
            width={240}
            height={100}
          ></Image>
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
      {tempList.map(item => (
        <SingleReview id={item.id} src={item.src} />
      ))}
      {/* 백엔드에서 데이터 어떻게 들어오는지 보고 결정해야할 것 같음 */}
      <Styled.PaginationBox>페이지네이션 들어갈 부분</Styled.PaginationBox>
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
