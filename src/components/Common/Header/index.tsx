import Styled from './styles';
import Icon from '../Icon';
import Logo from '@assets/images/home/logo.svg';
import FirstBuyEvent from './FirstBuyEvent';

const Header = () => {
  return (
    <Styled.Wrapper>
      <FirstBuyEvent />
      <Styled.Header>
        <Icon name="menu" width={32} height={32} />
        <Logo />
        <Styled.Utils>
          <li>
            <Icon name="myPage" width={32} height={32} />
          </li>
          <li>
            <Icon name="search" width={30} height={30} />
          </li>
          <li>
            <Icon name="cart" width={33} height={30} />
          </li>
        </Styled.Utils>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default Header;
