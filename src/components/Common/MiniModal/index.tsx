import Styled from './styles';
import { useState } from 'react';
import Icon from '../Icon';
interface Props {
  modalType: string;
  modalName: string;
  reviewItem?: string[];
  modalClose: () => void;
}
const MiniModal = (props: Props) => {
  const { modalType, modalName, reviewItem, modalClose } = props;
  let [inputCount, setInputCount] = useState(0);
  const [isShowOptions, setShowOptions] = useState(false);
  const [currentOption, setCurrentOption] = useState('선택해주세요');
  const close = modalClose;
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
  };

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.HeaderTitle>
          {modalName}
          <Styled.CloseButton>
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
          <></>
        ) : modalType == 'inquiry' ? (
          <Styled.InquiryWrapper>
            <Styled.InquiryOptionWrapper>
              <span>문의유형</span>
              <Styled.InquiryOptionBox
                onClick={() => setShowOptions(prev => !prev)}
              >
                <Styled.InquiryLabel>{currentOption}</Styled.InquiryLabel>
                <Styled.InquiryOptions show={isShowOptions}>
                  <Styled.InquiryOption onClick={()=>setCurrentOption('배송')}>배송</Styled.InquiryOption>
                  <Styled.InquiryOption onClick={()=>setCurrentOption('재입고')}>재입고</Styled.InquiryOption>
                  <Styled.InquiryOption onClick={()=>setCurrentOption('상품상세문의')}>상품상세문의</Styled.InquiryOption>
                </Styled.InquiryOptions>
              </Styled.InquiryOptionBox>
            </Styled.InquiryOptionWrapper>
            <Styled.InquiryTextWrapper>
              <Styled.TextBox>
                <textarea
                  onChange={e => handleText(e)}
                  placeholder="문의하실 내용을 입력하세요."
                  maxLength={1000}
                ></textarea>
                <div>{inputCount}/1,000</div>
              </Styled.TextBox>
              <Styled.SecretCheck>
                <input type="checkbox"></input>
                <span>비공개</span>
              </Styled.SecretCheck>
            </Styled.InquiryTextWrapper>
          </Styled.InquiryWrapper>
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
