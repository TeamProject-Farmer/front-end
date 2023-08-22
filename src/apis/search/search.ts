import request from '../base';

//검색 결과 가져오기
export const postSearch = async (
  searchWord: string,
  sortSearchCond?: string,
  memberEmail?: string,
) => {
  const response = await request.post(
    '/main/search',
    {},
    {
      params: { searchWord, sortSearchCond, memberEmail },
    },
  );
  return response.data.content;
};

//최근 검색 항목
export const getRecentSearch = async () => {
  const response = await request.get('/member/search/word');
  return response.data;
};
