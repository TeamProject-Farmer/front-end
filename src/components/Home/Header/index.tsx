import Styled from './styles';
import Icon from '@components/Home/Common/Icon';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Menu>
          <Icon src="menu" />
        </Styled.Menu>
        <Styled.Logo>
          <Icon src="logo" width={180} />
        </Styled.Logo>
        <Styled.Utils>
          <li>
            <Icon src="myPage" />
          </li>
          <li>
            <Icon src="search" />
          </li>
          <li>
            <Icon src="cart" />
          </li>
        </Styled.Utils>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default Header;
