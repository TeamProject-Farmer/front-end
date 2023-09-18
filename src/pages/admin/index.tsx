import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/Admin/SideBar';
import AdminLayout from '@components/Admin/AdminLayout';

const adminPage = () => {
  return (
    <Wrapper>
      <SideBar />
      <AdminLayout page='Home' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: #f7f7f7;
`;

export default adminPage;
