import request from '../base';

//검색 결과 가져오기
export const postSearch = async (
  searchWord: string,
  // memberEmail?: string,
  sortSearchCond?: string,
) => {
  const response = await request.post(
    '/main/search',
    {},
    {
      params: { searchWord, sortSearchCond },
    },
  );
  console.log('api', response.data.searchProduct.content);
  return response.data;
};

//최근 검색 항목
export const getRecentSearch = async (
  // searchWord: string,
  memberEmail: string,
) => {
  const response = await request.post(
    '/main/search',
    {},
    {
      params: { memberEmail },
    },
  );
  return response.data.memberSearchWord;
};
