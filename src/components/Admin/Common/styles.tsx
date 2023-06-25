import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  SearchBox: styled.div`
    width: 425px;
    height: 60px;
    background: #d9d9d9;
    border-radius: 29px;

    position: relative;
  `,
  SearchIcon: styled.button`
    position: absolute;
    width: 26.72px;
    height: 25.98px;
    left: 27px;
    top: 17px;
  `,
  TimeWrapper: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    color: #000000;
    display: flex;
  `,

  SmallButtonBox: styled.button`
    width: 157px;
    height: 52px;
    background: #d9d9d9;
    border-radius: 1px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-left: 25px;
    &:hover {
      box-shadow: 1px 1px 1px 1px #ababab7a;
    }
  `,
  MiddleButtonBox: styled.button`
  width: 180px;
  height: 60px;
  background: #d9d9d9;
  border-radius: 1px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-left: 25px;
  &:hover {
    box-shadow: 1px 1px 1px 1px #ababab7a;
  }
`,

  
};

export default Styled;
