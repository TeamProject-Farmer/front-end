import { useState, useEffect } from 'react';
import { getMyQnA } from 'src/apis/shop/qna';
import QnAWrapper from '@components/Shop/Common/ProductWrapper/QnAWrapper';

const MyQnA = () => {
  const [myDetailList, setMyDetailList] = useState([]);

  const handleQnAList = async () => {
    const mine = await getMyQnA();
    setMyDetailList(mine.content)
    // "message": "토큰을 다시 확인해주세요",
    // 로그인이 안돼 토큰값이 없어서 생기는 에러가 뜨면 로그인이나 회원가입을 하게 분기처리 해주면 될 것 같습니다.
  };
  useEffect(() => {
    handleQnAList();
  }, []);

  return <QnAWrapper detailList={myDetailList}></QnAWrapper>;
}

export default MyQnA;