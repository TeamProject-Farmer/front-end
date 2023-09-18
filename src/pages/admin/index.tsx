import { ReactElement } from 'react';
import type { NextPageWithLayout } from '@pages/_app';
import AdminLayout from '@pages/adminlayout';
import Analytics from '@components/Admin/Home/Analytics';
import Board from '@components/Admin/Home/Board';
import Todo from '@components/Admin/Home/Todo';
import Title from '@components/Home/Common/Title';
import { HomeStyled as Styled } from '@components/Admin/styles';

const AdminPage: NextPageWithLayout = () => {
  return (
    <Styled.Wrapper>
      <Title title="오늘의 할 일" />
      <Todo />
      <Title title="통계" />
      <Analytics />
      <Title title="게시판" />
      <Board />
    </Styled.Wrapper>
  );
};

AdminPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminPage;
