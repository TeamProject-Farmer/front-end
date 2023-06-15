import Styled from './styles'
import Button from '../Common/Button'
import Icon from '../Common/Icon'

const Banner = () => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <p>Let's be a Farmer!</p>
        <p>사무공간, 생활공간을</p>
        <p>그린 친화적으로</p>
      </Styled.Content>
      <Button content='구매하러 가기'/>
      <Styled.Events>
        <Styled.Event>farmer</Styled.Event>
        <Styled.Event>Event 01</Styled.Event>
        <Styled.Event>Event 02</Styled.Event>
     </Styled.Events>
     <Styled.DownBtn><Icon src='arrowDown' width={60} height={60}/></Styled.DownBtn>
    </Styled.Wrapper>
  )
}

export default Banner
