export const formatPhoneNumber = (phoneNumber: string): string => {
  const number = phoneNumber?.trim().replace(/[^0-9]/g, "");

  if (number?.length < 8) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
  return number?.replace(/(\d{4})(\d{4})/, "$1-$2");
};