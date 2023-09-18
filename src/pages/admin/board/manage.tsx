import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import type { NextPageWithLayout } from '@pages/_app';
import AdminLayout from '@pages/adminlayout';
import { BoardManageStyled as Styled } from '@components/Admin/styles';

const BoardManagePage: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <Styled.WholeWrapper>
      <Styled.BackButton onClick={()=>router.push('/admin/board')}>
        <Styled.BackIcon />
        게시글 리스트로 돌아가기
      </Styled.BackButton>
      <Styled.Wrapper>
        <Styled.ContentWrapper>
          <Styled.Title>Q&A</Styled.Title>
          {/* 현재 들어있는 데이터들은 임시 데이터이며*/}
          {/* 추후 데이터를 받아와 넣어주는 방식으로 변경될 예정입니다. */}
          <Styled.ContentTitle>문의합니다</Styled.ContentTitle>
          <Styled.ProfileWrapper>
            <Styled.ProfileImage></Styled.ProfileImage>
            <Styled.ProfileBox>
              <div>
                <div>작성자</div>
                <div>김파머</div>
              </div>
              <div>
                <div>작성일</div>
                <div>2023.07.05</div>
              </div>
              <div>
                <div>조회수</div>
                <div>2</div>
              </div>
            </Styled.ProfileBox>
          </Styled.ProfileWrapper>
          <Styled.ContentBox>제품에 대해 문의합니다.</Styled.ContentBox>
        </Styled.ContentWrapper>
        <Styled.Footer>
          <Styled.FooterWriter>관리자</Styled.FooterWriter>
          <Styled.InputBox></Styled.InputBox>
          <Styled.SaveButton>저장</Styled.SaveButton>
        </Styled.Footer>
      </Styled.Wrapper>
    </Styled.WholeWrapper>
  );
};

BoardManagePage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BoardManagePage;
