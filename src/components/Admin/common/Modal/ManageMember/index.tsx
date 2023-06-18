import { useEffect } from 'react';
import Styled from './styles';
import TotalMember from './TotalMember';

interface PropsList {
  id: number;
  modalClose: () => void;
}
const ManageMember = (props: PropsList) => {
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
            <div>회원관리</div>
            <Styled.CloseIcon onClick={close} />
          </Styled.Header>
          <Styled.Body>
            <Styled.BodyTitle>회원정보</Styled.BodyTitle>
            <Styled.BodyTable>
              <Styled.Row>
                <Styled.CellTitle>이름</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.NormalBlank type="text"></Styled.NormalBlank>
                </Styled.CellContent>
              </Styled.Row>
              <Styled.Row>
                <Styled.CellTitle>전화번호</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.NormalBlank type="text"></Styled.NormalBlank>
                </Styled.CellContent>
              </Styled.Row>
              <Styled.Row>
                <Styled.CellTitle>이메일주소</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.NormalBlank type="text"></Styled.NormalBlank>
                </Styled.CellContent>
              </Styled.Row>
              <Styled.Row>
                <Styled.CellTitle>주소</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.Row>
                    <Styled.SmallBlank></Styled.SmallBlank>
                    <Styled.BlankBetween>-</Styled.BlankBetween>
                    <Styled.SmallBlank></Styled.SmallBlank>
                  </Styled.Row>
                  <Styled.NormalBlank type="text"></Styled.NormalBlank>
                </Styled.CellContent>
              </Styled.Row>
              <Styled.Row>
                <Styled.CellTitle>계정 등급</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.Select name="grade">
                    <Styled.Option value="super">일반</Styled.Option>
                    <Styled.Option value="lower">VIP</Styled.Option>
                  </Styled.Select>
                </Styled.CellContent>
              </Styled.Row>
            </Styled.BodyTable>
            <Styled.BodyTitle>회원통계</Styled.BodyTitle>
            <TotalMember />
          </Styled.Body>
          <Styled.Footer>
            <Styled.Button>저장</Styled.Button>
            <Styled.Button onClick={close}>취소</Styled.Button>
          </Styled.Footer>
        </Styled.ModalBox>
      </Styled.ModalWrapper>
    </>
  );
};

export default ManageMember;
