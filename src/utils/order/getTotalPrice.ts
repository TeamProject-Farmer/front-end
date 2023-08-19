import { CartItem } from '../../types/order/types';

const getTotalPrice = (productList: CartItem[]) => {
  let total = 0;

  for (const product of productList) {
    total += product.totalPrice;
  }

  return total;
};

export default getTotalPrice;
