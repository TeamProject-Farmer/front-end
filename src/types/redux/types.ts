export interface UserState {
  socialId: string;
  email: string;
  nickname: string;
  point: number;
  grade: string;
  role: string;
  cumulativeAmount: number;
  memberCoupon: number;
}

export interface CartState {
  idArray: number[];
  allChecked: boolean;
}

export interface TokenState {
  accessToken: string;
}
