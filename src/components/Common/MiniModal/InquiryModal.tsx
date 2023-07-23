import Styled from './styles';
import { useState } from 'react';

const InquiryModal = () => {
  const [isShowOptions, setShowOptions] = useState(false);
  const [currentOption, setCurrentOption] = useState('선택해주세요');
  let [inputCount, setInputCount] = useState(0);
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
  };
  return (
    <Styled.CommonWrapper>
      <Styled.InquiryOptionWrapper>
        <span>문의유형</span>
        <Styled.InquiryOptionBox onClick={() => setShowOptions(prev => !prev)}>
          <Styled.InquiryLabel>{currentOption}</Styled.InquiryLabel>
          <Styled.InquiryOptions show={isShowOptions}>
            <Styled.InquiryOption onClick={() => setCurrentOption('배송')}>
              배송
            </Styled.InquiryOption>
            <Styled.InquiryOption onClick={() => setCurrentOption('재입고')}>
              재입고
            </Styled.InquiryOption>
            <Styled.InquiryOption
              onClick={() => setCurrentOption('상품상세문의')}
            >
              상품상세문의
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
        <Styled.SecretCheck>
          <input type="checkbox"></input>
          <span>비공개</span>
        </Styled.SecretCheck>
      </Styled.InquiryTextWrapper>
    </Styled.CommonWrapper>
  );
};

export default InquiryModal;
