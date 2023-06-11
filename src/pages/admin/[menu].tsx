import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/adminPage/sidebar/SideBar';
import AdminLayout from '@components/adminPage/layout/AdminLayout';

const admin = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <SideBar router={router.asPath} />
      <AdminLayout />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default admin;
