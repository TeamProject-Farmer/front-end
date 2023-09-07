import styled from '@emotion/styled';
import theme from '@styles/theme';
import type { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';
import Layout from '@pages/layout';
import NestedLayout from '@components/Order/NestedLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getOrdersComplete } from 'src/apis/order/order';
import { useQuery } from '@tanstack/react-query';
import formatOrderDate from 'src/utils/order/formatOrderDate';

const orderResultPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { orderNumber } = query;
  const { isLoading, data: orderedData } = useQuery([orderNumber], () =>
    getOrdersComplete(orderNumber),
  );

  if (isLoading) return;
  const { name, phoneNumber, address, paymentPrice, orderedDate } = orderedData;

  return (
    <Styled.Wrapper>
      <Styled.Message>
        <span>주문이 완료</span>되었습니다. 감사합니다!
      </Styled.Message>
      <Styled.OrderData>
        <li>주문일 {formatOrderDate(orderedDate)}</li>
        <li>주문번호 {orderNumber}</li>
      </Styled.OrderData>
      <Styled.FlexColumnWrapper>
        <Styled.Title>받는사람 정보</Styled.Title>
        <Styled.GridWrapper>
          <Styled.content>이름</Styled.content>
          <Styled.content>{name}</Styled.content>
        </Styled.GridWrapper>
        <Styled.GridWrapper>
          <Styled.content>휴대폰</Styled.content>
          <Styled.content>{phoneNumber}</Styled.content>
        </Styled.GridWrapper>
        <Styled.GridWrapper>
          <Styled.content>배송주소</Styled.content>
          <Styled.content>{address}</Styled.content>
        </Styled.GridWrapper>
      </Styled.FlexColumnWrapper>
      <Styled.FlexWrapper>
        <Styled.Title>결제금액</Styled.Title>
        <Styled.Price>{paymentPrice}원</Styled.Price>
      </Styled.FlexWrapper>
      <Styled.ShopBtn>
        <Link href="/shop">계속 쇼핑하기</Link>
      </Styled.ShopBtn>
    </Styled.Wrapper>
  );
};

export default orderResultPage;

orderResultPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

const Styled = {
  Wrapper: styled.div`
    position: relative;
    width: 1200px;
    height: 650px;
    border: 1px solid #000;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    ::before {
      content: '';
      position: absolute;
      display: 'block';
      background-color: ${theme.colors.green4};
      width: 1198px;
      height: 15px;
      top: 0;
      left: 0;
    }
  `,
  Message: styled.div`
    font-size: 40px;
    font-weight: 500;
    span {
      color: #59b941;
      font-weight: 600;
    }
  `,
  OrderData: styled.ul`
    width: 470px;
    height: 42px;
    border-radius: 21px;
    background: #ecf9e9;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 27px;
    li {
      color: ${theme.colors.green1};
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      position: relative;
      :not(:last-child)::before {
        content: '';
        position: absolute;
        display: block;
        background-color: ${theme.colors.green1};
        width: 2px;
        height: 24px;
        top: 3px;
        right: -13.5px;
      }
    }
  `,
  FlexColumnWrapper: styled.div`
    width: 472px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    ::before {
      content: '';
      position: absolute;
      display: 'block';
      background-color: #59b941;
      width: 472px;
      height: 1px;
      bottom: -20px;
      left: 0;
    }
  `,
  GridWrapper: styled.div`
    margin-left: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  `,
  FlexWrapper: styled.div`
    width: 472px;
    display: flex;
    justify-content: space-between;
  `,
  Title: styled.p`
    color: #59b941;
    font-size: 20px;
    font-weight: 600;
  `,
  content: styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    :first-of-type {
      margin-right: 50px;
    }
  `,
  Price: styled.p`
    color: #59b941;
    font-size: 20px;
    font-weight: 400;
  `,
  ShopBtn: styled.div`
    margin-top: 40px;
    color: #fff;
    font-size: 25px;
    font-weight: 400;
    padding: 15px 40px;
    border-radius: 5px;
    background-color: ${theme.colors.green1};
  `,
};
