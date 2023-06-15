import Styled from './styles';
import AdminLayout from './Admin';
import SearchBar from '../Common/SearchBar';
import AccountBody from './Account/AccountBody';
import Member from './Member/MemberWrapper'; //member 대대적으로 손보기
import CartBody from './Cart/CartBody';
import BoardBody from './Board/BoardBody';

interface PropsList {
  cate: string | string[]; //<-- 왜 string[]인지 모르겠음
}
const CommonLayout = (props: PropsList) => {
  const { cate } = props;
  let pageComponent = null;
  let headerTitle: string;

  if (cate == 'account') {
    headerTitle = '계정관리';
    pageComponent = <AccountBody />;
  } else if (cate === 'member') {
    headerTitle = '회원관리';
    pageComponent = <Member />;
  } else if (cate == 'cart') {
    headerTitle = '주문관리';
    pageComponent = <CartBody />;
  } else if (cate == 'product') {
    headerTitle = '계정관리'; //<-- 나중에 product로 변경 예정
    pageComponent = <Member />;
  } else if (cate == 'board') {
    headerTitle = '게시판관리';
    pageComponent = <BoardBody />;
  } else {
    //예외처리하기
  }
  return (
    <AdminLayout>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>{headerTitle}</Styled.ContentHeaderTitle>
        <SearchBar />
      </Styled.ContentHeader>
      {pageComponent}
    </AdminLayout>
  );
};

export default CommonLayout;
