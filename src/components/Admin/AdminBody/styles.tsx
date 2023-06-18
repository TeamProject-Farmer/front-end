import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  LayoutWrapper: styled.div`
    margin-left: 411px;
    padding-top: 23px !important;
    padding: 48px;
    width: 100%;
    min-height:100vh;
    background-color: #eeeeee;
    overflow: hidden;
  `,
  LayoutContentWrapper: styled.div`
    
  `,
  ContentHeader: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    height: 78px;
  `,
  ContentHeaderTitle: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #000000;
    margin-top: 20px;
  `,
  ContentBox: styled.div`
    box-sizing: border-box;
    width: 1407px;
    height: 1401px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,
};

export default Styled;
