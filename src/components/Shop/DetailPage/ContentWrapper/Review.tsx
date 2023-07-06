import styled from '@emotion/styled';
import theme from '@styles/theme';
import Image from 'next/image';
import VerticalLine from '@components/Shop/Common/VerticalLine';
import photo from '@assets/images/shop/photoIcon.svg';
import totalStars from '@assets/images/shop/tempReviewStars.svg';
import downArrow from '@assets/images/shop/downArrow1.svg';
import tempStar1 from '@assets/images/shop/tempStars1.svg';
import tempStar2 from '@assets/images/shop/tempStars2.svg';

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
          <Styled.TotalStars />
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
        <Styled.SingleReview key={item.id}>
          <div>유저이름</div>
          <div>
            <Styled.ReviewSvg1 />
            <div>2023.04.17</div>
            <div>·</div>
            <div>파머 구매</div>
          </div>
          <Styled.EachStars>
            <div>
              <div>내구성</div>
              <Styled.ReviewSvg2 />
            </div>
            <div>
              <div>가격</div>
              <Styled.ReviewSvg2 />
            </div>
            <div>
              <div>디자인</div>
              <Styled.ReviewSvg2 />
            </div>
            <div>
              <div> 배송</div>
              <Styled.ReviewSvg2 />
            </div>
          </Styled.EachStars>
          <Styled.ShoppingOption>
            <VerticalLine height={35} />
            <div>
              <div>공기정화식물 01</div>
              <div>선택 01</div>
            </div>
          </Styled.ShoppingOption>
          <Styled.ReviewImage>
            <Image
              alt="reviewImage"
              src={item.src}
              width={112}
              height={112}
            ></Image>
          </Styled.ReviewImage>
          <div>리뷰 내용이 들어감</div>
          <Styled.RecomendBtn>도움이 돼요</Styled.RecomendBtn>
        </Styled.SingleReview>
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
  TotalStars: styled(totalStars)``,
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
  EachStars: styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 240px;
    height: fit-content;
    box-sizing: content-box;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-top: 13px;
    & > div {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `,
  ReviewSvg1: styled(tempStar1)``,
  ReviewSvg2: styled(tempStar2)``,
  ShoppingOption: styled.div`
    margin-top: 21px;
    margin-bottom: 19px;
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
  PaginationBox: styled.div`
    margin-top: 33px;
  `,
};

export default Review;
