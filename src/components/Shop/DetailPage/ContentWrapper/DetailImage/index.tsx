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
  /* height: 1509px; */
  height: 1276px;
  `,
};

export default DetailImage;