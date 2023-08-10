import { ISelectedMethod, IDeliveryInfo } from 'src/types/order/types';
import generateOrderNumber from './generateOrderNumber';
import { postVerifyIamport } from 'src/apis/order/order';

const processPayment = (
  productName: string,
  totalAmount: number,
  payment: ISelectedMethod,
  deliveryInfo: IDeliveryInfo,
) => {
  const { pg, method } = payment;
  const { name, mobile, basicAddress, detailAddress, postCode } = deliveryInfo;

  const orderedData = {
    pg: pg,
    pay_method: method,
    merchant_uid: generateOrderNumber(),
    name: productName,
    amount: totalAmount,
    buyer_name: name,
    buyer_tel: mobile,
    buyer_addr: basicAddress + detailAddress,
    buyer_postcode: postCode,
  };

  const { IMP } = window;
  IMP.init(process.env.NEXT_PUBLIC_IMP_UID);

  const callback = async (response: any) => {
    const { paid_amount, error_msg, imp_uid } = response;
    const verifyRes = await postVerifyIamport(imp_uid, orderedData);
    if (verifyRes.amount === paid_amount) {
      alert('결제 성공');
      return;
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  IMP.request_pay(orderedData, callback);
};

export default processPayment;
