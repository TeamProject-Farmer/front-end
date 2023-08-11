export const formatPhoneNumber = (phoneNumber: string): string => {
  const number = phoneNumber?.trim().replace(/[^0-9]/g, '');

  if (number?.length >= 3 && number?.length <= 6) {
    return number.replace(/(\d{3})(\d{0,3})/, '$1-$2');
  } else if (number?.length > 6 && number?.length <= 10) {
    return number.replace(/(\d{3})(\d{3})(\d{0,4})/, '$1-$2-$3');
  } else if (number?.length > 10) {
    return number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }

  return number;
};
