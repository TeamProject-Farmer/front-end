import request from '../base';

// interface ListProps {
//   page: number;
//   fieldName: string;
// }

export const accountList = async (fieldName: string) => {
  // const { page, fieldName } = props;
  
  return request({
    url: `/admin/account?fieldName=${fieldName}`,
  });
};

export const accountSearch = async (memberId: number) => {  
  return request({
    url: `/admin/account/?managers/${memberId}`,
  });
};
