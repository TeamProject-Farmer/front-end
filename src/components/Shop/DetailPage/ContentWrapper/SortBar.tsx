import styled from '@emotion/styled';
import theme from '@styles/theme';
import { OptionBarProps } from 'src/types/shop/types';
import { SortOption } from 'src/types/search/types';

const SortBar = (props: OptionBarProps) => {
  const { optionList, width, setProductOption, productOption } = props;

  return (
    <Styled.OrderWrapper>
      <Styled.InnerWrapper width={width}>
        {optionList?.map((item: SortOption) => (
          <Styled.InnerBox
            onClick={() => setProductOption(item.param)}
            key={item.title}
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
    min-width: ${theme.size.shopDetailMinWidth};
    max-width: 100%;
    height: 60px;
    border-top: 2px solid ${theme.colors.green1};
    border-bottom: 2px solid ${theme.colors.green1};
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding-left: 240px;
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
export default SortBar;
