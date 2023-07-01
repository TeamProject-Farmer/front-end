import { useState } from 'react'
import styled from '@emotion/styled'
import theme from '@styles/theme'
import { PayMethod } from 'src/types/order/types'

const payMethodList: PayMethod[] = [
  {id: 'card', title: '카드'},
  {id: 'account', title: '계좌이체'},
  {id: 'kakao', title: '카카오페이'},
  {id: 'toss', title: '토스페이'},
  {id: 'payco', title: '페이코'},
  {id: 'phone', title: '핸드폰'},
]

const PaymentList = () => {
  const [clicked, setClicked] = useState<string>('')

  return (
    <Styled.Wrapper>
      {
        payMethodList &&
        payMethodList.map((ele) => {
          const {id, title} = ele;
          const isClicked = clicked === id;
          return (
            <Styled.List 
              key={id} 
              onClick={() => {setClicked(id)}}
              isClicked={isClicked}
            >
              <Styled.ImgBox />
              <Styled.Title>{title}</Styled.Title>
            </Styled.List>
          )
        })
      }
    </Styled.Wrapper>
  )
}

export default PaymentList

const Styled = {
  Wrapper: styled.ul`
    display: flex;
  `,
  List: styled.li<{isClicked: boolean}>`
    width: 141px;
    height: 155px;
    box-sizing: border-box;
    border: ${({isClicked}) => isClicked ? '3px solid #47AC3A;' : '1px solid #ABABAB'};
    background-color: ${({isClicked}) => isClicked ? '#ECFFEA' : '#fff'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 21px;
  `,
  ImgBox: styled.div`
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    background-color: ${theme.colors.lightGray};
  `,
  Title: styled.div`
    text-align: center;
    font-size: 16px;
  `
}
