import { ReactElement } from 'react';
import type { NextPageWithLayout } from '@pages/_app';
import AdminLayout from '@pages/adminlayout';
import DetailModal from '@components/Admin/DetailModal';
import Title from '@components/Admin/Common/Title';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import OrderList from '@components/Admin/OrderList';

const CartPage: NextPageWithLayout = () => {
  return (
    <Styled.Wrapper>
      <DetailModal />
      <Title title="전체 조회" />
      <Styled.OrderWrapper>
        <Styled.OrderStatus>
          <Styled.StatusWrapper>
            <Styled.SearchInput />
            <Styled.UtilBox>
              <Styled.UtilBtn>기간 설정</Styled.UtilBtn>
              <Styled.UtilBtn>주문서 출력</Styled.UtilBtn>
              <Styled.UtilBtn>내보내기</Styled.UtilBtn>
            </Styled.UtilBox>
            <Styled.Select>
              <option>주문일순</option>
            </Styled.Select>
          </Styled.StatusWrapper>
        </Styled.OrderStatus>
        <OrderList />
      </Styled.OrderWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    color: ${theme.colors.adminBlack};
  `,
  Title: styled.h1`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 18px;
  `,
  OrderWrapper: styled.div`
    width: 1616px;
    height: 922px;
    border-radius: 5px;
    background-color: #fff;
    padding: 8px 24px;
  `,
  OrderStatus: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
  StatusWrapper: styled.div`
    display: flex;
  `,
  SearchInput: styled.input`
    width: 304px;
    height: 32px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.adminGray};
    margin-right: 8px;
  `,
  UtilBox: styled.div`
    display: flex;
    margin-right: 12px;
  `,
  UtilBtn: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
    position: relative;
    border: 1px solid ${theme.colors.adminGray};
    border-collapse: collapse;
    :first-child {
      border-radius: 3px 0 0 3px;
      border-right: 0;
    }
    :last-child {
      border-radius: 0 3px 3px 0;
      border-left: 0;
    }
  `,
  Select: styled.select``,
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default CartPage;
