export const sideBarMenuItems = [
  { href: '/admin', imageName: 'home', menuName: '홈' },
  { href: '/admin/cart', imageName: 'cart', menuName: '주문' },
  { href: '/admin/product', imageName: 'product', menuName: '상품' },
  { href: '/admin/member', imageName: 'member', menuName: '회원' },
  { href: '/admin/board', imageName: 'board', menuName: '게시판' },
  { href: '/admin/promotion', imageName: 'promotion', menuName: '프로모션' },
];

export const MenuRoute = (route: string) => {
  switch (route) {
    case '/admin/cart':
      return 'cart';
      break;
    case '/admin/product':
      return 'product';
      break;
    case '/admin/member':
      return 'member';
      break;
    case '/admin/board':
      return 'board';
      break;
    case '/admin/promotion':
      return 'promotion';
      break;
    default:
      return 'home';
      break;
  }
};



export const TodoList = [
  { title: '결제대기', id: 0 },
  { title: '배송대기', id: 1 },
  { title: '배송중', id: 2 },
  { title: '취소신청/완료', id: 3 },
  { title: '교환신청/완료', id: 4 },
  { title: '반품신청/완료', id: 5 },
];

export const AnalysticsTab = [
  { id: 0, title: '일별 매출 현황' },
  { id: 1, title: '주문처리 현황' },
  { id: 2, title: '회원/적립금 현황' },
  { id: 3, title: '게시물 현황' },
];
