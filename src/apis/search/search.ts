import request from '../base';

//최근 검색 항목
export const postSearch = async (
  searchWord: string,
  memberEmail?: string,
  sortSearchCond?: string,
) => {
  const response = await request({
    method: 'post',
    url: '/api/main/search',
    params: {
      searchWord: searchWord,
      memberEmail: memberEmail,
      sortSearchCond: sortSearchCond,
    },
  });
  return response.data;
};
