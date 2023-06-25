import request from '../base';

// interface ListProps {
//   page: number;
//   fieldName: string;
// }
//관리자 권한 계정 리스트
export const accountList = async (fieldName: string) => {
  // const { page, fieldName } = props;
  
  return request({
    url: `/admin/account?fieldName=${fieldName}`,
  });
};

//관리자 단건 조회
export const accountData = async (memberId: number) => {  
  return request({
    url: `/admin/account/?managers/${memberId}`,
  });
};
