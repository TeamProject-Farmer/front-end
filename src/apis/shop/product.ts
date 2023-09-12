import axios from 'axios';
import request from '../base';
import { BASE_URL } from '../base';
import {
  productListProps,
  shopBySizeProps,
  cartProps,
} from 'src/types/shop/apiTypes';

//상품 전체 리스트
export const getProductList = async (props: productListProps) => {
  let { productOption, categoryId, currentIndex } = props;
  if (categoryId == undefined) categoryId = 1;

  const response = await axios({
    url: `${BASE_URL}/main/product/${categoryId}?page=${currentIndex}&size=16`,
    params: {
      orderCondition: productOption,
    },
  });
  return response.data;
};

//MD PICK 리스트
export const getMDPickList = async () => {
  const response = await axios(
    `${BASE_URL}/main/product/md-pick?division=MD_PICK`,
  );
  return response.data;
};

//SHOP BY SIZE 상품
export const getShopBySize = async (props: shopBySizeProps) => {
  const { sizeOption, orderType, currentIndex } = props;
  const response = await axios(
    `${BASE_URL}/main/product/shop-by-size/product-list?productSize=${sizeOption}&page=${currentIndex}&size=16&sort=string&orderCondition=${orderType}`,
  );
  return response.data;
};

//상품 세부 페이지
export const getDetail = async (productId: number) => {
  const response = await axios(`${BASE_URL}/main/product/detail/${productId}`);
  return response.data;
};

//기획전 상품 리스트
export const getEventProduct = async () => {
  const response = await axios({
    url: `${BASE_URL}/main/product/plan-products?division=PLAN`,
  });
  return response.data;
};

//장바구니 추가
export const postCart = async (props: cartProps) => {
  const { productId, optionId, count } = props;
  let formData = new FormData();
  formData.append('product', productId);
  formData.append('option', optionId);
  formData.append('count', count);

  return await request.post('/member/cart', formData);
};
