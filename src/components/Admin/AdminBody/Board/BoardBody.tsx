import { useState } from 'react';
import InnerBody from '@components/Admin/Common/InnerBody';
import BoardInnerBox from './BoardInnerBox';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import WarningModal from '@components/Admin/Common/Modal/WarningModal';
import QNA from '@components/Admin/Common/Modal/ManageBoard/QNA';

const BoardBody = () => {
  const [modalOpen, setModalOpen] = useState(0);
  
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
    {modalOpen === 2 ? <QNA id={0} modalClose={closeModal} /> : null}
      {modalOpen === 1 ? (
        <WarningModal
          title="게시글"
          content="게시글은"
          modalOpen={modalOpen}
          modalClose={closeModal}
        />
      ) : null}
      <InnerBody
        tabProps={
          <>
            <SingleTab text="Q&A" />
            <SingleTab text="review" />
          </>
        }
        innerBoxProps={
          <BoardInnerBox
            id={0}
            title="스칸답서스"
            like={4}
            buyer="mark"
            commentTitle="너무 좋아요"
            comment="앞으로도 잘 키울게요:)"
          />
        }
        footerButtonProps={
          <>
            <SmallButton text="추가" modalOpen={openModal2}/>
            <SmallButton text="수정" />
            <SmallButton text="삭제" modalOpen={openModal} />
          </>
        }
      />
    </>
  );
};

export default BoardBody;
