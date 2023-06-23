import { useEffect } from 'react';
import Styled from './styles';
import ChoiceItem from '../ChoiceItem';
import { modalPropsList } from '../../ModalType';

const BannerImage = (props: modalPropsList) => {
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
            <div>이미지 삽입</div>
            <Styled.CloseIcon onClick={close} />
          </Styled.Header>
          <Styled.Body>
            <ChoiceItem />
            <Styled.BodyButtonBox>
              <Styled.Button>불러오기</Styled.Button>
            </Styled.BodyButtonBox>
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

export default BannerImage;
