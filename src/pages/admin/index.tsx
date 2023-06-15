import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/Admin/SideBar';
import AdminLayout from '@components/Admin/AdminBody/Admin';
import HomeLayout from '@components/Admin/AdminBody/Home';

const admin = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <SideBar router={router.asPath} />
      <HomeLayout />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default admin;
