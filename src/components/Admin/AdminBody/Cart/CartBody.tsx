import { useState } from 'react';
import InnerBody from '@components/Admin/Common/InnerBody';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import StatusBox from '@components/Admin/Common/InnerBody/InnerBox/StatusBox';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import WarningModal from '@components/Admin/Common/Modal/WarningModal';
import ManageCart from '@components/Admin/Common/Modal/ManageCart';

const CartBody = () => {
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
      {modalOpen === 2 ? <ManageCart id={0} modalClose={closeModal} /> : null}
      {modalOpen === 1 ? (
        <WarningModal
          title="주문정보"
          content="주문정보는"
          modalOpen={modalOpen}
          modalClose={closeModal}
        />
      ) : null}
      <InnerBody
        tabProps={
          <>
            <SingleTab text="주문" />
            <SingleTab text="반품" />
            <SingleTab text="교환" />
            <SingleTab text="환불" />
          </>
        }
        innerBoxProps={
          <StatusBox
            title="스칸답서스"
            first="2023.04.05"
            second="Mark"
            third="123123123"
            last="배송중"
            checkBox={true}
          />
        }
        footerButtonProps={
          <>
            <SmallButton text="추가" modalOpen={openModal2} />
            <SmallButton text="수정" />
            <SmallButton text="삭제" modalOpen={openModal} />
          </>
        }
      />
    </>
  );
};

export default CartBody;
