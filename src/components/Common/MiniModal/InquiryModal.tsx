import Styled from './styles';
import { useState } from 'react';
import { getQnAEdit } from 'src/apis/shop/qna';
import { useSelector } from 'react-redux';
import { idSelector } from 'src/types/shop/types';

const InquiryModal = () => {
  //이 페이지는 삭제 예정입니다!
  let now = new Date().toString;
  const productId = useSelector(idSelector);
  const [isShowOptions, setShowOptions] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>('선택해주세요');
  const [isSecret, setIsSecret] = useState<boolean>(false);
  let [inputCount, setInputCount] = useState<number>(0);
  const [getText, setGetText] = useState<string>('');
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGetText(e.target.value)
    setInputCount(e.target.value.length);
  };
  return (
    <Styled.CommonWrapper>
      <Styled.InquiryOptionWrapper>
        <span>문의유형</span>
        <Styled.InquiryOptionBox onClick={() => setShowOptions(prev => !prev)}>
          <Styled.InquiryLabel>{currentOption}</Styled.InquiryLabel>
          <Styled.InquiryOptions show={isShowOptions}>
            <Styled.InquiryOption onClick={() => setCurrentOption('상품상세문의')}>
            상품상세문의
            </Styled.InquiryOption>
            <Styled.InquiryOption onClick={() => setCurrentOption('교환문의')}>
            교환문의
            </Styled.InquiryOption>
            <Styled.InquiryOption onClick={() => setCurrentOption('환불문의')}>
              환불문의
            </Styled.InquiryOption>
            <Styled.InquiryOption onClick={() => setCurrentOption('배송문의')}>
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
        <Styled.SecretCheck onClick={()=> setIsSecret(!isSecret)} isSecret={isSecret}>
          <input type="checkbox"></input>
          <span>비공개</span>
        </Styled.SecretCheck>
      </Styled.InquiryTextWrapper>
    </Styled.CommonWrapper>
  );
};

export default InquiryModal;
