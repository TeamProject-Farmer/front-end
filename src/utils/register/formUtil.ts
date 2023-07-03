// error message
export const requiredErrorMessage = '필수 항목입니다.';

// form validation
export const validatePhoneNumber = (value: string) => {
  if (!/^\d{11}$/.test(value)) {
    return '올바르지 않은 전화번호 형식입니다. "-"를 제외한 11자 숫자';
  }
  return true;
};

export const validatePassword = (value: string) => {
  if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(value)) {
    return '영문과 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.';
  }
  return true;
};

export const validateNickname = (value: string) => {
  if (!/^[a-zA-Z가-힣0-9]{2,10}$/.test(value)) {
    return '2자 이상 10자 이내의 닉네임을 입력해주세요. (특수문자 X)';
  }
  return true;
};
