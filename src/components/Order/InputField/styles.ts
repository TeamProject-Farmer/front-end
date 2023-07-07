import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  InputWrapper: styled.div<{ field: string }>`
    position: relative;
    display: flex;
    align-items: ${({ field }) =>
      field === 'coupon' || field === 'point' ? 'flex-start' : 'center'};
  `,
  Label: styled.label`
    font-size: 16px;
    width: 95px;
  `,
  AstBox: styled.span`
    color: ${theme.colors.pointGreen};
    margin: 2px;
  `,
  Input: styled.input<{ width?: number }>`
    outline: none;
    width: ${({ width }) => (width ? width : '300')}px;
    height: 40px;
    border-radius: 4px;
    padding-left: 10px;
    border: 1px solid ${theme.colors.borderGray};
  `,
  Dropdown: styled.select<{ isMobile?: boolean }>`
    width: ${({ isMobile }) => (isMobile ? '130px' : '750px')};
    height: 40px;
    padding-left: 10px;
    border-radius: 4px;
    border: 1px solid #ababab;
    background-color: #fff;
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    ::-ms-expand {
      display: none;
    }
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='6' fill='none'%3E%3Cpath fill='%23ABABAB' d='M5.5 6 .737.75h9.526L5.5 6Z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 15px 13px;
    background-position: ${({ isMobile }) => (isMobile ? '100px' : '720px')}
      center;
  `,
  Option: styled.option`
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
  `,
  ShippingMsgInputWrapper: styled.div``,
  FlexWrapper: styled.div`
    display: flex;
  `,
  FlexGapWrapper: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 11px;
  `,
  FlexColumnWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
  `,
  Explanation: styled.p`
    padding: 6px 12px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #f0f0f0;
  `,
  ErrorMsg: styled.p`
    color: #f00;
    font-size: 14px;
  `,
};

export default Styled;
