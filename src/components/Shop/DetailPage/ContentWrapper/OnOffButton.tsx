import styled from '@emotion/styled';
import theme from '@styles/theme';
import { useState } from 'react';

const OnOffButton = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle(prev => !prev);
  };
  return (
    <Styled.Wrapper onClick={clickedToggle} toggle={toggle}>
      <Styled.Pointer toggle={toggle} />
      {toggle ? (
        <Styled.PointerOn>ON</Styled.PointerOn>
      ) : (
        <Styled.PointerOff>OFF</Styled.PointerOff>
      )}
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.button<{ toggle: boolean }>`
    width: 75px;
    height: 30px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    background-color: ${props =>
      !props.toggle ? '#e7ece6' : `${theme.colors.pointGreen}`};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
  `,
  Pointer: styled.div<{ toggle: boolean }>`
    background-color: white;
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background: #fff;
    border: 1px solid ${theme.colors.pointGreen};
    position: absolute;
    left: 0;
    transition: all 0.5s ease-in-out;
    transform: ${props => (props.toggle ? 'translate(39px, 0)' : '')};
    transition: ${props => (props.toggle ? 'all 0.5s ease-in-out' : '')};
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
export default OnOffButton;