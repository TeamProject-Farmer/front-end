import { PayMethod } from 'src/types/order/types';

const payMethod: PayMethod[] = [
  { title: '카드', pg: 'INIpayTest', method: 'card' },
  { title: '계좌이체', pg: 'INIBillTst', method: 'trans' },
  { title: '가상계좌', pg: 'TC0ONETIME', method: 'vbank' },
  { title: '카카오페이', pg: 'TC0ONETIME', method: 'kakaopay' },
  { title: '핸드폰', pg: 'A010002002', method: 'phone' },
];

export default payMethod;
