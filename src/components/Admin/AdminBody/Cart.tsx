import Styled from './styles';
import AdminLayout from './Admin';
import SearchBar from '../common/SearchBar';
import CartBody from '../Cart/CartBody';

const Cart = () => {
  return <AdminLayout>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>주문관리</Styled.ContentHeaderTitle>
        <SearchBar />
      </Styled.ContentHeader>
      <CartBody />
    </AdminLayout>;
}


export default Cart;