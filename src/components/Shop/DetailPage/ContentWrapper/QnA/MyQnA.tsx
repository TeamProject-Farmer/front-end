import styled from '@emotion/styled';
import theme from '@styles/theme';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getMyQnA } from 'src/apis/shop/qna';
import QnAWrapper from '@components/Shop/DetailPage/ContentWrapper/QnA/QnAWrapper';

const MyQnA = ({ productId }: { productId: number }) => {
  const [myDetailList, setMyDetailList] = useState([]);
  const router = useRouter();

  const handleQnAList = async () => {
    try {
      const mine = await getMyQnA(productId);
      setMyDetailList(mine.content);
    } catch (err) {
      alert('로그인 후 이용 가능한 기능입니다.');
      router.replace('/login');
    }
  };
  //아래와 같이 쿼리로 변경하려고 했으나 에러 부분의 호출 지연이 너무 심해 기존의 코드를 유지하기로 했습니다
  //코드에 잘못된 부분이 있어 늦게 호출이 되는거라면 의견 부탁드립니다!
  //pr 리뷰 완료 후 이 부분은 삭제 예정입니다.
  // const { data, refetch  } = useQuery({
  //   queryKey: ['myQnA'],
  //   queryFn: () =>  getMyQnA(productId),
  //   onSuccess: (data) => setMyDetailList(data.content),
  //   onError: error => {
  //     console.log('나의 문의하기 err')
  //     console.log(error)
  //     if(error == 'Error: 로그인화면으로보내야함'){
  //       router.replace('/login');
  //     }
  //   }
  // });
  useEffect(() => {
    handleQnAList();
    // refetch();
  }, []);

  return (
    <>
      {myDetailList.length == 0 ? (
        <Styled.ErrorMessage>
          해당 상품에 대한 문의가 존재하지 않습니다.
        </Styled.ErrorMessage>
      ) : (
        <QnAWrapper detailList={myDetailList} />
      )}
    </>
  );
  // ;
};

const Styled = {
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

export default MyQnA;
