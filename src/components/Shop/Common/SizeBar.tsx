import styled from '@emotion/styled';
import theme from '@styles/theme';
import { BarProps } from '../type';

const SizeBar = (props: BarProps) => {
  const { optionList } = props;
  return (
    <Styled.Wrapper>
      <Styled.InnerWrapper>
        {optionList.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.green4};
  `,
  InnerWrapper: styled.div`
    width: ${theme.size.mainWidth};
    height: inherit;
    display: flex;
    align-items: center;
    & > div {
      padding-right: 95px;
      font-size: 18px;
      font-weight: 500;
    }
    & > div:hover {
      color: ${theme.colors.pointGreen};
    }
  `,
};
export default SizeBar;
