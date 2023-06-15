import Styled from './styles';
import FooterButtonWrapper from '@components/Admin/Common/FooterButtonWrapper';
import SmallButton from '@components/Admin/Common/FooterButtonWrapper/SmallButton';
import CouponBox from './CouponBox';

const Coupon = () => {
  return (
    <Styled.CouponWrapper>
      <CouponBox />
      <FooterButtonWrapper>
        <SmallButton text="추가" />
        <SmallButton text="수정" />
        <SmallButton text="삭제" />
      </FooterButtonWrapper>
    </Styled.CouponWrapper>
  );
};

export default Coupon;
