import request from '../base';
import { productListProps, ShopBySizeProps } from 'src/types/shop/apiTypes';

//상품 전체 리스트
export const getProductList = async (props: productListProps) => {
  let {productOption, categoryId, currentIndex} = props;
  if(categoryId == undefined) categoryId = 1;
  
  const response = await request({
    url: `/main/product/${categoryId}?page=${currentIndex}&size=16`,
    params: {
      orderCondition: productOption,
    },
  });
  return response.data;
};

//MD PICK 리스트
export const getMDPickList = async () => {
  const response = await request({url: '/main/product/md-pick?division=MD_PICK'});
  return response.data;
};

//SHOP BY SIZE 상품
export const getShopBySize = async (props: ShopBySizeProps) => {
  const {sizeOption, orderType, currentIndex} = props;
  const response = await request({url: `main/product/shop-by-size/product-list?productSize=${sizeOption}&page=${currentIndex}&size=16&sort=string&orderCondition=${orderType}`});
  return response.data;
};

//상품 세부 페이지
export const getDetail = async (productId: number) => {
  const response = await request({url: `/main/product/detail/${productId}`});
  return response.data;
};

//기획전 상품 리스트
export const getEventProduct = async () => {
  const response = await request({url: '/main/product/plan-products?division=PLAN'});
  return response.data;
};
