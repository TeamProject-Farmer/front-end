import Styled from './styles'
import { useState } from 'react'
import Icon from '../Common/Icon'

const Event = () => {
  const [close, setClose] = useState(false)

  return (
    <div>
      {
        !close && 
          <Styled.Event>
            첫 구매라면 누구나 최대 2만원 할인받기
            <Styled.CloseBtn>
              <Icon src="close" onClick={() => setClose(true)}/>
            </Styled.CloseBtn>
          </Styled.Event>
      }
    </div>
  )
}

export default Event
