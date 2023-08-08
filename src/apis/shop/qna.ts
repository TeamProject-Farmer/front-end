import request from '../base';

//QnA 리스트 전체 출력
export const getQnAList = async () => {
  const response = await request({url: '/main/qna?page=0&size=5&direction=ASC'});
  return response.data;
};