import Styled from './styles';
import AdminLayout from './Admin';
import SearchBar from '../common/SearchBar';
import AccountBody from '../Account/AccountBody';

const Account = () => {
  return <AdminLayout>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>계정관리</Styled.ContentHeaderTitle>
        <SearchBar />
      </Styled.ContentHeader>
      <AccountBody />
    </AdminLayout>;
}


export default Account;