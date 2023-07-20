import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  StarRateWrap: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    .star_icon {
      display: inline-flex;
      margin-right: 2px;
      margin-left: 1px;
    }
  `,
  EachWrapper: styled.div`
    display: flex;
    gap: 9px;
    align-items: center;
  `,
  LineGauge: styled.div`
    width: 178px;
    height: 5px;
    border-radius: 4px;
    background-color: #c6c6c6;
    position: relative;
  `,
  InnerGauge: styled.div<{ total: number; num: number }>`
    width: ${props => (props.num / props.total) * 178}px;
    height: 5px;
    border-radius: 4px;
    background-color: #47ac3a;
    position: absolute;
    left: 0;
  `,
  StarText: styled.div`
    color: #000;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    
  `,
};

export default Styled;
