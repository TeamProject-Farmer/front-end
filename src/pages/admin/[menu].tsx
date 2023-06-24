import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/Admin/SideBar';
import SettingsBody from '@components/Admin/AdminBody/Settings/SettingsBody';
import CommonLayout from '@components/Admin/AdminBody/CommonLayout';

const Admin = () => {
  const router = useRouter();
  const menu = router.query.menu;
  let category:string;
  if(menu){
    category = menu.toString();
  }
  const pageComponents = {
    settings: <SettingsBody />,
    logout: <NotYet>로그아웃</NotYet>,
  };

  const pageComponent = (
    <Wrapper>
      <SideBar router={router.asPath} />
      {pageComponents[category] || <CommonLayout cate={category} />}
    </Wrapper>
  );
  return <>{pageComponent}</>;
};

const Wrapper = styled.div`
  display: flex;
`;

const NotYet = styled.div`
  margin-top: 20px;
  margin-left: 500px;
`;
export default Admin;
