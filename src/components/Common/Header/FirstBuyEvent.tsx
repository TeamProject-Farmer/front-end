import styled from '@emotion/styled';
import theme from '@styles/theme';
import Icon from '../Icon';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setIsBannerClosed } from 'store/reducers/bannerSlice';

const FirstBuyEvent = () => {
  const isOpened = useSelector((state: RootState) => state.banner);
  const dispatch = useDispatch();

  return (
    <>
      {isOpened && (
        <Styled.Event>
          첫 구매라면 누구나 최대 2만원 할인받기
          <Styled.CloseBtn onClick={() => dispatch(setIsBannerClosed())}>
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
    width: 100%;
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
    cursor: pointer;
  `,
};
