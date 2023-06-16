import {AnimatePresence, motion} from 'framer-motion'
import styled from '@emotion/styled';

const SliderContent = ({sliderContent, activeIndex}) => {
  const imgVariants = {
    initial: {
      opacity: 0,
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
        {sliderContent.map((slide, slideIndex) =>
          activeIndex === slideIndex ? (
            <motion.img
              key={`slide-${slideIndex}`}
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
    
  `
}
