import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/Admin/SideBar';
import HomeBody from '@components/Admin/AdminBody/Home/HomeBody';

const Admin = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <SideBar router={router.asPath} />
      <HomeBody />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default Admin;
