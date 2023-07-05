import styled from '@emotion/styled';
import theme from '@styles/theme';

const DetailImage = () => {
  return <Styled.Wrapper></Styled.Wrapper>;
}

const Styled = {
  Wrapper: styled.div`
  width: ${theme.size.shopDetailWidth};
  margin-bottom: 48px;
  /* 나중에 추가적인 이미지가 들어간다면 아래꺼를 삭제하고 넣으면 될 것 같음*/
  height: 1509px;
  background-color:  ${theme.colors.lightGray};
  `,
};

export default DetailImage;