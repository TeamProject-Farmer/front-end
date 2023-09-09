// 스크롤 제일 위로
export const scrollToTop = (height?: number) => {
  height? window.scrollTo(0, height) : window.scrollTo(0, 0);
};
