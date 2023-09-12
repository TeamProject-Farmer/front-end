import { Dispatch, SetStateAction } from 'react';

// 주문 배열
export interface OrderListProps {
  count: number;
  imgUrl: string;
  optionName: string;
  optionPrice: number;
  orderPrice: number;
  orderProductId: number;
  orderStatus: string;
  price: number;
  productId: number;
  productName: string;
  serialNumber: string;
}

// 마이페이지 수정
export interface ProfileEditProps {
  nickname: string;
  password: string;
}

export interface ProfileEditComponentProps extends ProfileEditProps {
  passwordConfirm: string;
  setNickname: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setPasswordConfirm: Dispatch<SetStateAction<string>>;
  duplicate: boolean;
}

// 구매목록
export interface PurchaseListProps {
  productId: number;
  productName: string;
  imgUrl: string;
}

export interface PurchaseListParams {
  startDate: string;
  endDate: string;
  orderStatus: string;
}

export interface CalendarProps {
  selectedDateRange: [Date | null, Date | null];
  setSelectedDateRange: Dispatch<SetStateAction<[Date | null, Date | null]>>;
  handleSearchList: () => void;
  setEndDate: Dispatch<SetStateAction<string>>;
  setStartDate: Dispatch<SetStateAction<string>>;
}

export interface SearchOptionProps {
  setSelectedDateRange: Dispatch<SetStateAction<[Date | null, Date | null]>>;
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
  handleSearchList: () => void;
}

export interface OrderStatusProps {
  setOrderStatus: Dispatch<SetStateAction<string>>;
  orderStatus: string;
}

export interface OrderTextProps {
  size: string;
  color: string;
  text: string | number;
}

//리뷰 post
export interface postReviewProps{
  productId: number;
  fiveStarRating: string;
  content: string;
  reviewImage: File |Blob;
}

// 쿠폰
export interface CouponProps {
  index: number;
  code: string;
  title: string;
  validity: string;
}

export interface CouponArrayProps {
  couponId: number;
  endDateTime: string;
  name: string;
  serialNumber: string;
  startDateTime: string;
}

// 장바구니
export interface CartListProps {
  cartId: number;
  productId: number;
  imgUrl: string;
  productName: string;
  optionId: number;
  optionName: string;
  count: number;
  productPrice: number;
  totalPrice: number;
}

export interface CartButtonProps {
  backgroundColor: string;
  padding: string;
  width: string;
  size: string;
  color: string;
  weight: string;
  label: string;
  onClick: () => void;
}

export interface CartButtonBoxProps {
  getSelectedCartItems: () => CartListProps[];
  handlePlaceOrder: (selectedItems: CartListProps[] | undefined) => void;
  handleRemoveCartList: () => Promise<void>;
}
