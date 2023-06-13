import Styled from './styles';
import TabWrapper from '../common/InnerBox/TabWrapper';
import SingleTab from '../common/InnerBox/SingleTab';

const CartTabWrapper = () => {
  return <TabWrapper><SingleTab text='주문'/><SingleTab text='반품'/><SingleTab text='교환'/><SingleTab text='환불'/></TabWrapper>;
}

export default CartTabWrapper;