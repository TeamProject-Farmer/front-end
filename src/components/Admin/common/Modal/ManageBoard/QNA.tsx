import { useEffect } from 'react';
import Styled from './styles';

interface PropsList {
  id: number;
  modalClose: () => void;
}
const QNA = (props: PropsList) => {
  const { id, modalClose } = props;
  const close = modalClose;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <>
      <Styled.ModalWrapper top={window.scrollY}>
        <Styled.ModalBox>
          <Styled.Header>
            <div>Q&A 게시글 관리</div>
            <Styled.CloseIcon onClick={close} />
          </Styled.Header>
          <Styled.Body>
            <Styled.Row>
              <Styled.UpperTitle>상품명</Styled.UpperTitle>
              <Styled.NormalBlank type="text"></Styled.NormalBlank>
            </Styled.Row>
            <Styled.Row>
              <Styled.UpperTitle>구매날짜</Styled.UpperTitle>
              <Styled.NormalBlank type="text"></Styled.NormalBlank>
            </Styled.Row>
            <Styled.Row>
              <Styled.UpperTitle>구매번호</Styled.UpperTitle>
              <Styled.NormalBlank type="text"></Styled.NormalBlank>
            </Styled.Row>
            <Styled.BodyTitle>게시글 내용</Styled.BodyTitle>
            <Styled.TextBoxWrapper>
              <Styled.TextBox type="text"></Styled.TextBox>
            </Styled.TextBoxWrapper>
            <Styled.BodyTitle>게시글 댓글</Styled.BodyTitle>
            <Styled.TextBoxWrapper>
              <Styled.TextBox type="text"></Styled.TextBox>
            </Styled.TextBoxWrapper>
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

export default QNA;
