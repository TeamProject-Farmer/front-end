import Styled from './styles';
import AdminLayout from './Admin';
import SearchBar from '../common/SearchBar';
import Member from '../Member/MemberWrapper';

const MemberLayout = () => {
  return (
    <AdminLayout>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>회원관리</Styled.ContentHeaderTitle>
        <SearchBar />
      </Styled.ContentHeader>
      <Member />
    </AdminLayout>
  );
};

export default MemberLayout;
