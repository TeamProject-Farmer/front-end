import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    border-collapse: collapse;
  `,
  Title: styled.div`
    font-size: 20px;
  `,
  InnerMarginWrapper: styled.div`
    margin: -20px;
  `,
  DiscountedPrice: styled.div`
    width: 100%;
    height: 60px;
    background-color: ${theme.colors.green4};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding: 18px 20px;
  `,
  FlexWrapper: styled.div<{ agreement?: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: ${({ agreement }) => (agreement ? '160px' : '48px')};
  `,
  FlexColumnWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    ::before {
      content: '';
      position: absolute;
      display: 'block';
      background-color: #fff;
      width: 3px;
      height: 104px;
      top: 0;
      right: -114px;
    }
  `,
  InfoTitle: styled.div`
    font-size: 16px;
    width: 95px;
  `,
  InfoContent: styled.div`
    font-size: 16px;
    font-weight: 600;
  `,
  RedFont: styled.span`
    color: #ff0505;
  `,
  AgreementWrapper: styled.div`
    background-color: ${theme.colors.green4};
    padding: 27px 60px;
  `,
  InnerPaddingWrapper: styled.div<{ field: string }>`
    padding: ${({ field }) =>
      field === 'payment'
        ? '0 60px'
        : field === 'shippingMsg'
        ? '0 154px'
        : field === 'product'
        ? '29px 60px;'
        : '0 25px'};
    display: flex;
    flex-direction: column;
    gap: ${({ field }) => (field === 'agreement' ? '14px' : '19px')};
  `,
  PayWrapper: styled.div`
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  PayNow: styled.div`
    background-color: ${theme.colors.green1};
    border-radius: 5px;
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    width: 252px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default Styled;
