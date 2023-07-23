import styled from '@emotion/styled';
import { current } from '@reduxjs/toolkit';
import theme from '@styles/theme';
import { Abel } from 'next/font/google';

const Styled = {
  Wrapper: styled.div`
    z-index: 1;
    position: fixed;
    //우선 가운데에 뜨게 설정해둠 추후 상의 후 변경 예정
    top: 25%;
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
    background-color: #285430;
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
    width: 17px;
    height: 17px;
    right: 18px;
    top: 19px;
  `,
  ContentWrapper: styled.div`
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
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
    border: none;
    background-color: ${theme.colors.pointGreen};
    color: #fff;
  `,
  CancelButton: styled.button`
    border: 1px solid ${theme.colors.green1};
    background-color: #fff;
    color: ${theme.colors.green1};
  `,
  InquiryWrapper: styled.div`
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
  SecretCheck: styled.label`
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
      border: 5px solid #ddd;
    }
    & > input:checked {
      border: 5px solid ${theme.colors.pointGreen};
    }
  `,
};

export default Styled;
