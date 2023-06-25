import { useEffect, useState } from 'react';
import InnerBody from '@components/Admin/Common/InnerBody';
import MemberInnerBox from './MemberInnerBox';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import WarningModal from '@components/Admin/Common/Modal/WarningModal';
import ManageMember from '@components/Admin/Common/Modal/ManageMember';

const MemberBody = () => {
  const [modalOpen, setModalOpen] = useState<number>(0);
  const [fieldName, setFieldName] = useState<string>('username');


  const openModal = () => {
    setModalOpen(1);
  };
  const openModal2 = () => {
    setModalOpen(2);
  };
  const closeModal = () => {
    setModalOpen(0);
  };

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
      {modalOpen === 2 ? <ManageMember id={0} modalClose={closeModal} /> : null}
      <InnerBody
        tabProps={
          <>
            <SingleTab
              text="등록일순"
            />
            <SingleTab
              text="이름순"
            />
            <SingleTab
              text="회원등급순"
            />
          </>
        }
        innerBoxProps={<MemberInnerBox
          key={0}
          id={0}
          nickname={'asdf'}
          email={'asdf'}
          phoneNum={'asdf'}
          name={'asdf'}
          grade={'asdf'}
          registerDate={'temp 2023-04-01'}
        />}
        footerButtonProps={
          <>
            <SmallButton text="수정" modalOpen={openModal2} />
            <SmallButton text="삭제" modalOpen={openModal} />
          </>
        }
      />
    </>
  );
};

export default MemberBody;
