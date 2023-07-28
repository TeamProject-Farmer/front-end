import styled from '@emotion/styled';
import theme from '@styles/theme';
import { BarProps } from '../type';

const OrderBar = (props: BarProps) => {
  const { optionList, width } = props;
  return (
    <Styled.OrderWrapper>
      <Styled.InnerWrapper width={width}>
        {optionList.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </Styled.InnerWrapper>
    </Styled.OrderWrapper>
  );
};
const Styled = {
  OrderWrapper: styled.div`
    width: 98.9vw;
    max-width: 100%;
    height: 60px;
    /* 디자인처럼 색이 잘 보이려면 3px로 바꿔야할 것 같음 */
    border-top: 2px solid ${theme.colors.green1};
    border-bottom: 2px solid ${theme.colors.green1};
    display: flex;
    justify-content: center;
  `,
  InnerWrapper: styled.div<{ width?: string }>`
    width: ${({ width }) => (width ? width : `${theme.size.mainWidth}`)};
    height: inherit;
    display: flex;
    align-items: center;
    & > div {
      padding-right: 95px;
      font-size: 16px;
      font-weight: 500;
    }
  `,
};
export default OrderBar;
