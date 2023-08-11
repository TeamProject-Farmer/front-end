import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { idSelector } from 'src/types/shop/types';
import { getQnAList } from 'src/apis/shop/qna';
import OnOffButton from './OnOffButton';
import QnAModal from '@components/Common/MiniModal/QnAModal';
import QnAWrapper from '@components/Shop/Common/ProductWrapper/QnAWrapper';
import MyQnA from './MyQnA';
import Pagination from './Pagination';
const Inquiry = () => {
  const productId = useSelector(idSelector);
  const [detailList, setDetailList] = useState([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [myButton, setMyButton] = useState<boolean>(false);
  const [totalIndex, setTotalIndex] = useState(1);
  const [totalElement, setTotalElement] = useState(1);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleQnAList = async () => {
    const response = await getQnAList(productId, currentIndex);
    setDetailList(response.content);
    setTotalIndex(response.totalPages)
    setTotalElement(response.totalElements)

    // "message": "토큰을 다시 확인해주세요",
    // 로그인이 안돼 토큰값이 없어서 생기는 에러가 뜨면 로그인이나 회원가입을 하게 분기처리 해주면 될 것 같습니다.
  };
  

  useEffect(() => {
    handleQnAList();
  }, [productId, currentIndex, modalOpen]);
  console.log('inquiryPage productId: ' + productId);
  console.log('inquiryPage detailList');
  console.log(detailList);
  return (
    <Styled.Wrapper>
      <Styled.Container>
        {modalOpen === true ? (
          <QnAModal
            modalName="문의하기"
            modalClose={closeModal}
            setModalOpen={setModalOpen}
          />
        ) : null}
        <Styled.Title>
          <div>
            <div>문의</div>
            <div>{totalElement}</div>
          </div>
          <Styled.MyInQuiry>
            <span>내 문의글 보기</span>
            <OnOffButton setMyButton={setMyButton} myButton={myButton} />
            <Styled.OpenModalButton onClick={openModal}>
              문의하기
            </Styled.OpenModalButton>
          </Styled.MyInQuiry>
        </Styled.Title>
        {myButton ? (
          <MyQnA />
        ) : (
          <>
            {detailList.length == 0 ? (
              <Styled.ErrorMessage>
                해당 상품에 대한 문의가 존재하지 않습니다.
              </Styled.ErrorMessage>
            ) : (
              <QnAWrapper
                detailList={detailList}
              />
            )}
          </>
        )}
      </Styled.Container>
      <Pagination
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        totalIndex={totalIndex}
      />
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    width: ${theme.size.shopDetailWidth};
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
  `,
  Container: styled.div`
    border-bottom: 1px solid ${theme.colors.green1};
    margin-bottom: 33px;
  `,
  Title: styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      align-items: center;
    }
    & > div:first-child > div:last-child {
      color: #47ac3a;
      margin-left: 6px;
    }
  `,
  MyInQuiry: styled.div`
    & > span {
      font-size: 16px;
      font-weight: 500;
      color: ${theme.colors.pointGreen};
      margin-right: 10px;
    }
  `,
  OpenModalButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
    width: 95px;
    height: 32px;
    border-radius: 5px;
    background-color: ${theme.colors.pointGreen};
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  `,
  ErrorMessage: styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 70px;
    font-size: 25px;
    font-weight: 600;
    color: ${theme.colors.gray};
  `,
};
export default Inquiry;
