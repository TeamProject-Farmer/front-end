import request from '../base';
import { QnAEditProps } from 'src/types/shop/apiTypes';
import store from '../../../store/index';
const accessToken = store.getState().user.accessToken;
const email = store.getState().user.email;

//QnA 리스트 전체 출력
export const getQnAList = async (productId: number, currentIndex: number) => {
  const response = await request.get(
    `/main/qna/${productId}?page=${currentIndex}&size=5&direction=ASC`,
  );
  return response.data;
};

//내가 쓴 문의사항
export const getMyQnA = async () => {
  const response = await request.get(
    '/member/qna/mine?page=0&size=5&direction=ASC',
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  return response.data;
};

//문의 사항 상세보기
export const getDetailQnA = async (qnaId: number) => {
  const response = await request.get(
    `/main/productQna/${qnaId}?memberEmail=${email}`,
  );
  return response.data;
};
//QnA 작성
export const getQnAEdit = async (props: QnAEditProps) => {
  const {productId, currentOption, content, secretQuestion, qcreatedDateTime} = props
  console.log('secretQuestion');
  console.log(secretQuestion);
  const formData = new FormData();
  formData.append('productId', productId);
  formData.append('subject', currentOption);
  formData.append('content', content);
  formData.append('secretQuestion', secretQuestion);
  formData.append('qcreatedDateTime', qcreatedDateTime);

  return await request.post('/member/qna/write', formData, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
