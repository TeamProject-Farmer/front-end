import Styled from './styles';
import { useState } from 'react';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { ReviewModalProps } from 'src/types/shop/types';
import { postReview } from 'src/apis/mypage/review';
import { postReviewProps } from 'src/types/mypage/types';
import Star from './ReviewStar';

const ReviewModal = (props: ReviewModalProps) => {
  const {
    modalName,
    imgUrl,
    orderProductId,
    productName,
    productOption,
    productCount,
    modalClose,
    setModalOpen,
  } = props;
  const close = modalClose;

  let [inputCount, setInputCount] = useState(0);
  const [content, setContent] = useState<string>();
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
    setContent(e.target.value);
  };
  const [hoveredStarIndex, setHoveredStarIndex] = useState(0);
  const [clickedStarIndex, setClickedStarIndex] = useState(0); //최종별점
  const fillStarOfIndex = (num: number, event?: string): string => {
    if (event === 'enter' && hoveredStarIndex >= num) {
      return '#33B822';
    }
    if (event === 'leave' && clickedStarIndex >= num) {
      return '#33B822';
    }
    return '#E7ECE6';
  };
  //
  const [file, setFile] = useState();

  // const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  const onChange = (e: any) => {
    setFile(e.target.files[0]);
    console.log('image: ');
    console.log(e.target.files[0]);
  };

  const onSubmit = async () => {
    //orderProductId 부분은 api 수정 중이라 추후 수정 예정
    const response = await postReview({
      productId: orderProductId,
      fiveStarRating: clickedStarIndex.toString(),
      content: content,
      reviewImage: file,
    });
    close;
  };
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
          <Styled.ReviewMyOption>
            <Image
              src={imgUrl}
              alt="상품이미지"
              priority
              width="0"
              height="0"
              sizes="77px"
              style={{ width: '77px', height: '77px' }}
            ></Image>
            <Styled.MyOptionListBox>
              <span>{productName}</span>
              <span>
                [수량]{productCount}개/ [옵션]{productOption}
              </span>
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
            <Styled.ReviewContentText>
              어떤 점이 좋았나요?
            </Styled.ReviewContentText>
            <Styled.TextBox>
              <textarea
                onChange={e => handleText(e)}
                placeholder="사용 후기를 작성하여 공유해주세요! (최소 10자 이상)"
                maxLength={5000}
              ></textarea>
              <div>{inputCount}/5,000</div>
            </Styled.TextBox>
            <Styled.AddPhotoButtn>사진/동영상 첨부하기</Styled.AddPhotoButtn>
            <form>
              <input type="file" multiple onChange={onChange} />
              {/* <input type="submit" value="upload" /> */}
            </form>
          </Styled.ReviewContentWrapper>
        </Styled.CommonWrapper>
        <Styled.Footer>
          <Styled.CancelButton onClick={close}>취소</Styled.CancelButton>
          <Styled.ConfirmButton onClick={() => onSubmit()}>
            등록
          </Styled.ConfirmButton>
        </Styled.Footer>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default ReviewModal;
