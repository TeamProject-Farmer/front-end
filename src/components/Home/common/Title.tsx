import styled from '@emotion/styled'

const Title = ({title}) => {
  return (
    <Styled.Title>{title}</Styled.Title>
  )
}

export default Title

const Styled = {
  Title: styled.p`
    font-size: 30px;
    font-weight: 700;
    margin-top: 180px;
  `,
}
