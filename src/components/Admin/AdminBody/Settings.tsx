import Styled from './styles';
import AdminLayout from './Admin';
import Coupon from './Settings/Coupon';
import Point from './Settings/Point';

const Settings = () => {
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

export default Settings;
