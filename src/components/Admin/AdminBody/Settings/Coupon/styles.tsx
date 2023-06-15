import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Option from '@assets/images/option.svg';

const Styled = {
  //coupon
  CouponWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  CounponBodyWrapper: styled.div`
    width: 100%;
    height: 300px;
    background-color: #fbfbfb;
  `,

  //point
  PointWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  PointBodyWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;

    border-left: 1px solid #ababab;
    border-top: 1px solid #ababab;
  `,
  PointRow: styled.div`
    display: flex;
    width: 100%;
    height: 100px;
  `,
  PointTitle: styled.div`
    display: flex;
    width: 30%;
    align-items: center;
    padding: 0 25px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;

    border-right: 1px solid #ababab;
    border-bottom: 1px solid #ababab;
  `,
  PointContext: styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 20px 15px;

    border-right: 1px solid #ababab;
    border-bottom: 1px solid #ababab;
  `,
  PointLabelWrapper: styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  `,
  PointRadioLabel: styled.label``,
  PointRadioButton: styled.input`
    margin-right: 5px;
  `,
  SmallBlank: styled.input`
    width: 81px;
    height: 28px;
    margin: 0 13px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,
  LongBlank: styled.input`
    width: 150px;
    height: 28px;
    margin: 0 13px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,
};

export default Styled;
