import React from 'react';
import Title from '../Common/Title';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const DetailModal = () => {
  return (
    <Styled.Wrapper>
      <Styled.ModalBg />
      <Styled.ModalWrapper>
        <Title title="주문 상세 정보" />
        <Styled.DetailFlexBox>
          <Styled.ContentColumnBox>
            <Styled.ContentFlexBox>
              <Styled.Title>주문일</Styled.Title>
              <Styled.Content>2023-06-30</Styled.Content>
            </Styled.ContentFlexBox>
            <Styled.ContentFlexBox>
              <Styled.Title>주문 번호</Styled.Title>
              <Styled.Content>2023063012345</Styled.Content>
            </Styled.ContentFlexBox>
          </Styled.ContentColumnBox>
          <Styled.ContentColumnBox>
            <Styled.Head>주문자 정보</Styled.Head>
            <Styled.ContentFlexBox>
              <Styled.Title>이름</Styled.Title>
              <Styled.Content>김파머</Styled.Content>
            </Styled.ContentFlexBox>
            <Styled.ContentFlexBox>
              <Styled.Title>전화번호</Styled.Title>
              <Styled.Content>010-1234-5678</Styled.Content>
            </Styled.ContentFlexBox>
            <Styled.ContentFlexBox>
              <Styled.Title>배송지</Styled.Title>
              <Styled.Content>서울시 영등포구 은평로 123</Styled.Content>
            </Styled.ContentFlexBox>
          </Styled.ContentColumnBox>
        </Styled.DetailFlexBox>
        <div>
          <Styled.Head>주문자 상품 정보</Styled.Head>
        </div>
        <Styled.ProductInfoBox>
          <Styled.InfoTitle></Styled.InfoTitle>
          <Styled.InfoTitle>옵션</Styled.InfoTitle>
          <Styled.InfoTitle>수량</Styled.InfoTitle>
          <Styled.InfoTitle>단가</Styled.InfoTitle>
          <Styled.InfoTitle>합계</Styled.InfoTitle>
          <Styled.InfoContent>
            <Styled.ProductImgBox>
              <Styled.Img />
              <div>
                <div>스킨답서스</div>
                <div>옵션 : 화분 - Black</div>
              </div>
            </Styled.ProductImgBox>
          </Styled.InfoContent>
          <Styled.InfoContent>화분 - Black</Styled.InfoContent>
          <Styled.InfoContent>1</Styled.InfoContent>
          <Styled.InfoContent>50,000원</Styled.InfoContent>
          <Styled.InfoContent>50,000원</Styled.InfoContent>
          <Styled.InfoContent>
            <div>
              <Styled.InfoContentFlexBox>
                <Styled.Title>합계</Styled.Title>
                <Styled.Content>50,000원</Styled.Content>
              </Styled.InfoContentFlexBox>
              <Styled.InfoContentFlexBox>
                <Styled.Title>합계</Styled.Title>
                <Styled.Content>50,000원</Styled.Content>
              </Styled.InfoContentFlexBox>
              <Styled.InfoContentFlexBox>
                <Styled.Title>배송비</Styled.Title>
                <Styled.Content>3,000원</Styled.Content>
              </Styled.InfoContentFlexBox>
              <Styled.InfoContentFlexBox>
                <Styled.Title>할인 금액</Styled.Title>
                <Styled.Content>0원</Styled.Content>
              </Styled.InfoContentFlexBox>
              <Styled.InfoContentFlexBox>
                <Styled.Title>결제 금액</Styled.Title>
                <Styled.Content>53,000원</Styled.Content>
              </Styled.InfoContentFlexBox>
            </div>
          </Styled.InfoContent>
        </Styled.ProductInfoBox>
      </Styled.ModalWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    color: ${theme.colors.adminBlack};
  `,
  ModalBg: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  `,
  ModalWrapper: styled.div`
    position: relative;
    z-index: 2;
    margin-left: 216px;
    margin-top: 60px;
    padding: 24px 32px;
    width: 1200px;
    height: 840px;
    border-radius: 5px;
    background: #fff;
  `,
  DetailFlexBox: styled.div`
    display: flex;
    gap: 396px;
    margin-bottom: 36px;
  `,
  ContentColumnBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;

    :first-child {
      margin-top: 46px;
    }
  `,
  ContentFlexBox: styled.div`
    display: flex;
    gap: 32px;
  `,
  Head: styled.div`
    font-size: 14px;
    font-weight: 700;
  `,
  Title: styled.div`
    font-size: 14px;
    font-weight: 500;
    width: 55px;
  `,
  Content: styled.div`
    font-size: 12px;
    font-weight: 400;
  `,
  ProductInfoBox: styled.div`
    margin-top: 20px;
    display: grid;
    row-gap: 10px;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: repeat(3, auto);
  `,
  InfoTitleBox: styled.div``,
  InfoTitle: styled.div`
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
  `,
  InfoContent: styled.div`
    font-size: 12px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;

    :last-child {
      grid-column: 3/6;
      border-bottom: 0;
      background-color: pink;
      align-items: flex-start;
    }
  `,
  ProductImgBox: styled.div`
    display: flex;
    gap: 8px;
  `,
  Img: styled.div`
    width: 56px;
    height: 56px;
    background-color: #d9d9d9;
  `,
  InfoContentFlexBox: styled.div`
    display: flex;
    gap: 130px;
  `,
};

export default DetailModal;
