import styled from '@emotion/styled';
import theme from '@styles/theme';
import { StarOptionProps } from 'src/types/shop/types';
import downArrow from '@assets/images/shop/downArrow1.svg';

const StarOption = (props : StarOptionProps) => {
  const {setPopStarOption, popStarOption, setStarOption, starOption } = props;

  return (<Styled.StarOptionWrapper
    onClick={() => setPopStarOption(!popStarOption)}
  >
    {starOption == null ? '전체' : starOption+'점'}
    <Styled.DownArrow />
    <Styled.StarOptions popStarOption={popStarOption}>
      <Styled.EachStarOption
        onClick={() => {
          setStarOption(null);
          setPopStarOption(false);
        }}
      >
        전체
      </Styled.EachStarOption>
      <Styled.EachStarOption
        onClick={() => {
          setStarOption(5);
          setPopStarOption(false);
        }}
      >
        5점
      </Styled.EachStarOption>
      <Styled.EachStarOption
        onClick={() => {
          setStarOption(4);
          setPopStarOption(false);
        }}
      >
        4점
      </Styled.EachStarOption>
      <Styled.EachStarOption
        onClick={() => {
          setStarOption(3);
          setPopStarOption(false);
        }}
      >
        3점
      </Styled.EachStarOption>
      <Styled.EachStarOption
        onClick={() => {
          setStarOption(2);
          setPopStarOption(false);
        }}
      >
        2점
      </Styled.EachStarOption>
      <Styled.EachStarOption
        onClick={() => {
          setStarOption(1);
          setPopStarOption(false);
        }}
      >
        1점
      </Styled.EachStarOption>
    </Styled.StarOptions>
  </Styled.StarOptionWrapper>);
}

const Styled = {
  StarOptionWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 63px;
    height: 34px;
    border-radius: 5px;
    background-color: #ecf9e9;
    color: ${theme.colors.green1};
    position: relative;
  `,
  StarOptions: styled.div<{ popStarOption: boolean }>`
    height: fit-content;
    width: 63px;
    border-radius: 5px;
    background-color: #fafbf9;
    color: ${theme.colors.green1};
    border: 1px solid #ccdcc9;
    position: absolute;
    top: 40px;
    left: 0;
    display: ${props => (props.popStarOption ? 'flex' : 'none')};
    flex-direction: column;
  `,
  EachStarOption: styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #ecf9e9;
    }
  `,
    DownArrow: styled(downArrow)``,
}

export default StarOption;