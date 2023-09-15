import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getQnAList } from 'src/apis/shop/qna';
import checkIsMember from 'src/utils/shop/checkIsMember';
import { getCookie } from 'src/utils/cookie';
import OnOffButton from './OnOffButton';
import QnAModal from '@components/Common/Modal/QnAModal';
import QnAWrapper from '@components/Shop/DetailPage/ContentWrapper/QnA/QnAWrapper';
import MyQnA from './MyQnA';
import Pagination from '@components/Shop/Common/Pagination';
import { QnAStyled as Styled } from './styles';

const Inquiry = () => {
  const router = useRouter();
  const productId = Number(router.query?.detail) || 1;
  const token = getCookie('refreshToken');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [myButton, setMyButton] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const { routeToLogin } = checkIsMember();
  const openModal = () => {
    //토큰이 있는 경우만 문의하기 창이 열릴 수 있도록, 없으면 로그인 화면으로 이동 처리
    if (token != undefined ) setModalOpen(true);
    else routeToLogin();
    console.log(data);
    console.log(data.content.length);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const { data, isLoading } = useQuery({
    queryKey: ['QnAList', productId, currentIndex, modalOpen],
    queryFn: () => getQnAList(productId, currentIndex),
    keepPreviousData: true,
  });

  if (isLoading) return;
  else {
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
              <div>{data.totalElements}</div>
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
              {data?.content.length == 0 ? (
                <Styled.ErrorMessage>
                  해당 상품에 대한 문의가 존재하지 않습니다.
                </Styled.ErrorMessage>
              ) : (
                <QnAWrapper detailList={data.content} />
              )}
            </>
          )}
        </Styled.Container>
        <Pagination
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          totalIndex={data.totalPages}
        />
      </Styled.Wrapper>
    );
  }
};


export default Inquiry;
