import React, { useState } from 'react';
import { Styled } from '../styles';
import theme from '@styles/theme';

const CartItems = () => {
  const [quantity, setQuantity] = useState(1);

  const cartData = [
    // Cart 데이터 배열
    {
      name: '피쉬본',
      option: '[옵션] 화분 black',
      quantity: '1개',
      price: '12,900원',
    },
    {
      name: '피쉬본',
      option: '[옵션] 화분 black',
      quantity: '1개',
      price: '12,900원',
    },
    // ... 추가적인 아이템 데이터
  ];

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      {cartData.map((item, index) => (
        <Styled.CartRow
          key={index}
          style={
            index === cartData.length - 1 ? { marginBottom: '2rem' } : null
          }
        >
          <input type="checkbox" style={{ width: '16px', height: '16px' }} />
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#D9D9D9',
            }}
          />
          <Styled.ListInfoText size="18" color={theme.colors.black}>
            {item.name} <br /> <Styled.ListSpan>{item.option}</Styled.ListSpan>
          </Styled.ListInfoText>
          <Styled.QuantityContainer>
            <Styled.QuantityButton onClick={handleDecrease}>
              -
            </Styled.QuantityButton>
            <Styled.QuantityText>{quantity}</Styled.QuantityText>
            <Styled.QuantityButton onClick={handleIncrease}>
              +
            </Styled.QuantityButton>
          </Styled.QuantityContainer>
          <Styled.ListInfoText size="15" color={theme.colors.black}>
            {item.price}
          </Styled.ListInfoText>
          <Styled.ListInfoText size="15" color={theme.colors.black}>
            {item.price}
          </Styled.ListInfoText>
        </Styled.CartRow>
      ))}
    </>
  );
};

export default CartItems;
