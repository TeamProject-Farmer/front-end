import { useEffect } from 'react';
import Styled from './styles';

interface PropsList {
  id: number;
  modalClose: () => void;
}
const Coupon = (props: PropsList) => {
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
            <div>쿠폰 관리</div>
            <Styled.CloseIcon onClick={close} />
          </Styled.Header>
          <Styled.Body>
            <Styled.Row>
              <Styled.UpperTitle>쿠폰명</Styled.UpperTitle>
              <Styled.NormalBlank type="text"></Styled.NormalBlank>
            </Styled.Row>
            <Styled.Row>
              <Styled.UpperTitle>쿠폰번호</Styled.UpperTitle>
              <Styled.NormalBlank type="text"></Styled.NormalBlank>
            </Styled.Row>
            <Styled.Row>
              <Styled.UpperTitle>혜택</Styled.UpperTitle>
              <Styled.NormalBlank type="text"></Styled.NormalBlank>
            </Styled.Row>
            <Styled.Row>
              <Styled.UpperTitle>사용기간</Styled.UpperTitle>
              <Styled.NormalBlank type="text"></Styled.NormalBlank>
            </Styled.Row>
            <Styled.Row>
              <Styled.UpperTitle>상태</Styled.UpperTitle>
              <Styled.Select name="state">
                <Styled.Option value="ing">사용중</Styled.Option>
                <Styled.Option value="yet">사용안함</Styled.Option>
              </Styled.Select>
            </Styled.Row>
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

export default Coupon;
