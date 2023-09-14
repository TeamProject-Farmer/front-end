import { StarOptionProps } from 'src/types/shop/types';
import { StarOptionStyled as Styled } from './styles';


const StarOption = (props: StarOptionProps) => {
  const { setPopStarOption, popStarOption, setStarOption, starOption } = props;
  const starArray: number[] = [5, 4, 3, 2, 1];

  return (
    <Styled.StarOptionWrapper onClick={() => setPopStarOption(!popStarOption)}>
      {starOption == null ? '전체' : starOption + '점'}
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
        <>
          {starArray.map((star: number) => (
            <Styled.EachStarOption
              onClick={() => {
                setStarOption(star);
                setPopStarOption(false);
              }}
            >
              {star}점
            </Styled.EachStarOption>
          ))}
        </>
      </Styled.StarOptions>
    </Styled.StarOptionWrapper>
  );
};



export default StarOption;
