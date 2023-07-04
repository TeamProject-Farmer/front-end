export interface InputFieldProps {
  label?: string;
  required?: boolean;
  field: string;
  width?: number;
  placeholder?: string;
  checkBoxLabel?: string;
}

export interface CheckBoxInputProps {
  label: string;
  smallBox?: boolean; 
}

export interface ButtonProps {
  text: string;
  bgColor?: string;
  color?: string;
}

export interface InputGroupProps {
  title: string;
  before?: string;
  children: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface OrderedProduct {
  id: string;
  title: string;
  count: number;
  price: number;
}

export interface PayMethod {
  id: string;
  title: string;
}