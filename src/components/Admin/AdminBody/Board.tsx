import Styled from './styles';
import AdminLayout from './Admin';
import SearchBar from '../common/SearchBar';
import BoardBody from '../Board/BoardBody';

const Board = () => {
  return (
    <AdminLayout>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>게시판관리</Styled.ContentHeaderTitle>
        <SearchBar />
      </Styled.ContentHeader>
      <BoardBody />
    </AdminLayout>
  );
};

export default Board;
