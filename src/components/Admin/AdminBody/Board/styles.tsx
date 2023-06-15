import styled from '@emotion/styled';
import theme from '@styles/theme';
import Blank from '@assets/images/Admin/BlankStar.svg';
import Filled from '@assets/images/Admin/Star.svg';

const Styled = {
  InnerBoxWrapper: styled.div`
    width: 33.3%;
    height: fit-content;
    display: flex;
    position: relative;
  `,
  InnerBox: styled.div`
    height: 191px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
    margin: 14px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 26px 40px;
    &:hover {
      box-shadow: 2px 2px 2px 2px #ababab;
    }
  `,
  Title: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${theme.colors.black};
    margin-bottom: 5px;
  `,
  Content: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${theme.colors.black};
  `,

  StarWrapper: styled.div`
    display: flex;
  `,
  BlankStar: styled(Blank)`
    height: 20px;
  `,
  Star: styled(Filled)`
    height: 20px;
  `,
};

export default Styled;
