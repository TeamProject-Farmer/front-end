import Styled from './styles';
import { DetailQnAProps } from 'src/types/shop/types';

const DetailQnA = (props: DetailQnAProps) => {
  const {
    qnaId,
    subject,
    detailClose,
    setDetailOpen,
    content,
    answer,
    qcreatedDate,
    acreatedDate,
  } = props;
  const close = detailClose;
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.HeaderTitle>
          {subject}
          <Styled.CloseButton onClick={close}>
            <Styled.CloseBtnIcon />
          </Styled.CloseButton>
        </Styled.HeaderTitle>
      </Styled.Header>
      <Styled.DetailContentWrapper>
        <div>
          <Styled.DetailTitle>
            <div>문의 유형</div>
            <div>:</div>
            <div>{subject}</div>
          </Styled.DetailTitle>
          <Styled.DetailContentBox>
            <Styled.DetailTitle>
              <div>질문</div>
              <div>{qcreatedDate?.slice(0, 10)}</div>
            </Styled.DetailTitle>
            <Styled.DetailContent>
              <div>Q</div>
              <div>{content}</div>
            </Styled.DetailContent>
          </Styled.DetailContentBox>
          {answer ? (
            <Styled.DetailContentBox>
              <Styled.DetailTitle>
                <div>파머의 답변</div>
                <div>{acreatedDate?.slice(0, 10)}</div>
              </Styled.DetailTitle>
              <Styled.DetailContent>
                <div>A</div>
                <div>{answer}</div>
              </Styled.DetailContent>
            </Styled.DetailContentBox>
          ) : (
            <Styled.DetailContentBox>
              <Styled.DetailTitle>
                <div>파머가 해당 내용을 확인 중입니다</div>
              </Styled.DetailTitle>
              <Styled.DetailContent>
                <div>A</div>
                <div>...</div>
              </Styled.DetailContent>
            </Styled.DetailContentBox>
          )}
        </div>
        <Styled.Footer>
          <Styled.CancelButton onClick={close}>닫기</Styled.CancelButton>
        </Styled.Footer>
      </Styled.DetailContentWrapper>
    </Styled.Wrapper>
  );
};

export default DetailQnA;
