import Styled from './styles';
import Icon from '../Icon';
import FirstBuyEvent from './FirstBuyEvent';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useDispatch } from 'react-redux';
import { clearUser } from 'store/reducers/userSlice';
import Menu from '../Menu';
import { useState } from 'react';

const Header = () => {
  const isLogin = useSelector((state: RootState) => state.user.accessToken);
  const dispatch = useDispatch();
  return (
    <Styled.Wrapper>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
      <FirstBuyEvent />
      <Styled.Header>
        <Styled.Menu onClick={() => setShowMenu(true)}>
          <Icon name="menu" width={32} height={32} />
        </Styled.Menu>
        <Link href="/">
          <Styled.Logo
            alt="headerLogo"
            src="/assets/images/home/headerLogo.png"
          />
        </Link>
        <Styled.Utils>
          {isLogin && (
            <Link href={'/'}>
              <Icon
                onClick={() => dispatch(clearUser())}
                name="logout"
                width={36}
                height={32}
              />
            </Link>
          )}
          <li>
            <Link href={isLogin ? '/mypage' : '/login'}>
              <Icon name="myPage" width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link href="/search">
              <Icon name="search" width={30} height={30} />
            </Link>
          </li>
          <li>
            <Link href="/mypage/cart">
              <Icon name="cart" width={33} height={30} />
            </Link>
          </li>
        </Styled.Utils>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default Header;
