import React from 'react';
import { Styled } from '../styles';
import theme from '@styles/theme';
import { CartListProps } from 'src/types/mypage/types';
import Image from 'next/image';
import { getEditCount } from 'src/apis/mypage/cart';
import { useQueryClient } from 'react-query';

const CartItems = ({ cartListArray }: { cartListArray: CartListProps[] }) => {
  const queryClient = useQueryClient();

  // 상품 개수 변경 기능
  const handleEditCount = async (id: number, operation: 'minus' | 'plus') => {
    try {
      await getEditCount(id, operation);
      await queryClient.invalidateQueries('cartList');
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  return (
    <>
      {cartListArray?.map((item, index) => (
        <Styled.CartRow
          key={index}
          style={
            index === cartListArray.length - 1 ? { marginBottom: '2rem' } : null
          }
        >
          <Styled.CartCheckBox type="checkbox" />

          <Image src={item.imgUrl} alt="식물 사진" width="100" height="100" />

          <Styled.ListInfoText size="18" color={theme.colors.black}>
            {item.productName} <br />
            <Styled.ListSpan>{item.optionName}</Styled.ListSpan>
          </Styled.ListInfoText>
          <Styled.QuantityContainer>
            <Styled.QuantityButton
              // 상품 개수가 1개면 마이너스 되지 않도록
              disabled={item.count === 1}
              onClick={() => handleEditCount(item.optionId, 'minus')}
            >
              -
            </Styled.QuantityButton>
            <Styled.QuantityText>{item.count}</Styled.QuantityText>
            <Styled.QuantityButton
              onClick={() => handleEditCount(item.optionId, 'plus')}
            >
              +
            </Styled.QuantityButton>
          </Styled.QuantityContainer>
          <Styled.ListInfoText size="15" color={theme.colors.black}>
            {item.productPrice.toLocaleString()}원
          </Styled.ListInfoText>
          <Styled.ListInfoText size="15" color={theme.colors.black}>
            {item.totalPrice.toLocaleString()}원
          </Styled.ListInfoText>
        </Styled.CartRow>
      ))}
    </>
  );
};

export default CartItems;
