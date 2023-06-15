import BoardInnerBox from './BoardInnerBox';
import InnerBody from '@components/Admin/Common/InnerBody';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
const BoardBody = () => {
  return (
    <>
      <InnerBody
        tabProps={
          <>
            <SingleTab text="Q&A" />
            <SingleTab text="review" />
          </>
        }
        innerBoxProps={
          <BoardInnerBox
            id="0"
            title="스칸답서스"
            like={4}
            buyer="mark"
            commentTitle="너무 좋아요"
            comment="앞으로도 잘 키울게요:)"
          />
        }
        footerButtonProps={
          <>
            <SmallButton text="추가" />
            <SmallButton text="수정" />
            <SmallButton text="삭제" />
          </>
        }
      />
    </>
  );
};

export default BoardBody;
