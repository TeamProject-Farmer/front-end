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
  IconWrapper: styled.div`
    position: absolute;
    top: 14px;
    right: 13px;
    cursor: pointer;
  `,
  Dropdown: styled.select<{ isMobile?: boolean }>`
    width: ${({ isMobile }) => (isMobile ? '230px' : '750px')};
    height: 40px;
    padding-left: 10px;
    border-radius: 4px;
    border: 1px solid #ababab;
    background-color: #fff;
  `,
  Option: styled.option`
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
  `,
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
};

export default Styled;
