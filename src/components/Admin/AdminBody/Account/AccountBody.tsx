import { useState } from 'react';
import InnerBody from '@components/Admin/Common/InnerBody';
import AccountInnerBox from './AccountInnerBox';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import ManageAccount from '@components/Admin/Common/Modal/ManageAccount';


const AccountBody = () => {
  const [modalOpen, setModalOpen] = useState<number>(0);

  const openModal = () => {
    setModalOpen(2);
  };
  const closeModal = () => {
    setModalOpen(0);
  };

  return (
    <>
      {modalOpen === 2 ? (
        <ManageAccount id={1} modalClose={closeModal} />
      ) : null}
      <InnerBody
        tabProps={
          <>
            <SingleTab text="등록일순" />
            <SingleTab text="이름순" />
          </>
        }
        innerBoxProps={
          <AccountInnerBox
            nickname="Sarah"
            manager="슈퍼관리자"
            registerDate="2023-04-02"
            role="쇼핑몰 관리자"
          ></AccountInnerBox>
        }
        footerButtonProps={
          <>
            <SmallButton text="추가" modalOpen={openModal} />
            <SmallButton text="수정" />
          </>
        }
      />
    </>
  );
};

export default AccountBody;
