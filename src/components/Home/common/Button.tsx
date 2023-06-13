import styled from '@emotion/styled'

const Button = ({content}) => {
  return (
    <Styled.Wrapper>{content}</Styled.Wrapper>
  )
}

export default Button

const Styled = {
  Wrapper: styled.div`
    margin-top: 60px;
    padding: 15px 19px;
    background-color:#707070;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  `
}
