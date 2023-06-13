import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/Admin/SideBar';
import Member from '@components/Admin/AdminBody/Member';
import Account from '@components/Admin/AdminBody/Account';
import Cart from '@components/Admin/AdminBody/Cart';
import Board from '@components/Admin/AdminBody/Board';
import Settings from '@components/Admin/AdminBody/Settings';

const admin = () => {
  const router = useRouter();
  const category = router.query.menu;
  let pageComponent = null;

  console.log(category);
  if (category == 'account') {
    pageComponent = (
      <Wrapper>
        <SideBar router={router.asPath} />
        <Account />
      </Wrapper>
    );
  } else if (category == 'member') {
    pageComponent = (
      <Wrapper>
        <SideBar router={router.asPath} />
        <Member />
      </Wrapper>
    );
  } else if (category == 'cart') {
    pageComponent = (
      <Wrapper>
        <SideBar router={router.asPath} />
        <Cart />
      </Wrapper>
    );
  } else if (category == 'product') {
    pageComponent = (
      <Wrapper>
        <SideBar router={router.asPath} />
        {/* 회원 부분과 동일해서 일단 회원 부분 넣어놓은 다음 회원 부분을 컴포넌트화 할 예정 */}
        <Member />
      </Wrapper>
    );
  } else if (category == 'board') {
    pageComponent = (
      <Wrapper>
        <SideBar router={router.asPath} />
        <Board />
      </Wrapper>
    );
  } else if (category == 'settings') {
    pageComponent = (
      <Wrapper>
        <SideBar router={router.asPath} />
        <Settings />
      </Wrapper>
    );
  } else if (category == 'logout') {
    pageComponent = (
      <Wrapper>
        <SideBar router={router.asPath} />
        <NotYet>로그아웃</NotYet>
      </Wrapper>
    );
  } else {
    // 예외처리 부분
  }
  return <>{pageComponent}</>;
};

const Wrapper = styled.div`
  display: flex;
`;

const NotYet = styled.div`
  margin-top: 20px;
  margin-left: 500px;
`;
export default admin;
