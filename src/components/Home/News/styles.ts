import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    height: 830px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  NewsContainer: styled.div`
    margin-top: 56px;
    display: flex;
    border: 1px solid ${theme.colors.green1};
    width: 1180px;
    height: 527px;
  `,
  ContentBox: styled.div`
    width: 540px;
    height: 527px;
    padding: 26px 29px;
    overflow-y: scroll;
  `,
  Title: styled.p`
    font-weight: 600;
    font-size: 20px;
  `,
  Content: styled.p`
    margin: 20px 0;
    height: 400px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  `,
  ImgBox: styled.div`
    width: 650px;
    background-image: url('/assets/images/home/newsImage.png');
  `
}

export default Styled;