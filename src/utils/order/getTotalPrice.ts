import { IOrderedProduct } from '../../types/order/types';

const getTotalPrice = (productList: IOrderedProduct[]) => {
  let total = 0;

  for (const product of productList) {
    total += product.totalPrice;
  }

  return total;
};

export default getTotalPrice;
