import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SideBar from '@components/Admin/SideBar';

const adminPage = () => {
  const router = useRouter();
  const menu = router.query.menu;
  let category: string;
  if (menu) {
    category = menu.toString();
  }

  const pageComponent = (
    <Wrapper>
      <SideBar menuName={category} />
      {/* 추후 추가 예정*/}
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
export default adminPage;
