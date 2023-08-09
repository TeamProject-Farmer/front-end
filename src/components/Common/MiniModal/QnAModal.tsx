import { getQnAEdit } from 'src/apis/shop/qna';
import { useState } from 'react';
import Styled from './styles';

interface Props {
  modalName: string;
  reviewItem?: string[];
  modalClose: () => void;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const QnAModal = (props: Props) => {
  const { modalName, reviewItem, modalClose, setModalOpen } = props;
  const close = modalClose;
  const [isShowOptions, setShowOptions] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>('선택해주세요');
  const [isSecret, setIsSecret] = useState<boolean>(false);
  let [inputCount, setInputCount] = useState<number>(0);
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
  };
  const handleAddData = () => {
    setModalOpen(false);
    handleInquiryEdit();
  }
  const handleInquiryEdit = async () => {
    console.log('post api!!!!');
    
    try {
      // const response = await getQnAEdit({productId, 'productId', getText ,'GENERAL',now});
      const response = await getQnAEdit();
    } catch (err) {
      // if () {
      // }
    }
  };

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
        <Styled.CommonWrapper>
          <Styled.InquiryOptionWrapper>
            <span>문의유형</span>
            <Styled.InquiryOptionBox
              onClick={() => setShowOptions(prev => !prev)}
            >
              <Styled.InquiryLabel>{currentOption}</Styled.InquiryLabel>
              <Styled.InquiryOptions show={isShowOptions}>
                <Styled.InquiryOption
                  onClick={() => setCurrentOption('상품상세문의')}
                >
                  상품상세문의
                </Styled.InquiryOption>
                <Styled.InquiryOption
                  onClick={() => setCurrentOption('교환문의')}
                >
                  교환문의
                </Styled.InquiryOption>
                <Styled.InquiryOption
                  onClick={() => setCurrentOption('환불문의')}
                >
                  환불문의
                </Styled.InquiryOption>
                <Styled.InquiryOption
                  onClick={() => setCurrentOption('배송문의')}
                >
                  배송문의
                </Styled.InquiryOption>
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
            <Styled.SecretCheck onClick={() => setIsSecret(!isSecret)}>
              <input type="checkbox"></input>
              <span>비공개</span>
            </Styled.SecretCheck>
          </Styled.InquiryTextWrapper>
        </Styled.CommonWrapper>

        <Styled.Footer>
          <Styled.CancelButton onClick={close}>취소</Styled.CancelButton>
          {/* 등록은 창 닫히기 전 어떤 처리를 하는 부분을 추가하면 될 것 같습니다. */}
          <Styled.ConfirmButton
            onClick={()=>handleAddData()}
          >
            등록
          </Styled.ConfirmButton>
        </Styled.Footer>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default QnAModal;
