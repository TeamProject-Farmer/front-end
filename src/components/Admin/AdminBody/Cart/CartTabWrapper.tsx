import Styled from './styles';
import TabWrapper from '../../Common/InnerBody/Tab/TabWrapper';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';

const CartTabWrapper = () => {
  return (
    <TabWrapper>
      <SingleTab text="주문" />
      <SingleTab text="반품" />
      <SingleTab text="교환" />
      <SingleTab text="환불" />
    </TabWrapper>
  );
};

export default CartTabWrapper;
