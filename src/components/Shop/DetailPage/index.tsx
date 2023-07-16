import styled from '@emotion/styled';
import theme from '@styles/theme';
import Category from '../Common/Category';
import Panel from './Panel';
import PreviewPhoto from './PreviewPhoto';
import OrderBar from '@components/Shop/Common/OrderBar';
import ContentWrapper from './ContentWrapper';

const DetailPage = () => {
  const tempOptions: string[] = [
    '상품',
    '리뷰 766',
    '상품문의 177',
    '배송/환불',
    '비슷한상품',
  ];
  return (
    <Styled.Wrapper>
      <Category />
      <Panel />
      <PreviewPhoto />
      <OrderBar optionList={tempOptions} width={theme.size.shopDetailWrapper}/>
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
