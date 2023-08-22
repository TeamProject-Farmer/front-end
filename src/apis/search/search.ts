import request from '../base';

//검색 결과 가져오기
// export const postSearch = async (
//   searchWord: string,
//   sortSearchCond?: string,
//   memberEmail?: string,
// ) => {
//   const response = await request.post(
//     '/main/search',
//     {},
//     {
//       params: { searchWord, sortSearchCond, memberEmail },
//     },
//   );
//   return response.data.content;
// };

export const postSearch = async (
  searchWord: string,
  sortSearchCond?: string,
  memberEmail?: string,
) => {
  console.log(searchWord, sortSearchCond, memberEmail);
  const formData = new FormData();
  formData.append('searchWord', searchWord);
  formData.append('sortSearchCond', sortSearchCond);
  formData.append('memberEmail', memberEmail);
  const response = await request.post('/main/search', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data.content;
};

//최근 검색 항목
export const getRecentSearch = async () => {
  const response = await request.get('/member/search/word');
  console.log(response.data);
  return response.data;
};
