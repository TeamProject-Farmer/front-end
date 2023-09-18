import { OrderItem } from '../../types/order/types';

const getTotalPrice = (productList: OrderItem[]) => {
  let total = 0;

  for (const product of productList) {
    product.totalPrice
      ? (total += product.totalPrice)
      : (total = product.productPrice);
  }

  return total;
};

export default getTotalPrice;
