import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import leftArrow from '@assets/images/shop/previewLeftArrow.svg';
import rightArrow from '@assets/images/shop/previewRightArrow.svg';
import { getReviewImage } from 'src/apis/shop/review';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { RootState } from 'store';
// export const idSelector = (state: RootState) => state.productId;

const PreviewPhoto = () => {
  const [imageList, setImageList] = useState([]);
  // const productId = useSelector(idSelector);
  let productId = 8;
  const handleReviewImage = async () => {
    const response = await getReviewImage(productId);
    setImageList(response);
  };
  useEffect(() => {
    handleReviewImage();
  }, [])

  return (
    <Styled.Wrapper>
      <div>사진 리뷰 보기</div>
      <Styled.ImageWrapper>
        <Styled.LeftArrow />
        <Styled.ImageBox>
          {imageList.map((item, index) => (
            <Image
              key={index}
              alt="Preview"
              src={item}
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
