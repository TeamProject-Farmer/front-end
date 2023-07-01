import Styled from './styles';
import Icon from '@components/Home/Common/Icon';
import Logo from '@assets/images/home/logo.svg';

// 헤더 렌더링 안되는 이슈 발생, 수정 필요할듯
const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Menu>
          <Icon src="menu" width={30} height={30} />
        </Styled.Menu>
        <Styled.Logo>
          <Logo />
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
