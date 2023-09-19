import { ReactElement } from 'react';
import type { NextPageWithLayout } from '@pages/_app';
import AdminLayout from '@pages/adminlayout';
import Title from '@components/Admin/Common/Title';
import { BoardStyled as Styled } from '@components/Admin/styles';

const BoardPage: NextPageWithLayout = () => {
  //세부 내역은 추후 수정 예정
  return (
    <Styled.WholeWrapper>
      <Title title="게시글 조회" />
      <Styled.RowWrapper>
        <Styled.LeftWrapper className="wrapper">
          <Styled.SubTitle>
            게시글 목록
            <button className="subTitleButton">게시판 추가</button>
          </Styled.SubTitle>
          <Styled.TabWrapper>
            <div className="singleTab">전체 게시글</div>
            <div className="singleTab">Q&A</div>
            <div className="singleTab">REVIEW</div>
          </Styled.TabWrapper>
        </Styled.LeftWrapper>
        <Styled.RightWrapper className="wrapper">
          <Styled.SubTitle>
            전체 게시글
            <Styled.SubTitleRightWrapper>
              <Styled.SearchBar>
                <Styled.SearchInput></Styled.SearchInput>
                <Styled.SearchIcon />
              </Styled.SearchBar>
              <Styled.RowWrapper>
                <button className="subTitleButton">삭제</button>
                <button className="subTitleButton">게시판 변경</button>
                <button className="subTitleButton">내보내기</button>
                <Styled.SortOption>
                  등록일순
                  <Styled.OptionArrow />
                </Styled.SortOption>
              </Styled.RowWrapper>
            </Styled.SubTitleRightWrapper>
          </Styled.SubTitle>
        </Styled.RightWrapper>
      </Styled.RowWrapper>
    </Styled.WholeWrapper>
  );
};

BoardPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BoardPage;
