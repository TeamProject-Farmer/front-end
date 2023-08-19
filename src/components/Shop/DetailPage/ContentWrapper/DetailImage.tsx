import styled from '@emotion/styled';
import theme from '@styles/theme';
import Image from 'next/image';

const DetailImage = () => {
  return <Styled.Wrapper>
    <Image src='/assets/images/shop/detailPageImg1.png' alt='상세페이지 이미지' width={1077} height={1276}></Image>
  </Styled.Wrapper>;
}

const Styled = {
  Wrapper: styled.div`
  width: ${theme.size.shopDetailWidth};
  margin-bottom: 48px;
  /* 나중에 추가적인 이미지가 들어간다면 아래꺼를 삭제하고 넣으면 될 것 같음*/
  /* height: 1509px; */
  height: 1276px;
  `,
};

export default DetailImage;