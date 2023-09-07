import Styled from './styles';
import Icon from '../Icon';
import { Children } from 'react';

interface Props {
  modalType: string;
  modalName: string;
  reviewItem?: string[];
  modalClose: () => void;
}
const MiniModal = (props: Props) => {
  //이 부분 코드 새로 수정해서 추후 사용할 것 같습니다.
  const { modalType, modalName, reviewItem, modalClose } = props;
  const close = modalClose;

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.HeaderTitle>
          {modalName}
          <Styled.CloseButton onClick={close}>
            <Styled.CloseBtnIcon />
          </Styled.CloseButton>
        </Styled.HeaderTitle>
      </Styled.Header>
      <Styled.ContentWrapper>
        {Children}
        <Styled.Footer>
          <Styled.CancelButton onClick={close}>취소</Styled.CancelButton>
          {/* 등록은 창 닫히기 전 어떤 처리를 하는 부분을 추가하면 될 것 같습니다. */}
          <Styled.ConfirmButton onClick={close}>등록</Styled.ConfirmButton>
        </Styled.Footer>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default MiniModal;
