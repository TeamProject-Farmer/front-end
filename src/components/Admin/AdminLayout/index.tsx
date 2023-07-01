import styled from '@emotion/styled';
import Header from '../Common/Header';
import Home from '../Home';

interface PropsList {
  page: string;
}
const AdminLayout = (props: PropsList) => {
  const { page } = props;
  const pageComponents = {
    Home: <Home />,
  };

  return (
    <Styled.LayoutWrapper>
      <Header />
      <Styled.ContentWrapper>{pageComponents[page]}</Styled.ContentWrapper>
    </Styled.LayoutWrapper>
  );
};

const Styled = {
  LayoutWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 240px;
    height: 100vh;
    max-height: 100%;
    position: relative;
  `,
  ContentWrapper: styled.div`
    padding: 0 32px;
    overflow: auto;
    margin-top: 80px;
    height: 100%;
  `,
};
export default AdminLayout;
