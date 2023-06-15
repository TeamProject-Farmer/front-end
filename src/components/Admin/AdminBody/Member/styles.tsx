import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Temp: styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
  `,


  MemberWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  MemberBodyWrapper: styled.div`
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 0 0 5px 5px;
    padding: 20px 10px;
    height: 60.5vh;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,

  StyledLabel: styled.label`
    display: flex;
    align-items: center;
    user-select: none;
    position: absolute;
    right: 14px;
    top: 14px;
    position: relative;
  `,
  StyledInput: styled.input`
    position: absolute;
    top: 13px;
    right: 15px;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 1.5px solid #ababab;
    border-radius: 5px;
    &:checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: ${theme.colors.blue};
    }
  `,
  BodyPartWrapper: styled.div`
    width: 33.3%;
    height: fit-content;
    display: flex;
    position: relative;
  `,
  BodyPartBox: styled.div`
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
  BodyPartTitle: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${theme.colors.black};
    margin-bottom: 5px;
  `,
  BodyPartContent: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${theme.colors.black};
  `,

  TabWrapper: styled.div`
    height: 113px;
    width: 100%;
    padding-right: 40px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-bottom: none !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  TabContainer: styled.div`
    display: flex;
    height: 100%;
  `,
  TabBox: styled.div`
    width: 200px;
    height: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border-bottom: 1px solid ${theme.colors.blue};
    }
  `,
};

export default Styled;
