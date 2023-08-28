import { useState } from 'react';
import Styled from './styles';
import Icon from '../Icon';
import EventBanner from './EventBanner';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useDispatch } from 'react-redux';
import { clearUser } from 'store/reducers/userSlice';
import Menu from '../Menu';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const isLogin = useSelector((state: RootState) => state.user.accessToken);
  const dispatch = useDispatch();
  return (
    <Styled.Wrapper>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
      <EventBanner />
      <Styled.Header>
        <Styled.Menu onClick={() => setShowMenu(true)}>
          <Icon name="menu" width={32} height={32} />
        </Styled.Menu>
        <Link href="/">
          <Styled.Logo>
            <img alt="headerLogo" src="/assets/images/home/headerLogo.png" />
          </Styled.Logo>
        </Link>
        <Styled.Utils>
          {isLogin && (
            <Link href="/">
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
