export const OptionArray = {
  ALL: '전체 주문처리 상태',
  WAIT: '결제대기',
  FAIL: '주문실패',
  DONE: '주문완료',
  CANCEL: '주문취소',
  REFUND: '환불',
  EXCHANGE: '교환',
  RETURN: '반품',
};

export const OptionList = Object.keys(OptionArray).map(value => ({
  label: OptionArray[value],
  value,
}));
