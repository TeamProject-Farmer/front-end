import styled from '@emotion/styled';
import theme from '@styles/theme';
import heart from '@assets/images/shop/optionBoxHeart.svg';
import arrow from '@assets/images/shop/optionArrow.svg';

export const ColorOption = styled.div``;
export const Styled = {
  PannelWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  OptionWrapper: styled.div`
    color: #000;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    margin-left: 25px;
    align-items: center;
    justify-content: space-between;
    & > div {
      padding-top: 30px;
      height: 100%;
      display: flex;
      align-items: center;
    }
    position: relative;
  `,
  TotalPriceWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 18px;
    margin-top: 38px;
    margin-bottom: 15px;
    & > div:first-of-type {
      font-size: 16px;
      font-weight: 600;
    }
    & > div:last-of-type {
      text-align: right;
      font-size: 25px;
      font-weight: 600;
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    & > button {
      display: flex;
      width: 270px;
      height: 60px;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      font-size: 25px;
      font-weight: 700;
    }
    & > button:first-of-type {
      color: ${theme.colors.white};
      background-color: ${theme.colors.green1};
    }
    & > button:last-of-type {
      color: ${theme.colors.green1};
      background-color: #ecf9e9;
    }
  `,

  Wrapper: styled.div`
    width: 302px;
    height: 720px;
    margin-left: 69px;
    cursor: pointer;
  `,
  Upper: styled.div`
    display: flex;
    flex-direction: column;
    height: 548px;
  `,
  SelectBox: styled.div`
    position: relative;
    height: 66px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.black};
    color: #606060;
    font-size: 16px;
    font-weight: 500;
    padding-left: 15px;
    display: flex;
    align-items: center;
    &::before {
      content: '⌵';
      position: absolute;
      top: 15px;
      right: 16px;
      color: #747474;
      font-size: 20px;
      font-weight: 600;
    }
  `,
  Label: styled.label`
    margin-left: 4px;
    text-align: center;
    color: #59b941;
    font-size: 16px;
    font-weight: 500;
  `,
  SelectOptions: styled.ul<{ show: boolean }>`
    margin-top: ${props => (props.show ? '10px' : '0')};
    margin-bottom: ${props => (props.show ? '10px' : '0')};
    width: 302px;
    overflow: hidden;
    height: fit-content;
    max-height: ${props => (props.show ? 'none' : '0')};
    border-radius: 5px;
    border: ${props => (props.show ? '1px solid #000' : '')};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    & > li:last-of-type > div {
      border: none;
    }
  `,
  Option: styled.li`
    height: fit-content;
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    display: flex;
    justify-content: center;
    padding: 15px 14px 0 14px;
    & > div {
      height: fit-content;
      width: 271px;
      border-bottom: 1px solid #a6a6a6;
      display: flex;
      justify-content: space-between;
    }
    & > div > div:first-of-type {
      margin-bottom: 5px;
    }
    & > div > div:first-of-type {
      color: #727272;
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 15px;
    }
    &:hover ${ColorOption} {
      color: #33b822;
    }
  `,
  SelectedOption: styled.div`
    height: 66px;
    border-radius: 5px;
    background-color: #ceeec9;
    color: #606060;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 8px;
  `,
  Lower: styled.div`
    height: 100px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div {
      display: flex;
      justify-content: space-between;
    }
  `,
  TotalPrice: styled.div`
    & > div:first-of-type {
      font-size: 14px;
    }
    & > div:last-of-type {
      font-size: 20px;
    }
  `,
  Buttons: styled.div`
    & > button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      border-radius: 5px;
      width: 145px;
      height: 53px;
    }
    & > button:first-of-type {
      color: ${theme.colors.green1};
      border: 1px solid ${theme.colors.green1};
    }
    & > button:last-of-type {
      color: ${theme.colors.white};
      background-color: ${theme.colors.green1};
    }
  `,
  HeartIcon: styled(heart)``,
  PanelSelectBox: styled.div`
    position: relative;
    cursor: pointer;
  `,
  OptionArrow: styled(arrow)`
    position: absolute;
    top: 48px;
    right: 17px;
    z-index: 1;
  `,
  PanelSelect: styled.div`
    width: 433px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.white};
    appearance: none;
    font-size: 16px;
    font-weight: 500;
    padding-left: 15px;
    position: relative;
    display: flex;
    align-items: center;
  `,
  PanelLabel: styled.label`
    margin-left: 4px;
    text-align: center;
    color: #59b941;
    font-size: 16px;
    font-weight: 500;
  `,
  PanelSelectOptions: styled.ul<{ show: boolean }>`
    position: absolute;
    list-style: none;
    top: 60px;
    left: 0;
    width: 433px;
    overflow: hidden;
    height: fit-content;
    max-height: ${props => (props.show ? 'none' : '0')};
    border-radius: 5px;
    border: ${props => (props.show ? '1px solid #000' : '')};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    & > li:last-of-type > div {
      border: none;
    }
  `,
  PanelOption: styled.li`
    width: 433px;
    height: fit-content;
    font-size: 17px;
    font-weight: 500;
    line-height: 19px;
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    display: flex;
    justify-content: center;
    padding: 13px 14px;
    & > div {
      height: 100%;
      width: 98%;
      border-bottom: 1px solid #a6a6a6;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & > div > div:last-of-type {
      color: #727272;
      font-size: 12px;
      line-height: 15px;
    }
    &:hover ${ColorOption} {
      color: #33b822;
    }
  `,
};