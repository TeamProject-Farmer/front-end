import Styled from './styles';
import Icon from '../Icon';
import Image from 'next/image';
import FirstBuyEvent from './FirstBuyEvent';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const Header = () => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Styled.Wrapper>
      <FirstBuyEvent />
      <Styled.Header>
        <Icon name="menu" width={32} height={32} />
        <Link href="/">
          <Image
            alt="headerLogo"
            src="/assets/images/home/headerLogo.png"
            width={150}
            height={33.6}
          />
        </Link>

        <Styled.Utils>
          <li>
            <Link href={isLoggedIn ? '/mypage' : '/login'}>
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
