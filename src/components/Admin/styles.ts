import styled from '@emotion/styled';
import theme from '@styles/theme';
import rightSmallArrow from '@assets/images/admin/rightSmallArrow.svg';

export const HomeStyled = {
  Wrapper: styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-bottom: 20px;
    cursor: pointer;
  `,
};

export const BoardManageStyled = {
  WholeWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  Wrapper: styled.div`
    width: 1616px;
    min-height: 632px;
    border-radius: 5px;
    background: #fff;
  `,
  BackButton: styled.div`
    color: ${theme.adminColors.black};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.056px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  `,
  BackIcon: styled(rightSmallArrow)``,
  Footer: styled.div`
    border-top: 1px solid #e5e5e5;
    padding-top: 16px;
    display: flex;
    width: 100%;
    height: 178px;
  `,
  ContentWrapper: styled.div`
    width: 100%;
    min-height: 453px;
    padding: 32px 36px 32px 36px;
    display: flex;
    flex-direction: column;
  `,
  Title: styled.div`
    color: #8a8a8a;
    font-size: 12px;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
    letter-spacing: -0.048px;
  `,
  ContentTitle: styled.div`
    color: ${theme.adminColors.black};
    font-size: 20px;
    font-weight: 400;
    line-height: 140%; /* 28px */
    letter-spacing: -0.08px;
  `,
  ProfileWrapper: styled.div`
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 20px;
  `,
  ProfileImage: styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #b9b9b9;
  `,
  ProfileBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
    letter-spacing: -0.048px;
    & div {
      display: flex;
      gap: 7px;
    }
    & div > div:first-of-type {
      color: #b9b9b9;
    }
    & div > div:last-of-type {
      color: ${theme.adminColors.black};
    }
  `,
  ContentBox: styled.div`
    color: ${theme.adminColors.black};
    font-size: 12px;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    letter-spacing: -0.048px;
  `,
  FooterWriter: styled.div`
    color: #1a1c1e;
    text-align: right;
    font-size: 12px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.048px;
    margin-top: 5px;
    margin-left: 60px;
  `,
  InputBox: styled.textarea`
    margin-left: 29px;
    margin-right: 14px;
    width: 1326px;
    height: 144px;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    resize: none;
    padding: 20px;
  `,
  SaveButton: styled.button`
    border-radius: 3px;
    background: #5d5d5d;
    width: 104px;
    height: 41px;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.064px;
  `,
};
