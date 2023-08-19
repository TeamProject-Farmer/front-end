export interface UserState {
  socialId: string;
  email: string;
  nickname: string;
  point: number;
  grade: string;
  role: string;
  cumulativeAmount: number;
  memberCoupon: number;
  accessToken: string;
  refreshToken: string;
}

export interface CartState {
  idArray: number[];
  allChecked: boolean;
}

export interface categoryState {
  name: string;
  id: number;
}