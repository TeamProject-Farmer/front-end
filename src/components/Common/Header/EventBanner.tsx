import styled from '@emotion/styled';
import theme from '@styles/theme';
import Icon from '../Icon';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setIsBannerClosed } from 'store/reducers/bannerSlice';
import Link from 'next/link';

const EventBanner = () => {
  const isOpened = useSelector((state: RootState) => state.banner);
  const dispatch = useDispatch();

  return (
    <>
      {isOpened && (
        <Link href="/register">
          <Styled.Event>
            회원가입 후 최대 2만원 할인 받기
            <Styled.CloseBtn onClick={() => dispatch(setIsBannerClosed())}>
              <Icon name="closeBtn" width={26} height={26} />
            </Styled.CloseBtn>
          </Styled.Event>
        </Link>
      )}
    </>
  );
};

export default EventBanner;

const Styled = {
  Event: styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    background-color: ${theme.colors.green1};
    color: #ffffff;
    font-size: 18px;
    text-align: center;
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
