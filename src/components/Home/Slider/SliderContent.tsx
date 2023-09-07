import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Link from 'next/link';
import { Banner } from 'src/types/home/types';
import Image from 'next/image';

const SliderContent = ({ sliderContents, activeIndex }) => {
  const imgVariants = {
    initial: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    start: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    end: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {sliderContents &&
          sliderContents?.map((content: Banner) =>
            activeIndex === content.id ? (
              <Link key={content.id} href={content.linkUrl}>
                <Styled.Content
                  variants={imgVariants}
                  initial="initial"
                  animate="start"
                  exit="end"
                >
                  <Image
                    src={content.imgUrl}
                    alt="슬라이더 이미지"
                    fill={true}
                  />
                  {content.id === 1 && (
                    <Styled.ShopBtn>&gt; Shop Now</Styled.ShopBtn>
                  )}
                </Styled.Content>
              </Link>
            ) : null,
          )}
      </AnimatePresence>
    </>
  );
};

export default SliderContent;

const Styled = {
  Content: styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
  `,
  ShopBtn: styled.p`
    position: absolute;
    top: 488px;
    left: 584px;
    border-radius: 10px;
    width: 114px;
    height: 40px;
    background-color: ${theme.colors.green1};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
  `,
};
