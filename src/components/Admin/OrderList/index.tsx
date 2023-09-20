import React from 'react';
import styled from '@emotion/styled';

const OrderList = () => {
  return (
    <Styled.OrderList>
      <>
        <Styled.ListText>
          <Styled.CheckFlexBox>
            <Styled.Checkbox type="checkbox" />
            주문일 / 주문번호
          </Styled.CheckFlexBox>
        </Styled.ListText>
        <Styled.ListText>주문자</Styled.ListText>
        <Styled.ListText>주문상품</Styled.ListText>
        <Styled.ListText>상품 금액</Styled.ListText>
        <Styled.ListText>수량</Styled.ListText>
        <Styled.ListText>상태</Styled.ListText>
        <Styled.ListText>배송</Styled.ListText>
        <Styled.ListText>배송정보</Styled.ListText>
        <Styled.ListText>결제 내역</Styled.ListText>
      </>
      <>
        <Styled.ListText>
          <Styled.NumberFlexBox>
            <Styled.Checkbox type="checkbox" />
            <Styled.NumberBox>
              <div>2023-06-30</div>
              <div>2023063012345</div>
            </Styled.NumberBox>
          </Styled.NumberFlexBox>
        </Styled.ListText>
        <Styled.ListText>김파머</Styled.ListText>
        <Styled.ListText>주문상품</Styled.ListText>
        <Styled.ListText>50,000원</Styled.ListText>
        <Styled.ListText>1</Styled.ListText>
        <Styled.ListText>배송 완료</Styled.ListText>
        <Styled.ListText>
          택배
          <br /> 3,000원
        </Styled.ListText>
        <Styled.ListText>
          김파머 / 010-1234-5678 서울시 영등포구 은평로 123 파머하이테크시티 3층
          203호 우)12345
        </Styled.ListText>
        <Styled.ListText>
          <Styled.PayFlexBox>
            <div>총 결제금액</div>
            <div>53,000원</div>
          </Styled.PayFlexBox>
          <Styled.PayFlexBox>
            <div>소계</div>
            <div>50,000원</div>
          </Styled.PayFlexBox>
          <Styled.PayFlexBox>
            <div>배송비</div>
            <div>3000원</div>
          </Styled.PayFlexBox>
          <Styled.PayFlexBox>
            <div>결제방법</div>
            <div>무통장입금</div>
          </Styled.PayFlexBox>
        </Styled.ListText>
      </>
    </Styled.OrderList>
  );
};

const Styled = {
  OrderList: styled.div`
    margin-top: 8px;
    display: grid;
    grid-template-columns: repeat(9, auto);
  `,
  CheckFlexBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  NumberFlexBox: styled.div`
    display: flex;
    align-items: flex-start;
  `,
  ListText: styled.div`
    border: 1px solid #e5e5e5;
    padding: 9px 12px;
    text-align: center;
  `,
  NumberBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  Checkbox: styled.input`
    width: 16px;
    height: 16px;
    margin-right: 8px;
  `,
  PayFlexBox: styled.div`
    display: flex;
    width: 256px;
    justify-content: space-between;
  `,
};

export default OrderList;
