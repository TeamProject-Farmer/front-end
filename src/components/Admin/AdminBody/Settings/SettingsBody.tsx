import Styled from '../styles';
import AdminLayout from '../AdminLayout';
import Coupon from './Coupon';
import Point from './Point';

const SettingsBody = () => {
  return (
    <AdminLayout>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>쿠폰 관리</Styled.ContentHeaderTitle>
      </Styled.ContentHeader>
      <Coupon />

      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>적립금 관리</Styled.ContentHeaderTitle>
      </Styled.ContentHeader>
      <Point />
    </AdminLayout>
  );
};

export default SettingsBody;
