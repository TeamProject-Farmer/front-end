import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    width: 280px;
    border: 1px solid #000;
  `,
  ImgBox: styled.div`
    position: relative;
    height: 271px;
    background-color: ${theme.colors.lightGray};
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.5px;
    padding: 13px;
  `,
  Title: styled.p`
    font-size: 16px;
  `,
  PriceBox: styled.div`
    display: flex;
    gap: 10px;
  `,
  Discount: styled.p`
    color: #33b822;
    font-size: 16px;
    font-weight: 700;
  `,
  Price: styled.p`
    font-size: 16px;
    font-weight: 600;
  `,
  ReviewBox: styled.div`
    display: flex;
    gap: 10px;
  `,
  Star: styled.p`
    display: flex;
    align-items: center;
    gap: 4.8px;
    font-size: 12px;
    font-weight: 600;
  `,
  Review: styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #ababab;
  `,
  EventBox: styled.div`
    display: flex;
    gap: 5px;
    margin-top: 3px;
  `,
  SpecialPrice: styled.p`
    background-color: #62c655;
    border-radius: 4px;
    padding: 3px 5px;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  FreeShipping: styled.p`
    background-color: ${theme.colors.green4};
    border-radius: 4px;
    padding: 3px 5px;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default Styled;
