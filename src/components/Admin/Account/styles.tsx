import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Option from '@assets/images/option.svg';

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  BodyWrapper: styled.div`
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 0 0 5px 5px;
    padding: 20px 10px;
    height: 60.5vh;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  TabWrapper: styled.div`
    height: 113px;
    width: 100%;
    padding-right: 40px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-bottom: none !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  BodyPartWrapper: styled.div`
    width: 33.3%;
    height: fit-content;
    display: flex;
    position: relative;
  `,

  BodyPartCheckBox: styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
    border: 1px solid black;
  `,
  StyledLabel: styled.label`
    display: flex;
    align-items: center;
    user-select: none;
    position: absolute;
    right: 14px;
    top: 14px;
    position: relative;
  `,
  StyledInput: styled.input`
    position: absolute;
    top: 13px;
    right: 15px;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 1.5px solid #ababab;
    border-radius: 5px;
    &:checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: ${theme.colors.blue};
    }
  `,

  BodyPartBox: styled.div`
    height: 141px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
    margin: 14px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 26px 40px;
    &:hover {
      box-shadow: 2px 2px 2px 2px #ababab;
    }
  `,
  BodyPartTitle: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${theme.colors.black};
    margin-bottom: 5px;
  `,
  BodyPartContent: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${theme.colors.black};
  `,
};

export default Styled;
