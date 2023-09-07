import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div<{ sizeBg: string }>`
    width: 1920px;
    height: 830px;
    position: relative;
    background-image: url(${props => `assets/images/home/${props.sizeBg}.png`});
  `,
  ContentBox: styled.div`
    width: 460px;
    height: 550px;
    position: absolute;
    top: 140px;
    right: 370px;
    background: #fff;
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.4);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.p`
    margin-bottom: 37px;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${theme.colors.green2};
  `,
  SizeBox: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
  `,
  List: styled.li`
    width: 390px;
    height: 120px;
    border-radius: 15px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.green1};
    display: flex;
    gap: 7px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.25);
    &:hover {
      color: #fff;
      background-color: ${theme.colors.green2};
    }
  `,
};

export default Styled;
