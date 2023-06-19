import { useState } from 'react';
import InnerBody from '@components/Admin/Common/InnerBody';
import MemberInnerBox from './MemberInnerBox';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import WarningModal from '@components/Admin/Common/Modal/WarningModal';
import ManageMember from '@components/Admin/Common/Modal/ManageMember';

const MemberBody = () => {
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

  const TempList = [
    'Mark',
    'abcd1234@naver.com',
    '010-1111-XXXX',
    '홍길동',
    '일반',
    '2023-04-01',
  ];
  return (
    <>
      {modalOpen === 1 ? (
        <WarningModal
          title="회원"
          content="회원정보는"
          modalOpen={modalOpen}
          modalClose={closeModal}
        />
      ) : null}
      {modalOpen === 2 ? (
        <ManageMember
          id={0}
          modalClose={closeModal}
        />
      ) : null}
      <InnerBody
        tabProps={
          <>
            <SingleTab text="등록일순" />
            <SingleTab text="이름순" />
            <SingleTab text="회원등급순" />
          </>
        }
        innerBoxProps={
          <MemberInnerBox
            nickname={TempList[0]}
            email={TempList[1]}
            phoneNum={TempList[2]}
            name={TempList[3]}
            grade={TempList[4]}
            registerDate={TempList[5]}
          />
        }
        footerButtonProps={
          <>
            <SmallButton text="수정"  modalOpen={openModal2} />
            <SmallButton text="삭제" modalOpen={openModal} />
          </>
        }
      />
    </>
  );
};

export default MemberBody;
