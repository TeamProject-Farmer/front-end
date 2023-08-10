import Styled from './styles';
import Icon from '../Icon';
import InquiryModal from './InquiryModal';
import ReviewModal from './ReviewModal';

interface Props {
  modalType: string;
  modalName: string;
  reviewItem?: string[];
  modalClose: () => void;
}
const MiniModal = (props: Props) => {
  const { modalType, modalName, reviewItem, modalClose } = props;
  

  const close = modalClose;


  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.HeaderTitle>
          {modalName}
          <Styled.CloseButton onClick={close}>
            {/* 아마 나중에 Icon 불러오는 부분 수정되면 바꿀 것 같음 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M18 1L1 18M1 1L18 18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Styled.CloseButton>
        </Styled.HeaderTitle>
      </Styled.Header>
      <Styled.ContentWrapper>
        {modalType == 'review' ? (
          <ReviewModal />
        ) : modalType == 'inquiry' ? (
          <InquiryModal />
        ) : (
          <></>
        )}

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
