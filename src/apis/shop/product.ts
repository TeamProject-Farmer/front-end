import request from '../base';

//상품 전체 리스트
export const getProductList = async (orderType: string, id: number) => {
  const response = await request({
    url: `/main/product/${id}?page=0&size=16`,
    params: {
      orderCondition: orderType,
    },
  });
  return response.data;
};
// export const getProductList = async () => {
//   const response = await request({
//     url: `/main/product/5?page=0&size=16`,
//     params: {
//       orderCondition: 'NEWS',
//     },
//   });
//   return response.data;
// };

//MD PICK 리스트
export const getMDPickList = async () => {
  const response = await request.get('/main/product/md-pick');
  return response.data;
  
};
