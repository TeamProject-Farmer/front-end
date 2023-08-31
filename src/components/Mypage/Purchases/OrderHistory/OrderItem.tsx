import React from 'react';
import theme from '@styles/theme';
import { Styled } from '@components/Mypage/styles';
import OrderInfoText from './OrderInfoText';
import { OrderListProps } from 'src/types/mypage/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { OptionArray } from 'src/utils/mypage/orderStatusData';
import ReviewModal from '@components/Common/Modal/ReviewModal';

export const OrderItem = ({ order }: { order: OrderListProps }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleProductIntoPage = () => {
    router.push(`/shop/category/detail/${order.productId}`);
  };

  return (
    <Styled.FlexRowCenter>
      <>
        {modalOpen === true ? (
          <ReviewModal
            modalName="리뷰 작성하기"
            imgUrl = {order.imgUrl}
            orderProductId={order.orderProductId}
            productName={order.productName}
            productOption={order.optionName}
            productCount={order.count}
            modalClose={closeModal}
            setModalOpen={setModalOpen}
          />
        ) : null}
      </>
      <OrderInfoText
        size="20"
        color={theme.colors.black}
        text={order.serialNumber}
      />
      <Image
        src={order.imgUrl}
        priority
        alt="식물 사진"
        width="0"
        height="0"
        sizes="150px"
        style={{ width: '150px', height: '150px' }}
      />
      <Styled.ProductInfoWrapper>
        <OrderInfoText
          size="16"
          color={theme.colors.black}
          text={order.productName}
        />
        <OrderInfoText
          size="13"
          color={theme.colors.mypageGray}
          text={`[옵션] ${order.optionName}`}
        />
        <Styled.ProductButton onClick={handleProductIntoPage}>
          상품 상세보기
        </Styled.ProductButton>
        <Styled.ReviewButton onClick={() => setModalOpen(true)}>
          리뷰 작성하기
        </Styled.ReviewButton>
      </Styled.ProductInfoWrapper>
      <OrderInfoText
        size="20"
        color={theme.colors.black}
        text={`${order.count}개`}
      />
      <OrderInfoText
        size="20"
        color={theme.colors.black}
        text={`${order.orderPrice.toLocaleString()}원`}
      />
      <OrderInfoText
        size="20"
        color={theme.colors.black}
        text={OptionArray[order.orderStatus]}
      />
    </Styled.FlexRowCenter>
  );
};
