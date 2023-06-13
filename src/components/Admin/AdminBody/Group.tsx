import Styled from './styles';
import AdminLayout from './Admin';
import SearchBar from '../common/SearchBar';

const GroupLayout = () => {
  return (
    <AdminLayout>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>회원관리</Styled.ContentHeaderTitle>
        <SearchBar />
      </Styled.ContentHeader>
    </AdminLayout>
  );
};

export default GroupLayout;
