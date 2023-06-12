import Styled from './styles';
import AdminLayout from './AdminLayout';


const SettingsLayout = () => {
  return (
    <AdminLayout>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>쿠폰 관리</Styled.ContentHeaderTitle>
      </Styled.ContentHeader>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>적립금 관리</Styled.ContentHeaderTitle>
      </Styled.ContentHeader>
      
    </AdminLayout>
  );
};

export default SettingsLayout;
