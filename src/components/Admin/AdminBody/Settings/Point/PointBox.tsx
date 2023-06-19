import Styled from '../Coupon/styles';

const PointBox = () => {
  return (
    <Styled.PointBodyWrapper>
      <Styled.PointRow>
        <Styled.PointTitle>적립기능 사용여부</Styled.PointTitle>
        <Styled.PointContext>
          <Styled.PointLabelWrapper>
            <label>
              <Styled.PointRadioButton type="radio"></Styled.PointRadioButton>
              사용함
            </label>
            <label>
              <Styled.PointRadioButton type="radio"></Styled.PointRadioButton>
              사용안함
            </label>
          </Styled.PointLabelWrapper>
        </Styled.PointContext>
      </Styled.PointRow>
      <Styled.PointRow>
        <Styled.PointTitle>적립금 적용방식</Styled.PointTitle>
        <Styled.PointContext>
          상품 전액의 <Styled.SmallBlank />%
        </Styled.PointContext>
      </Styled.PointRow>
      <Styled.PointRow>
        <Styled.PointTitle>적립금 유효기간</Styled.PointTitle>
        <Styled.PointContext>
          <Styled.LongBlank />~<Styled.LongBlank />
        </Styled.PointContext>
      </Styled.PointRow>
      <Styled.PointRow>
        <Styled.PointTitle>적립금 지급시점</Styled.PointTitle>
        <Styled.PointContext>
          배송 완료 후 <Styled.SmallBlank />일 이내
        </Styled.PointContext>
      </Styled.PointRow>
    </Styled.PointBodyWrapper>
  );
};

export default PointBox;
