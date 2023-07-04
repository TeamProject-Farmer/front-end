import Styled from './styles';
import Icon from '@components/Home/Common/Icon';
import Logo from '@assets/images/home/logo.svg';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Icon src="menu" width={30} height={30} />
        <Logo />
        <Styled.Utils>
          <li>
            <Icon src="myPage" width={30} height={30} />
          </li>
          <li>
            <Icon src="search" width={30} height={30} />
          </li>
          <li>
            <Icon src="cart" width={30} height={30} />
          </li>
        </Styled.Utils>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default Header;
