import { DaumPostcodeData } from 'src/types/order/types';

export const formatAddress = (data: DaumPostcodeData) => {
  let fullAddress = data.address;
  let extraAddress = '';
  //도로명 주소
  if (data.addressType === 'R') {
    if (data.bname !== '') {
      extraAddress += data.bname;
    }
    if (data.buildingName !== '') {
      extraAddress +=
        extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    }
    return (fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '');
  }
};
