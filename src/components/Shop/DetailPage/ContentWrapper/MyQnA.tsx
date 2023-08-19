import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getMyQnA } from 'src/apis/shop/qna';
import QnAWrapper from '@components/Shop/Common/ProductWrapper/QnAWrapper';

const MyQnA = () => {
  const [myDetailList, setMyDetailList] = useState([]);
  const router = useRouter();

  const handleQnAList = async () => {
    try {
      const mine = await getMyQnA();
      setMyDetailList(mine.content);
    } catch(err) {
      if(err.response.status == 500){
        // "message": "토큰을 다시 확인해주세요" 이기 때문에 login 화면으로 route 처리함
        router.replace('/login')
      }
    }

  };
  useEffect(() => {
    handleQnAList();
  }, []);

  return <QnAWrapper detailList={myDetailList}></QnAWrapper>;
}

export default MyQnA;