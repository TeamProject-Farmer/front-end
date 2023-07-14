import styled from '@emotion/styled';
import theme from '@styles/theme';
interface Props {
  optionList: string[];
  //나중에 onClick관련으로 넣어줘야할 것 같음
}

const OrderBar = (props: Props) => {
  const { optionList } = props;
  return (
    <Styled.OrderWrapper>
      <div>
        {optionList.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
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
    & > div {
      width: ${theme.size.shopDetailWrapper};
      height: inherit;
      display: flex;
      align-items: center;
      margin: 0 auto;
      & > div {
        padding-right: 95px;
        font-size: 16px;
        font-weight: 500;
      }
    }
  `,
};
export default OrderBar;
