import { ShippingMsg } from 'src/types/order/types';

const shippingMsgOptions: ShippingMsg[] = [
  { type: 'OFFICE', text: '부재 시 경비실에 맡겨주세요' },
  { type: 'BOX', text: '부재 시 택배함에 넣어주세요' },
  { type: 'FRONT', text: '부재 시 집 앞에 놔주세요' },
  { type: 'CALL', text: '배송 전 연락 바랍니다.' },
  { type: 'TEXT', text: '직접 입력' },
];

export default shippingMsgOptions;
