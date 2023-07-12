export const requiredErrorMsg = '필수 항목입니다.';

export const validateName = (value: string) => {
  if (value.length < 2) {
    return '두글자 이상 입력해주세요.';
  }
  return true;
};

export const validateMobile = (value: string) => {
  if (!/^[0-9]{3,4}-[0-9]{4}/.test(value) || value.length > 9) {
    return '올바르지 않은 전화번호 형식입니다.';
  }
  return true;
};
