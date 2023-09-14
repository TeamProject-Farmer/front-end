import { useQuery } from '@tanstack/react-query';
import { getMyQnA } from 'src/apis/shop/qna';
import checkIsMember from 'src/utils/shop/checkIsMember';
import QnAWrapper from '@components/Shop/DetailPage/ContentWrapper/QnA/QnAWrapper';
import { MyQnAStyled as Styled } from './styles';

const MyQnA = ({ productId }: { productId: number }) => {
  const { routeToLogin } = checkIsMember();

  const { data: myDetailList, isLoading } = useQuery({
    queryKey: ['myQnA'],
    queryFn: () => getMyQnA(productId),
    onError: error => {
      routeToLogin();
    },
    retry: 0,
  });
  
  if(isLoading) return;
  else{
    return (
      <>
        {myDetailList.content?.length == 0 ? (
          <Styled.ErrorMessage>
            해당 상품에 대한 문의가 존재하지 않습니다.
          </Styled.ErrorMessage>
        ) : (
          <QnAWrapper detailList={myDetailList.content} />
        )}
      </>
    );
  }
};


export default MyQnA;
