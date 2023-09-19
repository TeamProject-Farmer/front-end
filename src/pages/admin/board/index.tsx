import { ReactElement } from 'react';
import type { NextPageWithLayout } from '@pages/_app';
import AdminLayout from '@pages/adminlayout';
import Title from '@components/Admin/Common/Title';
import { BoardStyled as Styled } from '@components/Admin/styles';

const BoardPage: NextPageWithLayout = () => {
  return (
    <Styled.WholeWrapper>
      <Title title="게시글 조회" />
      <Styled.RowWrapper>
        <Styled.LeftWrapper className="wrapper"></Styled.LeftWrapper>
        <Styled.RightWrapper className="wrapper"></Styled.RightWrapper>
      </Styled.RowWrapper>
    </Styled.WholeWrapper>
  );
};

BoardPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BoardPage;
