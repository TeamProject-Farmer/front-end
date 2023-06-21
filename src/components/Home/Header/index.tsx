import Styled from './styles';
import Icon from '@components/Home/Common/Icon';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Menu>
          <Icon src="menu" width={30} height={30} />
        </Styled.Menu>
        <Styled.Logo>
          <Icon src="logo" width={150} height={33} />
        </Styled.Logo>
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
