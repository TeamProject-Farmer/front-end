import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { getReviewImage } from 'src/apis/shop/review';
import leftArrow from '@assets/images/shop/previewLeftArrow.svg';
import rightArrow from '@assets/images/shop/previewRightArrow.svg';


const PreviewPhoto = () => {
  const router = useRouter();
  const productId = Number(router.query?.detail) || 1;
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleReviewImage = async () => {
    const response = await getReviewImage(productId);
    setImageList(response);
  };
  let filtered: string[] = imageList.filter((value: string) => value != null);

  const handleArrow = (move: number) => {
    let nextIndex = currentIndex + move;
    if (nextIndex <= 0 && nextIndex > -Math.ceil(filtered.length / 5))
      setCurrentIndex(nextIndex);
  };
  useEffect(() => {
    handleReviewImage();
  }, [router]);

  return (
    <Styled.Wrapper>
      <Styled.Title>사진 리뷰 보기</Styled.Title>
      <Styled.ImageWrapper>
        <Styled.LeftArrow onClick={() => handleArrow(1)} />
        <Styled.ImageBox>
          {filtered.length == 0 ? (
            <Styled.ErrorMessage>
              해당 상품은 사진 리뷰가 없습니다.
            </Styled.ErrorMessage>
          ) : (
            <>
              <Styled.ImageSlider currentIndex={currentIndex}>
                {filtered.map((item, index) =>
                  item == null ? (
                    <></>
                  ) : (
                    <div key={index}>
                      <Styled.prevImageBox>
                        <Image
                          alt="Preview"
                          src={item}
                          className="prevImage"
                          width={229}
                          height={229}
                        />
                      </Styled.prevImageBox>
                    </div>
                  ),
                )}
              </Styled.ImageSlider>
            </>
          )}
        </Styled.ImageBox>
        <Styled.RightArrow onClick={() => handleArrow(-1)} />
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
  `,
  Title: styled.div`
    height: fit-content;
    margin-top: 40px;
    font-weight: 600;
    font-size: 25px;
  `,
  ImageWrapper: styled.div`
    height: 240px;
    margin-top: 10px;
    position: relative;
    display: flex;
    align-items: center;
  `,
  ImageBox: styled.div`
    width: ${theme.size.mainWidth};
    height: 240px;
    position: relative;
    overflow: hidden;
  `,
  ImageSlider: styled.div<{ currentIndex: number }>`
    height: inherit;
    width: fit-content;
    display: flex;
    gap: 13px;
    position: absolute;
    top: 0;
    left: ${props => props.currentIndex * 1200}px;
    transition: 500ms;
  `,
  prevImageBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 229px;
    height: 229px;
    overflow: hidden;
    border-radius: 10px;
    .prevImage {
      width: 229px;
      height: 240px;
      object-fit: cover;
    }
  `,
  LeftArrow: styled(leftArrow)`
    position: absolute;
    top: 60px;
    left: -130px;
  `,
  RightArrow: styled(rightArrow)`
    position: absolute;
    top: 60px;
    right: -130px;
  `,
  ErrorMessage: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    color: ${theme.colors.gray};
  `,
};

export default PreviewPhoto;
