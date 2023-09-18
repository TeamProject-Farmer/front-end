import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getQnAEdit } from 'src/apis/shop/qna';
import { secretQuestion, ModalProps } from 'src/types/shop/types';
import Styled from './styles';

const QnAModal = (props: ModalProps) => {
  const { modalName, modalClose, setModalOpen } = props;
  const router = useRouter();
  const tempProductId = Number(router.query?.detail) || 1;
  const close = modalClose;
  const [isShowOptions, setShowOptions] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>('선택해주세요');
  const [isSecret, setIsSecret] = useState<boolean>(false);
  const [secretQuestion, setSecretQuestion] =
    useState<secretQuestion>('GENERAL');
  const [inputCount, setInputCount] = useState<number>(0);
  const [content, setContent] = useState<string>();
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
    setContent(e.target.value);
  };
  const handleAddData = () => {
    setModalOpen(false);
    handleInquiryEdit();
  };

  const handleInquiryEdit = async () => {
    const response = await getQnAEdit({
      productId: tempProductId.toString(),
      currentOption,
      content,
      secretQuestion,
      qcreatedDateTime: new Date().toString(),
    });
  };
  useEffect(() => {
    isSecret ? setSecretQuestion('SECRET') : setSecretQuestion('GENERAL');
  }, [isSecret]);
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.HeaderTitle>
          {modalName}
          <Styled.CloseButton onClick={close}>
            <Styled.CloseBtnIcon />
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
              <div>
                {inputCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                /1,000
              </div>
            </Styled.TextBox>
            <Styled.SecretCheck
              onClick={() => setIsSecret(!isSecret)}
              isSecret={isSecret}
            >
              <input type="checkbox"></input>
              <span>비공개</span>
            </Styled.SecretCheck>
          </Styled.InquiryTextWrapper>
        </Styled.CommonWrapper>
        <Styled.Footer>
          <Styled.CancelButton onClick={close}>취소</Styled.CancelButton>
          <Styled.ConfirmButton onClick={() => handleAddData()}>
            등록
          </Styled.ConfirmButton>
        </Styled.Footer>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default QnAModal;
