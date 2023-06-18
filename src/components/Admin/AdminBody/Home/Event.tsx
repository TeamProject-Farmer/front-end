import { useState } from 'react';
import Styled from './styles';
import FooterButtonWrapper from '../../Common/FooterButtonWrapper';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import WarningModal from '@components/Admin/Common/Modal/WarningModal';
import ManageEvent from '@components/Admin/Common/Modal/ManageHome/ManageEvent';

const Event = () => {
  const [modalOpen, setModalOpen] = useState(0);

  function openModal() {
    setModalOpen(1);
  }
  function openModal2() {
    setModalOpen(2);
  }
  function closeModal() {
    setModalOpen(0);
  }

  return (
    <>
    {modalOpen === 2 ? (
        <ManageEvent
          id={0}
          modalClose={closeModal}
        />
      ) : null}
      {modalOpen === 1 ? (
        <WarningModal
          title="이벤트/기획전"
          content="이벤트/기획전 정보는"
          modalOpen={modalOpen}
          modalClose={closeModal}
        />
      ) : null}
      <Styled.EventWrapper>
        <Styled.EventBoxWrapper></Styled.EventBoxWrapper>
        <FooterButtonWrapper>
          <SmallButton text="추가" modalOpen={openModal2}/>
          <SmallButton text="수정" />
          <SmallButton text="삭제" modalOpen={openModal} />
        </FooterButtonWrapper>
      </Styled.EventWrapper>
    </>
  );
};

export default Event;
