import Styled from './styles';
import { useState } from 'react';
import Star from './ReviewStar';

const ReviewModal = () => {
  let [inputCount, setInputCount] = useState(0);
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
  };
  const [hoveredStarIndex, setHoveredStarIndex] = useState(0);
  const [clickedStarIndex, setClickedStarIndex] = useState(0);
  const fillStarOfIndex = (num: number, event?: string): string => {
    if (event === 'enter' && hoveredStarIndex >= num) {
      return '#33B822';
    }
    if (event === 'leave' && clickedStarIndex >= num) {
      return '#33B822';
    }
    return '#E7ECE6';
  };
  // 최종 별점은 clickedStarIndex 이 데이터를 가져가시면 됩니다!
  return (
    <Styled.CommonWrapper>
      <Styled.ReviewMyOption>
        {/* 이 부분에 이미지 넣으면 될 것 같습니다. */}
        <Styled.MyOptionImg></Styled.MyOptionImg>
        <Styled.MyOptionListBox>
          {/* 이 부분에 원하시는 데이터 넣으면 될 것 같습니다. */}
          <span>피쉬본</span>
          <span>[수량]1개/ [옵션]화분 Black</span>
        </Styled.MyOptionListBox>
      </Styled.ReviewMyOption>
      <Styled.ReviewStarWrapper>
        <Styled.ReviewContentText>
          상품을사용해보셨나요?
        </Styled.ReviewContentText>
        <div>
          {[1, 2, 3, 4, 5].map(num => (
            <Styled.ReviewEachStar
              key={num}
              onMouseEnter={() => setHoveredStarIndex(num)}
              onMouseLeave={() => setHoveredStarIndex(0)}
              onClick={() => {
                setClickedStarIndex(num);
              }}
            >
              <Star
                key={num}
                fill={fillStarOfIndex(
                  num,
                  hoveredStarIndex === 0 ? 'leave' : 'enter',
                )}
              />
            </Styled.ReviewEachStar>
          ))}
        </div>
      </Styled.ReviewStarWrapper>
      <Styled.ReviewContentWrapper>
        <Styled.ReviewContentText>어떤 점이 좋았나요?</Styled.ReviewContentText>
        <Styled.TextBox>
          <textarea
            onChange={e => handleText(e)}
            placeholder="사용 후기를 작성하여 공유해주세요! (최소 10자 이상)"
            maxLength={5000}
          ></textarea>
          <div>{inputCount}/5,000</div>
        </Styled.TextBox>
        {/* 하단에 이미지 처리 부분 넣으시면 될 것 같습니다. */}
        <Styled.AddPhotoButtn>사진/동영상 첨부하기</Styled.AddPhotoButtn>
      </Styled.ReviewContentWrapper>
    </Styled.CommonWrapper>
  );
};

export default ReviewModal;
