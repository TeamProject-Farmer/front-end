import request from '../base';
import { QnAEditProps } from 'src/types/shop/types';

//QnA 리스트 전체 출력
export const getQnAList = async (productId: number) => {
  const response = await request.get(`/main/qna/${productId}?page=0&size=5&direction=ASC`);
  return response.data;
};

//내가 쓴 문의사항
export const getMyQnA = async () => {
  const response = await request.get('member/qna/mine?page=0&size=5&direction=ASC');
  return response.data;
};

//QnA 작성
export const getQnAEdit = async () => {
  // {productId,subject, content, secretQuestion, qcreatedDateTime}:QnAEditProps
  let id: number = 7;
  let  subject: string = '상품';
  let  content: string = '내용';
  let  secretQuestion = 'GENERAL';
  let  qcreatedDateTime: string = '2023-08-08T21:20:49.655Z';

  const formData = new FormData();
  // formData.append('productId', id);
  formData.append('subject', subject);
  formData.append('content',content );
  formData.append('secretQuestion', secretQuestion);
  formData.append('qcreatedDateTime', qcreatedDateTime);

  return await request.post('/member/qna/write', formData);
};

// {
//   "productId": 0,
//   "subject": "string",
//   "content": "string",
//   "secretQuestion": "GENERAL",
//   "qcreatedDateTime": "2023-08-08T21:20:49.655Z"
// }