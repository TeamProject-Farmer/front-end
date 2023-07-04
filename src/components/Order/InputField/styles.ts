import styled from '@emotion/styled'
import theme from '@styles/theme';

const Styled = {
  InputWrapper: styled.div<{field: string}>`
    position: relative;
    display: flex;
    align-items: ${({field}) => field === 'coupon' || field === 'point' ? 'flex-start' : 'center'};
  `,
  Label: styled.label`
    font-size: 16px;
    width: 95px;
  `,
  AstBox: styled.span`
    color: ${theme.colors.pointGreen};
    margin: 2px;
  `,
  Input: styled.input<{width?:number}>`
    outline: none;
    width: ${({ width }) => width ? width: '300'}px;
    height: 40px;
    border-radius: 4px;
    padding-left: 10px; 
    border: 1px solid #ABABAB;
  `,
  EmailWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  EmailAt: styled.p`
    font-size: 18px;
  `,
  EmailOptionWrapper: styled.div`
    position: relative;
  `,
  Dropdown: styled.ul`
    width: 300px;
    position: absolute;
    max-height: 130px;
    overflow-y: auto;
    border: 1px solid #000000;
    background-color: #fff;
    border-top: none;
    padding: 0;
    margin: 0;
    list-style: none;
    z-index: 1;
  `,
  Option: styled.li`
      font-size: 14px;
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: #f1f1f1;
      }
  `,
  FlexWrapper: styled.div`
    display: flex;
  `,
  FlexGapWrapper: styled.div`
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
    background-color: #F0F0F0;
  `,
}

export default Styled;