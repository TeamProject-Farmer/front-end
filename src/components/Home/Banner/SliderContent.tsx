import {AnimatePresence, motion} from 'framer-motion'
import styled from '@emotion/styled';

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
              // src={`/assets/images/home/bannerBg${content.id}.png`}
              variants={imgVariants}
              initial="initial"
              animate="start"
              exit="end"
            />
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
}
