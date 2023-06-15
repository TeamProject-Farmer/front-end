import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/Admin/SideBar';
import Settings from '@components/Admin/AdminBody/Settings';
import CommonLayout from '@components/Admin/AdminBody/CommonLayout';

const admin = () => {
  const router = useRouter();
  const category = router.query.menu;
  let pageComponent = null;

  if (category == 'settings') {
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
    pageComponent = (
      <Wrapper>
        <SideBar router={router.asPath} />
        <CommonLayout cate={category} />
      </Wrapper>
    );
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
