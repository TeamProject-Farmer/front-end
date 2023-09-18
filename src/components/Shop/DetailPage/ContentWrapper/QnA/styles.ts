import styled from '@emotion/styled';
import theme from '@styles/theme';
import secret from '@assets/images/shop/secretIcon.svg';

export const QnAStyled = {
  Wrapper: styled.div`
    width: ${theme.size.shopDetailWidth};
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
  `,
  Container: styled.div`
    border-bottom: 1px solid ${theme.colors.green1};
    margin-bottom: 33px;
  `,
  Title: styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      align-items: center;
    }
    & > div:first-child > div:last-child {
      color: #47ac3a;
      margin-left: 6px;
    }
  `,
  MyInQuiry: styled.div`
    & > span {
      font-size: 16px;
      font-weight: 500;
      color: ${theme.colors.pointGreen};
      margin-right: 10px;
    }
  `,
  OpenModalButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
    width: 95px;
    height: 32px;
    border-radius: 5px;
    background-color: ${theme.colors.pointGreen};
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  `,
  ErrorMessage: styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 70px;
    font-size: 25px;
    font-weight: 600;
    color: ${theme.colors.gray};
  `,
};


export const MyQnAStyled = {
  ErrorMessage: styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 70px;
    font-size: 25px;
    font-weight: 600;
    color: ${theme.colors.gray};
  `,
};


export const OnOffStyled = {
  Wrapper: styled.button<{ myButton: boolean }>`
    width: 75px;
    height: 30px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    background-color: ${props =>
      !props.myButton ? '#e7ece6' : `${theme.colors.pointGreen}`};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
  `,
  Pointer: styled.div<{ myButton: boolean }>`
    background-color: white;
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background: #fff;
    border: 1px solid ${theme.colors.pointGreen};
    position: absolute;
    left: 0;
    transition: all 0.5s ease-in-out;
    transform: ${props => (props.myButton ? 'translate(39px, 0)' : '')};
    transition: ${props => (props.myButton ? 'all 0.5s ease-in-out' : '')};
  `,
  PointerOff: styled.span`
    width: 55px;
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    color: ${theme.colors.pointGreen};
  `,
  PointerOn: styled.span`
    width: 50px;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  `,
};

export const QnAWrapperStyled = {
  Single: styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 500;
    flex-direction: column;
    cursor: pointer;
    & > div {
      display: flex;
      gap: 3px;
    }
  `,
  OpenQuestion: styled.div`
    margin-top: 12px;
    gap: 9px !important;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    align-content: center;
    margin-bottom: 26px;
    & > div {
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    }
    & > div > div {
      display: flex;
      flex-direction: column;
    }
  `,
  Question: styled.div`
    margin-top: 12px;
    gap: 9px !important;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    margin-bottom: 26px;
  `,
  SecretIcon: styled(secret)``,
  ProductName: styled.div`
    font-size: 12px;
    margin-top: 5px;
  `,
};