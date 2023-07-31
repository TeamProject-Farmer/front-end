import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { productSortOptions, OptionBarProps } from 'src/types/shop/types';
import { ISortOption } from 'src/types/search/types';

const OrderBar = (props: OptionBarProps) => {
  const { optionList, width, setProductOption, productOption } = props;

  return (
    <Styled.OrderWrapper>
      <Styled.InnerWrapper width={width}>
        {productSortOptions?.map((item: ISortOption) => (
          <Styled.InnerBox
            onClick={() => setProductOption(item.param)}
            key={item.param}
            isClicked={item.param === productOption}
          >
            {item.title}
          </Styled.InnerBox>
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
    cursor: pointer;
  `,
  InnerWrapper: styled.div<{ width?: string }>`
    width: ${({ width }) => (width ? width : `${theme.size.mainWidth}`)};
    height: inherit;
    display: flex;
    align-items: center;
  `,
  InnerBox: styled.div<{ isClicked?: boolean }>`
    padding-right: 95px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ isClicked }) => (isClicked ? `${theme.colors.pointGreen}` : '')};
  `,
};
export default OrderBar;
