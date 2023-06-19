import { useEffect } from 'react';
import Styled from './styles';

interface PropsList {
  id: number;
  modalClose: () => void;
}
const ManageCart = (props: PropsList) => {
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
            <div>주문관리</div>
            <Styled.CloseIcon onClick={close} />
          </Styled.Header>
          <Styled.Body>
            <Styled.Row>
              <Styled.UpperTitle>상품명</Styled.UpperTitle>
              <Styled.UpperContent type="text"></Styled.UpperContent>
            </Styled.Row>
            <Styled.Row>
              <Styled.UpperTitle>구매날짜</Styled.UpperTitle>
              <Styled.UpperContent type="text"></Styled.UpperContent>
            </Styled.Row>
            <Styled.Row>
              <Styled.UpperTitle>구매번호</Styled.UpperTitle>
              <Styled.UpperContent type="text"></Styled.UpperContent>
            </Styled.Row>
            <Styled.BodyTitle>상세정보</Styled.BodyTitle>
            <Styled.BodyTable>
              <Styled.Row>
                <Styled.CellTitle>구매자명</Styled.CellTitle>
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
                <Styled.CellTitle>배송지</Styled.CellTitle>
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
                <Styled.CellTitle>결제상태</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.Select name="grade">
                    <Styled.Option value="super">결제대기</Styled.Option>
                    <Styled.Option value="lower">결제완료</Styled.Option>
                  </Styled.Select>
                </Styled.CellContent>
              </Styled.Row>
              <Styled.Row>
                <Styled.CellTitle>배송상태</Styled.CellTitle>
                <Styled.CellContent>
                  <Styled.Select name="grade">
                    <Styled.Option value="super">배송대기</Styled.Option>
                    <Styled.Option value="super">배송중</Styled.Option>
                    <Styled.Option value="lower">배송완료</Styled.Option>
                  </Styled.Select>
                </Styled.CellContent>
              </Styled.Row>
            </Styled.BodyTable>
            <Styled.ConfirmButtom>배송 현황 확인</Styled.ConfirmButtom>
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

export default ManageCart;
