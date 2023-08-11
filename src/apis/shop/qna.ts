import request from '../base';
import { QnAEditProps } from 'src/types/shop/types';
import store from '../../../store/index'
const accessToken = store.getState().user.accessToken;

//QnA 리스트 전체 출력
export const getQnAList = async (productId: number, currentIndex:number) => {
  const response = await request.get(`/main/qna/${productId}?page=${currentIndex}&size=5&direction=ASC`);
  return response.data;
};

//내가 쓴 문의사항
export const getMyQnA = async () => {
  const response = await request.get('/member/qna/mine?page=0&size=5&direction=ASC',{headers : {Authorization: `Bearer ${accessToken}`,}});
  return response.data;
};

//문의 사항 상세보기 http://3.39.150.186:8080/api/main/productQna/19?memberEmail=codms7020%40naver.com
export const getDetailQnA = async (qnaId: number) => {
  const response = await request.get(`/main/productQna/${qnaId}?memberEmail=codms7020%40naver.com`);
  return response.data;
};
//QnA 작성
export const getQnAEdit = async ({productId, currentOption, content, secretQuestion, qcreatedDateTime}:QnAEditProps) => {
  // {productId,subject, content, secretQuestion, qcreatedDateTime}:QnAEditProps
  console.log('secretQuestion')
  console.log(secretQuestion)
  const formData = new FormData();
  formData.append('productId', productId);
  formData.append('subject', currentOption);
  formData.append('content',content );
  formData.append('secretQuestion', secretQuestion);
  formData.append('qcreatedDateTime', qcreatedDateTime);

  return await request.post('/member/qna/write', formData, {headers : {Authorization: `Bearer ${accessToken}`,}});
};

// {
//   "productId": 0,
//   "subject": "string",
//   "content": "string",
//   "secretQuestion": "GENERAL",
//   "qcreatedDateTime": "2023-08-08T21:20:49.655Z"
// }