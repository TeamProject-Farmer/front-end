import Styled from '../styles';
import ButtonWrapper from '@components/Admin/common/InnerBox/ButtonWrapper';
import SmallButton from '@components/Admin/common/SmallButton';
import CouponBox from './CouponBox';

const Coupon = () => {
  return (
    <Styled.CouponWrapper>
      <CouponBox />
      <ButtonWrapper>
        <SmallButton text="추가" />
        <SmallButton text="수정" />
        <SmallButton text="삭제" />
      </ButtonWrapper>
    </Styled.CouponWrapper>
  );
};

export default Coupon;
