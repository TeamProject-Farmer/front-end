import { useState } from 'react';
import Styled from './styles';
import FooterButtonWrapper from '@components/Admin/Common/FooterButtonWrapper';
import SmallButton from '@components/Admin/Common/FooterButtonWrapper/SmallButton';
import CouponBox from './CouponBox';
import WarningModal from '@components/Admin/Common/Modal/WarningModal';
import ManageCoupon from '@components/Admin/Common/Modal/ManageSettings/Coupon';

const Coupon = () => {
  const [modalOpen, setModalOpen] = useState(0);

  const openModal = () => {
    setModalOpen(1);
  };
  const openModal2 = () => {
    setModalOpen(2);
  };
  const closeModal = () => {
    setModalOpen(0);
  }
  return (
    <>
    
      {modalOpen === 2 ? <ManageCoupon id={0} modalClose={closeModal} /> : null}
      {modalOpen === 1 ? (
        <WarningModal
          title="쿠폰"
          content="쿠폰은"
          modalOpen={modalOpen}
          modalClose={closeModal}
        />
      ) : null}
      <Styled.CouponWrapper>
        <CouponBox />
        <FooterButtonWrapper>
          <SmallButton text="추가" modalOpen={openModal2}/>
          <SmallButton text="수정" />
          <SmallButton text="삭제" modalOpen={openModal} />
        </FooterButtonWrapper>
      </Styled.CouponWrapper>
    </>
  );
};

export default Coupon;
