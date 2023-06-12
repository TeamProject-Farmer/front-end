import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/Admin/SideBar';

const admin = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <SideBar router={router.asPath} />
      <NotYet>아직 개발 중입니다.</NotYet>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const NotYet = styled.div`
  margin-top: 20px;
  margin-left: 500px;
`;
export default admin;
