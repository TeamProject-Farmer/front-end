import {AnimatePresence, motion} from 'framer-motion'
import styled from '@emotion/styled';
import theme from '@styles/theme';

const SliderContent = ({sliderContents, activeIndex}) => {

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
    <Styled.Wrapper>
      <AnimatePresence initial={false}>
        {sliderContents.map((content) =>
          activeIndex === content.id ? (
            <Styled.Content
              key={content.id}
              id={content.id}
              variants={imgVariants}
              initial="initial"
              animate="start"
              exit="end"
            >
              <Styled.ContentBox>
                <Styled.Slogan>Let's be a</Styled.Slogan>
                <Styled.Slogan>Farmer!</Styled.Slogan>        
                <Styled.Description>
                  사무공간, 생활공간을 그린 친화적으로
                </Styled.Description>
                <Styled.ShopBtn>&gt; Shop Now</Styled.ShopBtn>
              </Styled.ContentBox>
            </Styled.Content>
          ) : null,
        )}
      </AnimatePresence>
    </Styled.Wrapper>
  );
}

export default SliderContent

const Styled = {
  Wrapper: styled.div`
  `,
  Content: styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('/assets/images/home/bannerBg${props => props.id}.png');
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
    flex-grow: 0;
    border: 1px solid ${theme.colors.green1};
    border-radius: 10px;
    width: 169px;
    height: 53px;
    padding: 11px 8px;
    font-size: 20px;
    color: ${theme.colors.green1};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
}
