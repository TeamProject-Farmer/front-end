import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/Admin/SideBar';
import AdminLayout from '@components/Admin/layout/AdminLayout';

const admin = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <SideBar router={router.asPath} />
      <AdminLayout /> {/*<- 홈 부분 아직 추가 안됨*/}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default admin;
