import styled from '@emotion/styled';
import theme from '@styles/theme';
import OrderBar from '@components/Shop/Common/OrderBar';
import SideAd from '@components/Shop/Common/SideAd';
import OptionBox from './OptionBox';
import DetailImage from './DetailImage';
import Review from './Review';
import Inquiry from './Inquiry';
import Notice from './Notice';
import SimilarProducts from './SimilarProducts';

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
          <Inquiry />
          <Notice />
          <SimilarProducts />
          <Styled.BackButton>뒤로가기</Styled.BackButton>
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
    height: 5315px;
  `,
  ContentWrapper: styled.div`
    margin-top: 58px;
    display: flex;
    margin-bottom: 187px;
  `,
  ExceptOption: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  BackButton: styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
    border-radius: 5px;
    background-color: ${theme.colors.green1};
    position: absolute;
    right: 100px;
    bottom: 0;
    width: 142px;
    height: 60px;
    color: ${theme.colors.white};
    text-align: center;
    font-size: 25px;
    font-weight: 700;
  `,
};

export default ContentWrapper;
