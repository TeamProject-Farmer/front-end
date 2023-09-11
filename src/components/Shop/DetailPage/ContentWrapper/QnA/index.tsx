import styled from '@emotion/styled';
import theme from '@styles/theme';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getQnAList } from 'src/apis/shop/qna';
import { userToken, QnAProps, QnAList } from 'src/types/shop/types';
import OnOffButton from './OnOffButton';
import QnAModal from '@components/Common/Modal/QnAModal';
import QnAWrapper from '@components/Shop/DetailPage/ContentWrapper/QnA/QnAWrapper';
import MyQnA from './MyQnA';
import Pagination from '../Pagination';

const Inquiry = () => {
  const router = useRouter();
  const productId = Number(router.query?.detail) || 1;
  const token = useSelector(userToken);
  const [detailList, setDetailList] = useState<QnAProps[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [myButton, setMyButton] = useState<boolean>(false);
  const [totalIndex, setTotalIndex] = useState(1);
  const [totalElement, setTotalElement] = useState(1);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const openModal = () => {
    //토큰이 있는 경우만 문의하기 창이 열릴 수 있도록, 없으면 로그인 화면으로 이동 처리
    if (token != '') setModalOpen(true);
    else router.replace('/login');
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const { data, refetch } = useQuery({
    queryKey: ['QnAList'],
    queryFn: () => getQnAList(productId, currentIndex),
    onSuccess: data => {
      setDetailList(data.content);
      setTotalIndex(data.totalPages);
      setTotalElement(data.totalElements);
    },
    keepPreviousData: true,
  });

  useEffect(() => {
    refetch();
  }, [productId, currentIndex, modalOpen]);

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
          <MyQnA productId={productId} />
        ) : (
          <>
            {detailList.length == 0 ? (
              <Styled.ErrorMessage>
                해당 상품에 대한 문의가 존재하지 않습니다.
              </Styled.ErrorMessage>
            ) : (
              <QnAWrapper detailList={detailList} />
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
