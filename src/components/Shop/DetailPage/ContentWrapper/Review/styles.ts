import styled from '@emotion/styled';
import theme from '@styles/theme';
import photo from '@assets/images/shop/photoIcon.svg';
import downArrow from '@assets/images/shop/downArrow1.svg';



export const ReviewStyled = {
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

export const SingleReviewStyled = {
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

export const StarOptionStyled = {
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
  StarOptions: styled.div<{ popStarOption: boolean }>`
    height: fit-content;
    width: 63px;
    border-radius: 5px;
    background-color: #fafbf9;
    color: ${theme.colors.green1};
    border: 1px solid #ccdcc9;
    position: absolute;
    top: 40px;
    left: 0;
    display: ${props => (props.popStarOption ? 'flex' : 'none')};
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
  DownArrow: styled(downArrow)``,
};