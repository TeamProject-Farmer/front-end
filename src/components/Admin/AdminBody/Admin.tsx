import Styled from './styles';
import CurrentTime from '../common/CurrentTime';

const AdminLayout = props => {
  return (
    <Styled.LayoutWrapper>
      <CurrentTime />
      <Styled.LayoutContentWrapper>
        {props.children}
      </Styled.LayoutContentWrapper>
    </Styled.LayoutWrapper>
  );
};

export default AdminLayout;
