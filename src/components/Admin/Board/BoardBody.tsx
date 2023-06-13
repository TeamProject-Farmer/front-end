import Styled from './styles';
import BoardTabWrapper from './BoardTabWrapper';
import ButtonWrapper from '../common/InnerBox/ButtonWrapper';
import SmallButton from '../common/SmallButton';
import BoardBodyPart from './BoardBodyPart';

const BoardBody = () => {
  return (
    <>
      <Styled.Wrapper>
        <BoardTabWrapper />
        <Styled.BodyWrapper>
          <BoardBodyPart id='0' title='스칸답서스' like={4} buyer='mark' commentTitle='너무 좋아요' comment='앞으로도 잘 키울게요:)'/>
        </Styled.BodyWrapper>
        <ButtonWrapper>
          <SmallButton text="추가" />
          <SmallButton text="수정" />
          <SmallButton text="삭제" />
        </ButtonWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default BoardBody;
