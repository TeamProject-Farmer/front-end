import { useEffect } from 'react';
import Styled from './styles';
import {warningPropsList} from '../ModalType'

const WarningModal = (props: warningPropsList) => {
  const { title, content, modalOpen, modalClose } = props;
  // const open = modalOpen;
  const close = modalClose;


  useEffect(() => {
    document.body.style.overflow = "hidden";
    return() => {document.body.style.overflow = "unset";};
  }, [])
  return (
    <>
      <Styled.ModalWrapper top={window.scrollY}>
        <Styled.ModalBox>
          <Styled.Header>
            <div>{title}삭제</div>
            <Styled.CloseIcon onClick={close} />
          </Styled.Header>
          <Styled.Body>
            <Styled.Row>
              <Styled.Warning />
              <Styled.Col>
                <div>주의!</div>
                <div>
                  선택된 {content} 완전히 삭제되며, 다시 복구할 수 없습니다.
                </div>
              </Styled.Col>
            </Styled.Row>
            <Styled.Text>계속 진행하시겠습니까?</Styled.Text>
          </Styled.Body>
          <Styled.Footer>
            <Styled.Button>확인</Styled.Button>
            <Styled.Button onClick={close}>취소</Styled.Button>
          </Styled.Footer>
        </Styled.ModalBox>
      </Styled.ModalWrapper>
    </>
  );
};

export default WarningModal;
