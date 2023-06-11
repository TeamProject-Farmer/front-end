import Styled from './styles';
import SearchBar from '../common/SearchBar';
import CurrentTime from '../common/CurrentTime';

const AdminLayout = () => {
  return (
    <Styled.LayoutWrapper>
      <CurrentTime />
      <Styled.LayoutContentWrapper>
        <Styled.ContentHeader>
          <Styled.ContentHeaderTitle>주문관리</Styled.ContentHeaderTitle>
          <SearchBar />
        </Styled.ContentHeader>
        <Styled.ContentBox></Styled.ContentBox>
      </Styled.LayoutContentWrapper>
    </Styled.LayoutWrapper>
  );
};

export default AdminLayout;
