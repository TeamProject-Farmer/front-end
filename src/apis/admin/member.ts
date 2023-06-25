import request from '../base';

export const memberList = async (fieldName: string) => {
  // const { page, fieldName } = props;
  return request({
    url: `/admin/member-list?fieldName=${fieldName}`,
  });
};

//회원단건조회
export const memberData = async (memberId: number) => {  
  return request({
    url: `/admin/members/${memberId}`,
  });
};
