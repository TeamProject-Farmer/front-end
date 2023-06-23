import Styled from './styles';
import AdminLayout from './AdminLayout';
import SearchBar from '../Common/SearchBar';
import AccountBody from './Account/AccountBody';
import MemberBody from './Member/MemberBody';
import CartBody from './Cart/CartBody';
import BoardBody from './Board/BoardBody';
import ProductBody from './Product/ProductBody';

interface PropsList {
  cate: string | string[]; //<-- 왜 string[]인지 모르겠음
}
const CommonLayout = (props: PropsList) => {
  const { cate } = props;
  let pageComponent = null;
  let headerTitle: string;

  switch (cate) {
    case 'account':
      headerTitle = '계정관리';
      pageComponent = <AccountBody />;
      break;
    case 'member':
      headerTitle = '회원관리';
      pageComponent = <MemberBody />;
      break;
    case 'cart':
      headerTitle = '주문관리';
      pageComponent = <CartBody />;
      break;
    case 'product':
      headerTitle = '상품관리';
      pageComponent = <ProductBody />;
      break;
    case 'board':
      headerTitle = '게시판관리';
      pageComponent = <BoardBody />;
      break;
    default:
      // 예외 처리하기
      break;
  }
  return (
    <AdminLayout>
      {' '}
      {/* Header 부분, Tab, 검색바, 기타 등등 세부 사이즈 어떻게 할건지 논의 필요*/}
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>{headerTitle}</Styled.ContentHeaderTitle>
        <SearchBar />
      </Styled.ContentHeader>
      {pageComponent}
    </AdminLayout>
  );
};

export default CommonLayout;
