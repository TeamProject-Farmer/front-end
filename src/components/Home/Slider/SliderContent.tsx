import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Link from 'next/link';
import { IBanner } from 'src/types/home/types';

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
        {/* <img src={sliderContents[0].linkUrl} /> */}
        {sliderContents &&
          sliderContents?.map((content: IBanner) =>
            activeIndex === content.id ? (
              <Styled.Content
                key={content.id}
                variants={imgVariants}
                imgUrl={content.linkUrl}
                initial="initial"
                animate="start"
                exit="end"
              >
                <Link href={content.linkUrl}>
                  <Styled.ContentBox>
                    <Styled.Slogan>Let's be a</Styled.Slogan>
                    <Styled.Slogan>Farmer!</Styled.Slogan>
                    <Styled.Description>
                      사무공간, 생활공간을 그린 친화적으로
                    </Styled.Description>
                    <Styled.ShopBtn>&gt; Shop Now</Styled.ShopBtn>
                  </Styled.ContentBox>
                </Link>
              </Styled.Content>
            ) : null,
          )}
      </AnimatePresence>
    </>
  );
};

export default SliderContent;

const Styled = {
  Content: styled(motion.div)<{ imgUrl: string }>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${({ imgUrl }) => imgUrl});
    background-size: 100% auto;
  `,
  ContentBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 670px;
    height: 610px;
    padding: 120px 100px;
    position: absolute;
    top: 118px;
    left: 388px;
  `,
  Slogan: styled.p`
    font-size: 90px;
    color: #fff;
  `,
  Description: styled.p`
    font-size: 30px;
    color: ${theme.colors.green1};
  `,
  ShopBtn: styled.p`
    margin-top: 30px;
    flex-shrink: 0;
    border-radius: 10px;
    width: 114px;
    height: 40px;
    font-size: 20px;
    background-color: #47ac3a;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
  `,
};
