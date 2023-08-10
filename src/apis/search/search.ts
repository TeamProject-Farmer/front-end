import request from '../base';

//최근 검색 항목
export const postSearch = async (
  searchWord: string,
  memberEmail?: string,
  sortSearchCond?: string,
) => {
  const response = await request.post(
    '/main/search',
    {},
    {
      params: { searchWord, memberEmail, sortSearchCond },
    },
  );
  return response.data;
};
