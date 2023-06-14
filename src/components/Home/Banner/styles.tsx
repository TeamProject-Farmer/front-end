import styled from '@emotion/styled';

const Styled = {
  Wrapper: styled.div`
    position: relative;
    width: 1920px;
    height: 876px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/assets/images/home/banner.png');
  `,
  Content: styled.div`
    font-size: 40px;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  `,
  BuyBtn: styled.p`
    margin-top: 60px;
  `,
  Events: styled.ul`
    margin-top: 208px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 154px;
  `,
  Event: styled.li`
    position: relative;
    font-size: 20px;
    :not(:last-child)::before {
          content: '';
          position:absolute;
          display: block;
          background-color: #000;
          width: 125px;
          height: 2px;
          top: 50%;
          left: 120%;
      }
  `,
  DownBtn: styled.div`
    position: absolute;
    bottom: 60px;
    left: 60px;
  `
}

export default Styled