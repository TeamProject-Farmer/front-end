import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldError } from 'react-hook-form';

export type TFieldName =
  | 'name'
  | 'mobile'
  | 'postCode'
  | 'basicAddress'
  | 'detailAddress'
  | 'checked';

export type TValidate = (
  value: any,
) => boolean | string | Promise<boolean | string>;

export interface ICoupon {
  couponId: number;
  benefits: string;
  name: string;
  couponPolicy: string;
  fixedPrice: number;
  rateAmount: number;
}

export interface IInputFieldProps {
  label?: string;
  field: string;
  placeholder?: string;
  required?: boolean;
  inputProps?: UseFormRegisterReturn;
  error?: string | null;
  couponOptions?: ICoupon[];
  // 타입 수정
  usedPoint?: number;
  handleSelectedCoupon?: (event) => void;
  handlePointChange?: (event) => void;
  disabledPointBtn?: boolean;
  disabledCouponBtn?: boolean;
  getDiscountedPrice?: () => void;
}

export interface ICheckBoxInputProps {
  label: string;
  field?: string;
  smallBox?: boolean;
  checked?: boolean;
  onChange?: () => void;
}

export interface IButtonProps {
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

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface IOrderedProduct {
  id: string;
  title: string;
  count: number;
  price: number;
}

export interface PayMethod {
  id: string;
  title: string;
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
