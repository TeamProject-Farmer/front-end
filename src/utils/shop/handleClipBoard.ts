export const handleCopyClipBoard = async (productId: number, name: string) => {
  try {
    await navigator.clipboard.writeText(
      `https://front-end-farmer-shop.vercel.app/shop/detail/${productId}`,
    );
    alert(`클립보드에 '${name}'의 링크가 복사되었습니다.`);
  } catch (e) {
    alert('복사에 실패하였습니다');
  }
};
