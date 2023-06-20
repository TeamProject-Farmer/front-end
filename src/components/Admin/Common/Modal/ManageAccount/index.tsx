import { useEffect } from 'react';
import Styled from './styles';

interface PropsList {
  id: number;
  modalClose: () => void;
}
const ManageAccount = (props: PropsList) => {
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
            <div>계정관리</div>
            <Styled.CloseIcon onClick={close} />
          </Styled.Header>
          <Styled.Body>
            <Styled.BodyTitle>계정정보</Styled.BodyTitle>
            <Styled.BodyTable>
              <Styled.Row>
                <Styled.CellTitle>이름</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.NormalBlank type="text"></Styled.NormalBlank>
                </Styled.CellContent>
              </Styled.Row>
              <Styled.Row>
                <Styled.CellTitle>아이디</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.NormalBlank type="text"></Styled.NormalBlank>
                </Styled.CellContent>
              </Styled.Row>
              <Styled.Row>
                <Styled.CellTitle>비밀번호</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.NormalBlank type="text"></Styled.NormalBlank>
                </Styled.CellContent>
              </Styled.Row>
              <Styled.Row>
                <Styled.CellTitle>직책</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.NormalBlank type="text"></Styled.NormalBlank>
                </Styled.CellContent>
              </Styled.Row>
              <Styled.Row>
                <Styled.CellTitle>계정 등급</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.Select name="grade">
                    <Styled.Option value="super">슈퍼관리자</Styled.Option>
                    <Styled.Option value="lower">하위관리자</Styled.Option>
                  </Styled.Select>
                </Styled.CellContent>
              </Styled.Row>
            </Styled.BodyTable>
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

export default ManageAccount;
