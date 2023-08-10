export const requiredErrorMsg = '필수 항목입니다.';

export const validateName = (value: string) => {
  if (value.length < 2) {
    return '두 글자 이상 입력해 주세요.';
  }
  return true;
};

export const validateMobile = (value: string) => {
  if (
    !/^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}/.test(value) ||
    value.length > 13
  ) {
    return '올바르지 않은 전화번호 형식입니다.';
  }
  return true;
};

export const validatePoint = (point: number, usedPoint: number) => {
  if (usedPoint > point) {
    return alert('최대로 사용할 수 있는 적립금을 초과하였습니다.');
  }
  if (usedPoint < 2000) {
    return alert('적립금 최소 사용금액은 2000원입니다.');
  }
  return true;
};
