export const sideBarMenuItems = [
  { href: '/admin', imageName: 'home', menuName: '홈' },
  { href: '/admin/order', imageName: 'order', menuName: '주문' },
  { href: '/admin/product', imageName: 'product', menuName: '상품' },
  { href: '/admin/member', imageName: 'member', menuName: '회원' },
  { href: '/admin/board', imageName: 'board', menuName: '게시판' },
  { href: '/admin/promotion', imageName: 'promotion', menuName: '프로모션' },
];

export const MenuRoute = (route: string) => {
  const splitRoute = route.split('/', 3);
  return splitRoute[2];
};

export const SubMenus = (menuName: string) => {
  switch (menuName) {
    case 'order':
      return [
        { id: 'totalSearch', value: '전체조회', pathName: '/admin/order' },
        // { id: 'order', value: '주문관리', pathName: '/admin/order/management' },
        // { id: 'cancel', value: '취소/반품/교환', pathName: '/admin/' },
      ];
      break;
    case 'product':
      return [
        { id: 'regist', value: '상품등록', pathName: '/admin/product' },
        { id: 'category', value: '카테고리 관리', pathName: '' },
        { id: 'product', value: '상품 관리', pathName: '' },
      ];
      break;
    case 'member':
      return [
        { id: 'member', value: '회원 조회/관리', pathName: '/admin/member' },
        { id: 'message', value: '메세지 발송', pathName: '' },
      ];
      break;
    case 'board':
      return [
        { id: 'search', value: '게시글 조회', pathName: '/admin/board' },
        { id: 'manage', value: '게시글 관리', pathName: '/admin/board/manage' },
      ];
      break;
    case 'promotion':
      return [
        {
          id: 'point',
          value: '적립금 설정/관리',
          pathName: '/admin/promotion',
        },
        {
          id: 'coupon',
          value: '쿠폰 조회/관리',
          pathName: '/admin/promotion/coupon',
        },
      ];
      break;
    default:
      break;
  }
};
