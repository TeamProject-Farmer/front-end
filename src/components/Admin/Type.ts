import React, { SetStateAction, Dispatch } from 'react'

export interface accouontInnerPropsList {
  nickname: string;
  manager: string;
  registerDate: string;
  role: string;
}
export interface boardInnerPropsList {
  id: number;
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
  id: number;
}

export interface productInnerPropsList {
  title: string;
  date: string;
  category: string;
  price: number;
  discount: number;
  productCode: string;
}

export interface smallButtonPropsList {
  text: string;
  modalOpen?: ()=>void | undefined;
}

export interface middleButtonPropsList {
  text: string;
  modalOpen?: () => void | undefined;
}


export interface statusBoxPropsList {
  title: string;
  first: string;
  second: string;
  third: string;
  last: string;
  checkBox: boolean;
}

//추후 다른 곳에서도 수정완료되면 선택에서 필수로 수정 예정
export interface singleTabPropsList {
  text: string;

}

export interface innerBodyPropsList {
  tabProps: any;
  innerBoxProps: any;
  footerButtonProps: any;
  handleCheckAll?: ()=>void;
}

export interface sideBarMenuPropsList {
  imageName: string;
  menuName: string;
  router: string;
}

export interface buttonProps {
  isChecked?: boolean;
}