import { useEffect, useState } from 'react';
import InnerBody from '@components/Admin/Common/InnerBody';
import MemberInnerBox from './MemberInnerBox';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import WarningModal from '@components/Admin/Common/Modal/WarningModal';
import ManageMember from '@components/Admin/Common/Modal/ManageMember';
import { memberList, memberData } from 'src/apis/admin/member';

const MemberBody = () => {
  const [modalOpen, setModalOpen] = useState<number>(0);
  const [fieldName, setFieldName] = useState<string>('username');
  const [pageNum, setPageNumber] = useState<number>(0);
  const [listData, setListData] = useState<string>('');

  const openModal = () => {
    setModalOpen(1);
  };
  const openModal2 = () => {
    setModalOpen(2);
  };
  const closeModal = () => {
    setModalOpen(0);
  };
  const handleMemberList = async () => {
    try {
      const res = await memberList(fieldName);
      console.log('dataaaaaaaa');
      console.log(res.data.content);
      const component = res.data.content.map(i => {
        return (
          <MemberInnerBox
            key={i.id}
            id={i.id}
            nickname={i.nickname}
            email={i.email}
            phoneNum={i.ph}
            name={i.username}
            grade={i.grade}
            registerDate={'temp 2023-04-01'}
          />
        );
      });
      setListData(component);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleMemberList();
  }, [fieldName]);
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
              name="createdDate"
              text="등록일순"
              fieldName={fieldName}
              setState={setFieldName}
            />
            <SingleTab
              name="username"
              text="이름순"
              fieldName={fieldName}
              setState={setFieldName}
            />
            <SingleTab
              name="grade"
              text="회원등급순"
              fieldName={fieldName}
              setState={setFieldName}
            />
          </>
        }
        innerBoxProps={listData}
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
