import request from '../base';

//회원 전체 리스트
export const memberList = async (fieldName: string) => {
  // const { page, fieldName } = props;
  return request({
    url: `/admin/member-list?fieldName=${fieldName}`,
  });
};

//회원 단건 조회
export const memberData = async (memberId: number) => {  
  return request({
    url: `/admin/members/${memberId}`,
  });
};
