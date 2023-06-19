import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/Admin/SideBar';


const admin = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <SideBar router={router.asPath} />
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default admin;
