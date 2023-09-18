import {
  UseFormSetValue,
  UseFormTrigger,
  FieldValues,
  Control,
} from 'react-hook-form';

export type CouponPolicy = 'FIXED' | 'RATE';

export interface Coupon {
  couponId: number;
  memberCouponId: number;
  benefits: string;
  name: string;
  couponPolicy: CouponPolicy;
  fixedPrice: number;
  rateAmount: number;
}

export interface Point {
  point: number;
}

export interface InputFieldProps {
  label?: string;
  caption?: string;
  control?: Control<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  trigger?: UseFormTrigger<FieldValues>;
  setShowShippingMsgInput?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PaymentInputProps {
  label?: string;
  caption?: string;
  control?: Control<FieldValues>;
  couponOptions?: Coupon[];
  usedPoint?: number;
  handleSelectedCoupon?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePoint?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabledPointBtn?: boolean;
  disabledCouponBtn?: boolean;
  getDiscountedPrice?: () => void;
}

export interface CheckBoxInputProps {
  label: string;
  caption?: string;
  smallBox?: boolean;
  checked?: boolean;
  onChange?: () => void;
  control?: Control<FieldValues>;
}

export interface ButtonProps {
  text: string;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface InputGroupProps {
  title: string;
  before?: string;
  children: React.ReactNode;
}

export interface OrderItem {
  cartId?: number;
  productId: number;
  imgUrl: string;
  productName: string;
  optionId: number;
  optionName?: string;
  count: number;
  productPrice: number;
  totalPrice?: number;
}

export interface OrderPayload {
  productList: OrderItem[];
  totalAmount: number;
  deliveryInfo: DeliveryInfo;
  point: number | undefined;
  couponId?: number;
}

export interface OrderProduct {
  productId: number;
  optionId: number;
  count: number;
  orderPrice: number;
}

export type PgOption =
  | 'INIpayTest'
  | 'INIBillTst'
  | 'TC0ONETIME'
  | 'TC0ONETIME'
  | 'A010002002';

export type MethodOption = 'card' | 'trans' | 'vbank' | 'kakaopay' | 'phone';

export interface PayMethod {
  title?: string;
  pg: PgOption;
  method: MethodOption;
}

export type ShippingMsgOption = 'OFFICE' | 'BOX' | 'FRONT' | 'CALL' | 'TEXT';

export interface ShippingMsg {
  type: ShippingMsgOption;
  text: string;
}

export interface OrderedData {
  username: string;
  zipcode: string;
  address: string;
  addressDetail: string;
  phoneNumber: string;
}

export interface PostOrderData extends OrderedData {
  orderProduct: OrderProduct[];
  memo: string;
  selfMemo: string;
  defaultAddr: boolean;
  orderNumber: string;
  orderTotalPrice: number;
  totalQuantity: number;
  point: number;
  payMethod: string;
}

export interface DaumPostcodeData {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  zonecode: string;
}

export interface RequestPayAdditionalParams {
  digital?: boolean;
  vbank_due?: string;
  m_redirect_url?: string;
  app_scheme?: string;
  biz_num?: string;
}

export interface Display {
  card_quota?: number[];
}

export interface RequestPayParams extends RequestPayAdditionalParams {
  pg?: string;
  pay_method: string;
  escrow?: boolean;
  merchant_uid: string;
  name?: string;
  amount: number;
  custom_data?: any;
  tax_free?: number;
  currency?: string;
  language?: string;
  buyer_name?: string;
  buyer_tel: string;
  buyer_email?: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  notice_url?: string | string[];
  display?: Display;
}

export interface RequestPayAdditionalResponse {
  apply_num?: string;
  vbank_num?: string;
  vbank_name?: string;
  vbank_holder?: string | null;
  vbank_date?: number;
}

export interface RequestPayResponse extends RequestPayAdditionalResponse {
  success: boolean;
  error_code: string;
  error_msg: string;
  imp_uid: string | null;
  merchant_uid: string;
  pay_method?: string;
  paid_amount?: number;
  status?: string;
  name?: string;
  pg_provider?: string;
  pg_tid?: string;
  buyer_name?: string;
  buyer_email?: string;
  buyer_tel?: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  custom_data?: any;
  paid_at?: number;
  receipt_url?: string;
}

export type RequestPayResponseCallback = (response: RequestPayResponse) => void;

export interface Iamport {
  init: (accountID: string) => void;
  request_pay: (
    params: RequestPayParams,
    callback?: RequestPayResponseCallback,
  ) => void;
}

declare global {
  interface Window {
    IMP?: Iamport;
  }
}

export interface OrderInfo {
  pg: PgOption;
  pay_method: MethodOption;
  merchant_uid: string;
  name: string;
  amount: number;
  buyer_email: string;
  buyer_name: string;
  buyer_tel: string;
  buyer_addr: string;
  buyer_postcode: string;
}

export interface DeliveryInfo {
  username: string;
  address: string;
  zipcode: string;
  addressDetail: string;
  phoneNumber: string;
  memo: ShippingMsgOption;
  selfMemo: string;
  defaultAddr: boolean;
  payMethod: MethodOption;
}

export interface ResultData {
  name: string;
  phoneNumber: string;
  address: string;
  paymentPrice: number;
  orderedDate: string;
  orderNumber: string;
}

export interface ProcessPaymentResponse {
  response: RequestPayResponse;
  resultInfo: ResultData;
}
