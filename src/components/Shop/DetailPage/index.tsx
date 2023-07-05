import styled from '@emotion/styled';
import Panel from './Panel';
import Category from '../Common/Category';

import Footer from '@components/Home/Footer';

const DetailPage = () => {
  return (
    <Styled.Wrapper>
      <div>헤더 들어갈 예정</div>
      <Category />
      <Panel />

      <Footer />
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

export default DetailPage;
