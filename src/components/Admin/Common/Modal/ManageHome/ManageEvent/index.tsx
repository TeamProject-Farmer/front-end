import { useEffect } from 'react';
import Image from 'next/image';
import Styled from './styles';
import ChoiceItem from '../ChoiceItem';
import {modalPropsList} from  '../../ModalType';

const ManageEvent = (props: modalPropsList) => {
  const { id, modalClose } = props;
  const close = modalClose;

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, []);

  return (
    <>
      <Styled.ModalWrapper top={window.scrollY}>
        <Styled.ModalBox>
          <Styled.Header>
            <div>이벤트/기획전 관리</div>
            <Styled.CloseIcon onClick={close} />
          </Styled.Header>
          <Styled.Body>
            <Styled.Row>
              <Styled.ImageWrapper>
                <Styled.ImageButton>
                  <Styled.ImageIcon />
                </Styled.ImageButton>
                <Styled.ImportButton>불러오기</Styled.ImportButton>
              </Styled.ImageWrapper>
              <Styled.UpperWrapper>
                <Styled.UpperBox>
                  <Styled.UpperTitle>제목</Styled.UpperTitle>
                  <Styled.LongInput type="text"></Styled.LongInput>
                </Styled.UpperBox>
                <Styled.UpperBox>
                  <Styled.UpperTitle>기간</Styled.UpperTitle>
                  <Styled.SmallInput type="text"></Styled.SmallInput>
                  <Styled.BetweenInput>~</Styled.BetweenInput>
                  <Styled.SmallInput type="text"></Styled.SmallInput>
                </Styled.UpperBox>
              </Styled.UpperWrapper>
            </Styled.Row>
            <Styled.BodyTitle>페이지 편집</Styled.BodyTitle>
            <Image
            src='/assets/images/admin/postEditor.png'
            alt="editorImage"
            width={950}
            height={540}
            style={{ objectFit: 'contain' }}
          />
            <Styled.BodyTitle>상품등록</Styled.BodyTitle>
            <ChoiceItem />
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

export default ManageEvent;
