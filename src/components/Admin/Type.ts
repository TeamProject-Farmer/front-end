export interface accouontInnerPropsList {
  nickname: string;
  manager: string;
  registerDate: string;
  role: string;
}
export interface boardInnerPropsList {
  id: string;
  title: string;
  like: number;
  buyer: string;
  commentTitle: string;
  comment: string;
}

export interface memberInnerPropsList {
  nickname: string;
  email: string;
  phoneNum: string;
  name: string;
  grade: string;
  registerDate: string;
}

export interface productInnerPropsList {
  title: string;
  date: string;
  category: string;
  price: number;
  discount: number;
  productCode: string;
}