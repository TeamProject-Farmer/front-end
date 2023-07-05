import styled from '@emotion/styled';
import theme from '@styles/theme';
import OrderBar from '@components/Shop/Common/OrderBar';
import SideAd from '@components/Shop/Common/SideAd';
import OptionBox from './OptionBox';
import DetailImage from './DetailImage';
import Review from './Review';

const ContentWrapper = () => {
  const tempOptions: string[] = [
    '상품',
    '리뷰 766',
    '상품문의 177',
    '배송/환불',
    '비슷한상품',
  ];
  return (
    <Styled.Wrapper>
      <OrderBar optionList={tempOptions} />
      <Styled.ContentWrapper>
        <SideAd />
        <Styled.ExceptOption>
          <DetailImage />
          <Review />
        </Styled.ExceptOption>
        <OptionBox />
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: ${theme.size.mainWidth};
    margin: 0 auto;
  `,
  ContentWrapper: styled.div`
    margin-top: 58px;
    display: flex;
  `,
  ExceptOption: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

export default ContentWrapper;
