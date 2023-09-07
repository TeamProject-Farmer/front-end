import styled from '@emotion/styled';
import { current } from '@reduxjs/toolkit';
import theme from '@styles/theme';
import { Abel } from 'next/font/google';
import closeBtnIcon from '@assets/images/common/modalClose.svg';

const Styled = {
  Wrapper: styled.div`
    z-index: 1;
    position: fixed;
    //우선 가운데에 뜨게 설정해둠 추후 상의 후 변경 예정
    top: 17%;
    left: 40%;
    width: 486px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid #000;
    background: #fff;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  `,
  Header: styled.div`
    width: 100%;
    height: 56px;
    background-color: ${theme.colors.green1};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  HeaderTitle: styled.div`
    width: fit-content;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  `,
  CloseButton: styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    width: 25px;
    height: 56px;
    right: 10px;
    top: 0;
  `,
  CloseBtnIcon: styled(closeBtnIcon)``,
  ContentWrapper: styled.div`
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
  `,
  DetailContentWrapper: styled.div`
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    & > div:first-of-type {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    & > div:first-of-type > div {
      color: ${theme.colors.green1};
      font-size: 16px;
      font-weight: 500;
    }
  `,
  TextBox: styled.div`
    width: 436px;
    height: 180px;
    border: 1px solid ${theme.colors.green2};
    background-color: ${theme.colors.green4};
    padding: 12px;
    & > textarea {
      width: 412px;
      height: 135px;
      background-color: transparent;
      color: ${theme.colors.green1};
      background-color: ${theme.colors.green4};
      font-size: 16px;
      font-weight: 500;
      resize: none;
    }
    & > textarea::placeholder {
      color: ${theme.colors.green1};
    }
    & > div {
      width: 100%;
      text-align: right;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      color: ${theme.colors.green1};
    }
  `,
  Footer: styled.div`
    display: flex;
    gap: 10px;
    padding-top: 24.5px;
    border-top: 1px solid ${theme.colors.green1};
    & > button {
      width: 213px;
      height: 60px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: 500;
    }
  `,
  ConfirmButton: styled.button`
    flex-grow: 1;
    border: none;
    background-color: ${theme.colors.pointGreen};
    color: #fff;
  `,
  CancelButton: styled.button`
    flex-grow: 1;
    border: 1px solid ${theme.colors.green1};
    background-color: #fff;
    color: ${theme.colors.green1};
  `,
  CommonWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  InquiryOptionWrapper: styled.div`
    padding-bottom: 23px;
    border-bottom: 1px solid ${theme.colors.green1};
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > span {
      color: #000;
      font-size: 16px;
      font-weight: 500;
    }
  `,

  InquiryOptionBox: styled.div`
    width: 360px;
    height: 44px;
    border: 1px solid ${theme.colors.green2};
    position: relative;
    display: flex;
    align-items: center;
    &::before {
      content: '⌵';
      position: absolute;
      top: 3px;
      right: 17px;
      color: ${theme.colors.green1};
      font-size: 22px;
      font-weight: 700;
    }
  `,
  InquiryLabel: styled.label`
    margin-left: 11px;
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.green1};
  `,
  InquiryOptions: styled.ul<{ show: boolean }>`
    position: absolute;
    list-style: none;
    top: 51px;
    left: 0;
    height: fit-content;
    max-height: ${props => (props.show ? 'none' : '0')};
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
    background-color: #fff;
    overflow: hidden;
  `,
  InquiryOption: styled.li`
    width: 229px;
    height: 35px;
    color: ${theme.colors.green1};
    padding: 0 11px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: ${theme.colors.green2};
      color: #fff;
    }
  `,
  InquiryTextWrapper: styled.div`
    padding-top: 23.5px;
    padding-bottom: 26px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  SecretCheck: styled.label<{ isSecret: boolean }>`
    display: flex;
    gap: 7px;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    & > input {
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 11px;
      border: 5px solid
        ${props => (props.isSecret ? `${theme.colors.pointGreen}` : '#ddd')};
    }
  `,

  ReviewMyOption: styled.div`
    display: flex;
    padding-bottom: 25.5px;
    border-bottom: 1px solid ${theme.colors.green1};
  `,
  MyOptionListBox: styled.div`
    margin-left: 22px;
    display: flex;
    flex-direction: column;
    height: 77px;
    justify-content: center;
    gap: 5px;
    & > span:first-child {
      color: ${theme.colors.black};
      font-size: 16px;
      font-weight: 500;
    }
    & > span:last-child {
      color: #606367;
      font-size: 16px;
      font-weight: 500;
    }
  `,
  ReviewStarWrapper: styled.div`
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 1px solid ${theme.colors.green1};
    align-items: center;
  `,
  ReviewEachStar: styled.button`
    margin: 0 4px;
  `,
  ReviewContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13.5px;
    padding: 25px 0;
  `,
  ReviewContentText: styled.div`
    color: ${theme.colors.black};
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Inter';
  `,
  ReviewTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  AddPhotoButtn: styled.form<{ show: number }>`
    width: 436px;
    height: 60px;
    border: none;
    border-radius: 5px;
    background-color: ${theme.colors.green1};
    /* display: flex; */
    display: ${props => (props.show > 0 ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    position: relative;
  `,
  AddPhotoText: styled.div`
    position: absolute;
    top: 15px;
    left: 137px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  `,
  AddPhotoInput: styled.input`
    opacity: 0;
  `,
  PreviewPhotoWrapper: styled.form<{ show: number }>`
    width: 100%;
    /* margin: 16px 0; */
    display: ${props => (props.show > 0 ? 'flex' : 'none')};
    gap: 5px;
    align-items: center;
  `,
  MorePhotoButton: styled.form`
    width: 105px;
    height: 105px;
    /* border-style: dotted; */
    border: 1px dashed ${theme.colors.green1};
  `,
  MorePhotoIcon: styled.div`
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div:first-of-type {
      position: absolute;
      left: 50px;
      width: 4px;
      height: 36px;
      background-color: ${theme.colors.green1};
    }
    & > div:last-of-type {
      position: absolute;
      left: 35px;
      width: 36px;
      height: 5px;
      background-color: ${theme.colors.green1};
    }
  `,
  DetailTitle: styled.div`
    color: #285430;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    gap: 10px;
  `,
  DetailContentBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
  DetailContent: styled.div`
    display: flex;
    gap: 7px;
    font-size: 16px;
    font-weight: 500;
    & > div:first-of-type {
      color: ${theme.colors.pointGreen};
      font-weight: 700;
    }
  `,
};

export default Styled;
