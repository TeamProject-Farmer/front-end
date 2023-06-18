import styled from '@emotion/styled';
import theme from '@styles/theme';
import leftArrow from '@assets/images/Admin/leftArrow.svg';

const Styled = {
  Wrapper: styled.div`
    display: flex;
  `,
  InnerContainer: styled.div`
    width: 423px;
    height: 378px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
    padding: 0 10px;
  `,
  InnerBox: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 51px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
    margin: 13px 0;
  `,
  InnerBoxImage: styled.div`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #d9d9d9;
    margin-left: 10px;
  `,
  ArrowWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  LeftArrow: styled(leftArrow)`
    width: 24px;
    height: 23px;
    margin: 10px;
  `,
  RightArrow: styled(leftArrow)`
    width: 24px;
    height: 23px;
    margin: 10px;
    transform: rotate(180deg);
  `,
  
};

export default Styled;
