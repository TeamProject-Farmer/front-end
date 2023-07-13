import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import leftArrow from '@assets/images/shop/previewLeftArrow.svg';
import rightArrow from '@assets/images/shop/previewRightArrow.svg';

const PreviewPhoto = () => {
  const postUrl = '/assets/images/shop';
  const tempImage = [
    { id: 0, url: `${postUrl}/tempImage1.svg` },
    { id: 1, url: `${postUrl}/tempImage2.svg` },
    { id: 2, url: `${postUrl}/tempImage3.svg` },
    { id: 3, url: `${postUrl}/tempImage4.svg` },
    { id: 4, url: `${postUrl}/tempImage5.svg` },
  ];
  return (
    <Styled.Wrapper>
      <div>사진 리뷰 보기</div>
      <Styled.ImageWrapper>
        <Styled.LeftArrow />
        <Styled.ImageBox>
          {tempImage.map((item, index) => (
            <Image
              key={index}
              alt="Preview"
              src={item.url}
              width={229}
              height={229}
            ></Image>
          ))}
        </Styled.ImageBox>
        <Styled.RightArrow />
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-style: normal;
    line-height: normal;
    font-weight: 600;
    font-size: 25px;
    width: ${theme.size.mainWidth};
    height: 367px;
    margin: 0 auto;
    justify-content: center;
  `,
  ImageWrapper: styled.div`
    margin-top: 16.3px;
    position: relative;
    display: flex;
    align-items: center;
    margin-left: -122px;
    margin-right: -125px;
  `,
  ImageBox: styled.div`
  width: ${theme.size.mainWidth};
    display: flex;
    justify-content: space-between;
  `,
  LeftArrow: styled(leftArrow)`
    margin-right: 53px;
  `,
  RightArrow: styled(rightArrow)`
    margin-left: 56px;
  `,
};

export default PreviewPhoto;
