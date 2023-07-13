import styled from '@emotion/styled';
import Category from '../Common/Category';
import Panel from './Panel';
import PreviewPhoto from './PreviewPhoto';
import ContentWrapper from './ContentWrapper';

const DetailPage = () => {
  return (
    <Styled.Wrapper>
      <Category />
      <Panel />
      <PreviewPhoto />
      <ContentWrapper />
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
  `,
};

export default DetailPage;
