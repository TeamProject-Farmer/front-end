import Styled from './styles';
// import CurrentTime from '../Common/CurrentTime';

const AdminLayout = props => {
  return (
    <Styled.LayoutWrapper>
      {/* <CurrentTime /> */}
      <Styled.LayoutContentWrapper>
        {props.children}
      </Styled.LayoutContentWrapper>
    </Styled.LayoutWrapper>
  );
};

export default AdminLayout;
