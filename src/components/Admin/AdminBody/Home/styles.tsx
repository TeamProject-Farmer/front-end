import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  // Todo
  TodoWrapper: styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    background: #fbfbfb;
    border-left: 1px solid #ababab;
    border-top: 1px solid #ababab;
    border-radius: 5px;
    overflow: hidden;
  `,
  TodoCol: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    border-radius: 5px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  `,
  TodoUpperRow: styled.div`
    width: 100%;
    display: flex;
    flex-grow: 4;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ababab;
    border-bottom: 1px solid #ababab;
  `,
  TodoLowerRow: styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ababab;
    border-bottom: 1px solid #ababab;
  `,
  // SmallInnerBox
  InnerBoxWrapper: styled.div`
    width: 100%;
    height: 1000px;

    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
    padding: 20px;
  `,

  // Event
  EventWrapper: styled.div`
    width: 100%;
  `,
  EventBoxWrapper: styled.div`
    width: 100%;
    height: 400px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,

  //Banner
  BannerWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  BannerContainer: styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
  `,
  TempImgBox: styled.div`
    width: 30%;
    height: 100%;
    background-color: #D9D9D9;

  `,
};

export default Styled;
