import styled from '@emotion/styled'
import { IButtonProps } from 'src/types/order/types'

const Button = ({text, bgColor, color}:IButtonProps) => {
  return (
    <Styled.Wrapper bgColor={bgColor} color={color}>
      {text}
    </Styled.Wrapper>
  )
}

export default Button

const Styled = {
  Wrapper: styled.div<{bgColor: string, color: string}>`
    background-color: ${({bgColor}) => bgColor ? bgColor : '#fff'};
    border-radius: 4px;
    border: 1px solid ${({bgColor}) => bgColor ? bgColor : '#000'};
    color: ${({color}) => color ? color : '#000'};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 16px;
  `
}
