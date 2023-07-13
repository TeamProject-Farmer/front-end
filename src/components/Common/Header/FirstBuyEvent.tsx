import styled from '@emotion/styled';
import theme from '@styles/theme';
import { useState } from 'react';
import Icon from '../Icon';

const FirstBuyEvent = () => {
  const [close, setClose] = useState(false);

  return (
    <>
      {!close && (
        <Styled.Event>
          첫 구매라면 누구나 최대 2만원 할인받기
          <Styled.CloseBtn onClick={() => setClose(true)}>
            <Icon name="closeBtn" width={26} height={26} />
          </Styled.CloseBtn>
        </Styled.Event>
      )}
    </>
  );
};

export default FirstBuyEvent;

const Styled = {
  Event: styled.div`
    position: relative;
    height: 50px;
    background-color: ${theme.colors.green1};
    color: #ffffff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  CloseBtn: styled.div`
    position: absolute;
    right: 10px;
  `,
};
