export const SubMenus = (menuName: string) => {
  switch (menuName) {
    case 'cart':
      return [
        { id: 'totalSearch', value: '전체조회' },
        { id: 'order', value: '주문관리' },
        { id: 'cancel', value: '취소/반품/교환' },
      ];
      break;
    case 'product':
      return [
        { id: 'regist', value: '상품등록' },
        { id: 'category', value: '카테고리 관리' },
        { id: 'product', value: '상품 관리' },
      ];
      break;
    case 'member':
      return [
        { id: 'member', value: '회원 조회/관리' },
        { id: 'message', value: '메세지 발송' },
      ];
      break;
    case 'board':
      return [
        { id: 'search', value: '게시글 조회' },
        { id: 'manage', value: '게시글 관리' },
      ];
      break;
    case 'promotion':
      return [
        { id: 'point', value: '적립금 설정/관리' },
        { id: 'coupon', value: '쿠폰 조회/관리' },
      ];  
      break;
    default:
      break;
  }
};
