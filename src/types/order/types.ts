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
  

export interface IInputFieldProps {
  label?: string;
  required?: boolean;
  field: string;
  width?: number;
  placeholder?: string;
  checkBoxLabel?: string;
}

export interface ICheckBoxInputProps {
  label: string;
  smallBox?: boolean; 
}

export interface IButtonProps {
  text: string;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
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