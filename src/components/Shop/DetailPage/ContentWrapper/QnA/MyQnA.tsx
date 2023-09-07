import styled from '@emotion/styled';
import theme from '@styles/theme';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
      if (err.response.status == 500) {
        // "message": "토큰을 다시 확인해주세요" 이기 때문에 login 화면으로 route 처리함
        router.replace('/login');
      }
    }
  };
  useEffect(() => {
    handleQnAList();
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
