import styled from '@emotion/styled';
import theme from '@styles/theme';
import Logo from '@assets/images/common/logo.svg';
import { StyleProps } from 'src/types/login/types';

const Styled = {
  Container: styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
  `,
  LoginBox: styled.div`
    width: 503px;
    height: 737px;
    border: 1px solid ${theme.colors.black};
    border-radius: 35px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  `,
  InputWrapper: styled.div`
    width: 300px;
  `,
  LoginInput: styled.input`
    width: 300px;
    height: 50px;
    border: 1px solid ${theme.colors.black};
    padding: 10px;
    font-weight: 700;
    font-size: 16px;
    color: ${theme.colors.black};
    outline: none;

    &::placeholder {
      color: ${theme.colors.gray};
    }

    &[type='email'] {
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }

    &[type='password'] {
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  `,
  TextWrapper: styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 25px;
    cursor: pointer;
    gap: 25px;
  `,
  SubText: styled.span<StyleProps>`
    font-size: ${props => props.size}px;
    color: ${props => props.color};
    font-weight: ${props => props.weight};
  `,
  SplitLine: styled.div`
    width: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${theme.colors.black};
  `,
  Logo: styled(Logo)`
    margin-bottom: 30px;
  `,
  ErrorText: styled.span`
    font-size: 12px;
    font-weight: 500;
    color: #e53c3c;
  `,
};

export default Styled;
