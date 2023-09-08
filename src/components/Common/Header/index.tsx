import { useState } from 'react';
import Styled from './styles';
import Image from 'next/image';
import Icon from '../Icon';
import EventBanner from './EventBanner';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useDispatch } from 'react-redux';
import { clearUser } from 'store/reducers/userSlice';
import Menu from '../Menu';
import { getCookie, removeCookie } from 'src/utils/cookie';
import { useRouter } from 'next/router';
import { setToken } from 'store/reducers/tokenSlice';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const refreshToken = getCookie('refreshToken');
  const isLogin = useSelector((state: RootState) => state.user.email);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(clearUser());
    setToken('');
    removeCookie('refreshToken');
    router.push('/');
  };
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
            <Image
              src="/assets/images/home/headerLogo.png"
              alt="headerLogo"
              width={150}
              height={33}
            />
          </Styled.Logo>
        </Link>
        <Styled.Utils>
          {isLogin && refreshToken && (
            <Link href="/">
              <Icon
                onClick={handleLogout}
                name="logout"
                width={36}
                height={32}
              />
            </Link>
          )}
          <li>
            <Link href={isLogin && refreshToken ? '/mypage' : '/login'}>
              <Icon name="myPage" width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link href="/search">
              <Icon name="search" width={30} height={30} />
            </Link>
          </li>
          <li>
            <Link href={isLogin && refreshToken ? '/mypage/cart' : '/login'}>
              <Icon name="cart" width={33} height={30} />
            </Link>
          </li>
        </Styled.Utils>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default Header;
