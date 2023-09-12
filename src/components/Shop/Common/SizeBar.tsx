import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { OptionBarProps } from 'src/types/shop/types';
import { SortOption } from 'src/types/search/types';

const SizeBar = (props: OptionBarProps) => {
  const { optionList, width, setProductOption, productOption } = props;
  const router = useRouter();
  const handleClick = (productOption:string) => {
    setProductOption(productOption)
    router.push(`/shop/bysize/${productOption.toLowerCase()}`)
  }
  return (
    <Styled.Wrapper>
      <Styled.InnerWrapper>
        {optionList?.map((item: SortOption) => (
          <Styled.InnerBox
            onClick={() => handleClick(item.param)}
            key={item.param}
            isClicked={item.param === productOption}
          >
            {item.title}
          </Styled.InnerBox>
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
    cursor: pointer;
  `,
  InnerWrapper: styled.div`
    width: ${theme.size.mainWidth};
    height: inherit;
    display: flex;
    align-items: center;
  `,
  InnerBox: styled.div<{ isClicked?: boolean }>`
    padding-right: 95px;
    font-size: 18px;
    font-weight: 500;
    color: ${({ isClicked }) => (isClicked ? `${theme.colors.pointGreen}` : '')};
  `,
};
export default SizeBar;
